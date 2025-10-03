import { useState, useMemo, useEffect } from "react";
export type FilterType = "daily" | "weekly" | "monthly";
import type { SignupData } from "../../../types/content";
import { DateFormatter } from "../helper";
import { AdminService } from "../../../api/modules/admin";
import { logger } from "../../../utils/logger";
const userSignups = [
  { date: "2025-07-01", clients: 50, businesses: 12, users: 8 },
  { date: "2025-07-02", clients: 42, businesses: 13, users: 11 },
  { date: "2025-07-03", clients: 13, businesses: 9, users: 7 },
  { date: "2025-07-04", clients: 25, businesses: 8, users: 8 },
  { date: "2025-07-05", clients: 11, businesses: 5, users: 4 },
  { date: "2025-07-06", clients: 67, businesses: 16, users: 9 },
  { date: "2025-07-07", clients: 64, businesses: 20, users: 12 },
  { date: "2025-07-08", clients: 43, businesses: 12, users: 14 },
  { date: "2025-07-09", clients: 28, businesses: 9, users: 7 },
  { date: "2025-07-10", clients: 36, businesses: 14, users: 10 },
  { date: "2025-07-11", clients: 75, businesses: 19, users: 15 },
  { date: "2025-07-12", clients: 30, businesses: 7, users: 8 },
  { date: "2025-07-13", clients: 79, businesses: 15, users: 11 },
  { date: "2025-07-14", clients: 71, businesses: 18, users: 10 },
  { date: "2025-07-15", clients: 49, businesses: 16, users: 12 },
  { date: "2025-07-16", clients: 53, businesses: 18, users: 13 },
  { date: "2025-07-17", clients: 34, businesses: 13, users: 12 },
  { date: "2025-07-18", clients: 48, businesses: 15, users: 11 },
  { date: "2025-07-19", clients: 20, businesses: 9, users: 7 },
  { date: "2025-07-20", clients: 59, businesses: 17, users: 10 },
  { date: "2025-07-21", clients: 38, businesses: 12, users: 9 },
  { date: "2025-07-22", clients: 63, businesses: 20, users: 15 },
  { date: "2025-07-23", clients: 22, businesses: 6, users: 5 },
  { date: "2025-07-24", clients: 60, businesses: 14, users: 10 },
  { date: "2025-07-25", clients: 55, businesses: 16, users: 9 },
  { date: "2025-07-26", clients: 41, businesses: 15, users: 12 },
  { date: "2025-07-27", clients: 39, businesses: 12, users: 11 },
  { date: "2025-07-28", clients: 66, businesses: 18, users: 13 },
  { date: "2025-07-29", clients: 77, businesses: 19, users: 14 },
  { date: "2025-07-30", clients: 45, businesses: 12, users: 9 },
  { date: "2025-07-31", clients: 32, businesses: 10, users: 8 },
  { date: "2025-08-01", clients: 52, businesses: 14, users: 10 },
  { date: "2025-08-02", clients: 47, businesses: 12, users: 9 },
  { date: "2025-08-03", clients: 35, businesses: 10, users: 8 },
  { date: "2025-08-04", clients: 60, businesses: 17, users: 13 },
  { date: "2025-08-05", clients: 44, businesses: 11, users: 10 },
  { date: "2025-08-06", clients: 39, businesses: 9, users: 7 },
  { date: "2025-08-07", clients: 68, businesses: 21, users: 15 },
  { date: "2025-08-08", clients: 55, businesses: 16, users: 13 },
  { date: "2025-08-09", clients: 33, businesses: 8, users: 6 },
  { date: "2025-08-10", clients: 29, businesses: 7, users: 5 },
  { date: "2025-08-11", clients: 72, businesses: 19, users: 14 },
  { date: "2025-08-12", clients: 48, businesses: 13, users: 10 },
  { date: "2025-08-13", clients: 62, businesses: 18, users: 12 },
  { date: "2025-08-14", clients: 50, businesses: 14, users: 11 },
  { date: "2025-08-15", clients: 46, businesses: 13, users: 9 },
  { date: "2025-08-16", clients: 31, businesses: 9, users: 6 },
  { date: "2025-08-17", clients: 40, businesses: 11, users: 8 },
  { date: "2025-08-18", clients: 57, businesses: 15, users: 12 },
  { date: "2025-08-19", clients: 36, businesses: 10, users: 7 },
  { date: "2025-08-20", clients: 70, businesses: 20, users: 15 },
  { date: "2025-08-21", clients: 64, businesses: 18, users: 14 },
  { date: "2025-08-22", clients: 41, businesses: 12, users: 9 },
  { date: "2025-08-23", clients: 30, businesses: 8, users: 6 },
  { date: "2025-08-24", clients: 58, businesses: 16, users: 11 },
  { date: "2025-08-25", clients: 66, businesses: 19, users: 13 },
  { date: "2025-08-26", clients: 49, businesses: 15, users: 10 },
  { date: "2025-08-27", clients: 37, businesses: 10, users: 7 },
  { date: "2025-08-28", clients: 63, businesses: 17, users: 14 },
  { date: "2025-08-29", clients: 74, businesses: 20, users: 16 },
  { date: "2025-08-30", clients: 43, businesses: 12, users: 9 },
  { date: "2025-08-31", clients: 34, businesses: 10, users: 7 },
  { date: "2025-09-01", clients: 58, businesses: 16, users: 12 },
  { date: "2025-09-02", clients: 42, businesses: 11, users: 9 },
  { date: "2025-09-03", clients: 33, businesses: 9, users: 7 },
  { date: "2025-09-04", clients: 60, businesses: 18, users: 13 },
  { date: "2025-09-05", clients: 49, businesses: 14, users: 10 },
  { date: "2025-09-06", clients: 36, businesses: 10, users: 8 },
  { date: "2025-09-07", clients: 65, businesses: 19, users: 15 },
  { date: "2025-09-08", clients: 53, businesses: 15, users: 11 },
  { date: "2025-09-09", clients: 38, businesses: 12, users: 9 },
  { date: "2025-09-10", clients: 45, businesses: 13, users: 10 },
  { date: "2025-09-11", clients: 69, businesses: 20, users: 16 },
  { date: "2025-09-12", clients: 32, businesses: 9, users: 7 },
  { date: "2025-09-13", clients: 76, businesses: 22, users: 18 },
  { date: "2025-09-14", clients: 48, businesses: 14, users: 11 },
  { date: "2025-09-15", clients: 55, businesses: 17, users: 12 },
  { date: "2025-09-16", clients: 39, businesses: 11, users: 8 },
  { date: "2025-09-17", clients: 44, businesses: 12, users: 10 },
  { date: "2025-09-18", clients: 59, businesses: 16, users: 13 },
  { date: "2025-09-19", clients: 31, businesses: 8, users: 6 },
  { date: "2025-09-20", clients: 67, businesses: 20, users: 15 },
  { date: "2025-09-21", clients: 52, businesses: 15, users: 11 },
  { date: "2025-09-22", clients: 43, businesses: 13, users: 10 },
  { date: "2025-09-23", clients: 35, businesses: 10, users: 8 },
  { date: "2025-09-24", clients: 61, businesses: 17, users: 13 },
  { date: "2025-09-25", clients: 73, businesses: 21, users: 17 },
  { date: "2025-09-26", clients: 40, businesses: 11, users: 9 },
  { date: "2025-09-27", clients: 50, businesses: 14, users: 11 },
  { date: "2025-09-28", clients: 62, businesses: 18, users: 14 },
  { date: "2025-09-29", clients: 46, businesses: 13, users: 10 },
  { date: "2025-09-30", clients: 37, businesses: 11, users: 8 },
  { date: "2025-10-01", clients: 37, businesses: 11, users: 8 },
];

export const useSignupBarChart = (pageSize: number = 7) => {
  const [filter, setFilter] = useState<FilterType>("daily");
  const [page, setPage] = useState<number>(1);
  // const [pageNo, setPageNo] = useState<number>(1);
  // const [hasNext, setHasNext] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

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
      logger.log("This is data on analytics fetch: ", res);
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
