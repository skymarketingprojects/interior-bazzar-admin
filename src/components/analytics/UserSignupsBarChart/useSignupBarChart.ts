import { useState, useMemo, useEffect } from "react";
export type FilterType = "daily" | "weekly" | "monthly";
import type { SignupData } from "../../../types/content";
import { DateFormatter } from "../helper";
import { AdminService } from "../../../api/modules/admin";
import { logger } from "../../../utils/logger";

export const useSignupBarChart = (pageSize: number = 7) => {
  const [filter, setFilter] = useState<FilterType>("daily");
  const [page, setPage] = useState<number>(1);
  // const [pageNo, setPageNo] = useState<number>(1);
  // const [hasNext, setHasNext] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  const [analytics, setAnalytics] = useState<SignupData[]>([]);
  // 🔹 Transform data based on filter
  const filteredData = useMemo(() => {
    if (filter === "daily") {
      return analytics.map((d) => ({
        ...d,
        date: DateFormatter.monthDay(d.date), // show "Sep 25" instead of "2025-09-25"
      }));
    }

    if (filter === "weekly") {
      const grouped: SignupData[] = [];
      for (let i = 0; i < analytics.length; i += 7) {
        const slice = analytics.slice(i, i + 7);
        grouped.push({
          date: `${DateFormatter.monthDay(
            slice[0].date
          )} - ${DateFormatter.monthDay(slice[slice.length - 1].date)}`,
          clients: slice.reduce((a, c) => a + c.clients, 0),
          businesses: slice.reduce((a, c) => a + c.businesses, 0),
          users: slice.reduce((a, c) => a + c.users, 0),
        });
      }
      return grouped;
    }

    if (filter === "monthly") {
      const map = new Map<string, SignupData>();
      analytics.forEach((d) => {
        const monthKey = d.date.slice(0, 7); // "YYYY-MM"

        if (!map.has(monthKey)) {
          // get first and last date of the month in your data
          const monthDates = analytics.filter((item) =>
            item.date.startsWith(monthKey)
          );
          const firstDate = monthDates[0].date;
          const lastDate = monthDates[monthDates.length - 1].date;

          // format using DateFormatter: "01 Jul - 31 Jul"
          const label = `${DateFormatter.monthDay(
            firstDate
          )} - ${DateFormatter.monthDay(lastDate)}`;

          map.set(monthKey, {
            date: label,
            clients: 0,
            businesses: 0,
            users: 0,
          });
        }

        const item = map.get(monthKey)!;
        item.clients += d.clients;
        item.businesses += d.businesses;
        item.users += d.users;
      });

      return Array.from(map.values());
    }

    return analytics;
  }, [filter, analytics]);

  // 🔹 Paginate
  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, page, pageSize]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
    setPage(1);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await AdminService.getBusinessAnalytics();
      if (!res.response) {
        logger.error("Failed to fetch businesses");
        return;
      }
      setAnalytics(res.data);
      // setHasNext(res.data.hasNext);
      // setTotalPages(res.data.totalPages);
      // setBusinesses(res.data.businesses);
    } catch (e) {
      logger.error("Error while fetching businesses: ", e);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return {
    page,
    filter,
    loading,
    setPage,
    setFilter,
    totalPages,
    paginatedData,
    handleFilterChange,
  };
};
