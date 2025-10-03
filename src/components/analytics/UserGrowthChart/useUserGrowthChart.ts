import { useState, useMemo, useEffect } from "react";
import { AdminService } from "../../../api/modules/admin";
import { logger } from "../../../utils/logger";
import type { UserGrowthAnalytics } from "../../../types/reqResType";
import { DateFormatter } from "../helper";

// Pagination type (optional if you want to paginate)
export type FilterType = "daily" | "weekly" | "monthly";

const useUserGrowthChart = (pageSize: number = 7) => {
  const [filter, setFilter] = useState<FilterType>("daily");
  const [page, setPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(true);

  // State to store raw user growth data
  const [userGrowthData, setUserGrowthData] = useState<UserGrowthAnalytics[]>(
    []
  );

  // Transform data based on filter
  const filteredData = useMemo(() => {
    if (filter === "daily") {
      return userGrowthData.map((d) => ({
        ...d,
        date: DateFormatter.monthDay(d.date),
      }));
    }

    if (filter === "weekly") {
      const grouped: UserGrowthAnalytics[] = [];
      for (let i = 0; i < userGrowthData.length; i += 7) {
        const slice = userGrowthData.slice(i, i + 7);
        grouped.push({
          date: `${DateFormatter.monthDay(
            slice[0].date
          )} - ${DateFormatter.monthDay(slice[slice.length - 1].date)}`,
          users: slice.reduce((a, c) => a + c.users, 0),
        });
      }
      return grouped;
    }

    if (filter === "monthly") {
      const map = new Map<string, UserGrowthAnalytics>();
      userGrowthData.forEach((d) => {
        const monthKey = d.date.slice(0, 7); // "YYYY-MM"
        if (!map.has(monthKey)) {
          const monthDates = userGrowthData.filter((item) =>
            item.date.startsWith(monthKey)
          );
          const firstDate = monthDates[0].date;
          const lastDate = monthDates[monthDates.length - 1].date;
          // format using DateFormatter: "01 Jul - 31 Jul"
          const label = `${DateFormatter.monthDay(
            firstDate
          )} - ${DateFormatter.monthDay(lastDate)}`;
          map.set(monthKey, { date: label, users: 0 });
        }
        const item = map.get(monthKey)!;
        item.users += d.users;
      });
      return Array.from(map.values());
    }

    return userGrowthData;
  }, [filter, userGrowthData]);

  // Paginate filtered data
  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredData.slice(start, start + pageSize);
  }, [filteredData, page, pageSize]);

  const totalPages = Math.ceil(filteredData.length / pageSize);

  // Fetch User Growth Data
  const fetchUserGrowthData = async () => {
    try {
      setLoading(true);
      const res = await AdminService.getUserGrowthAnalytics();
      if (!res.response) {
        return;
      }
      logger.log("THis is res of userGrowth: ", res);
      setUserGrowthData(res.data);
    } catch (error) {
      logger.error("Error occurred while fetching user growth data", error);
    } finally {
      setLoading(false);
    }
  };

  // Fetch data on mount
  useEffect(() => {
    fetchUserGrowthData();
  }, []);

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter);
    setPage(1); // Reset page on filter change
  };

  return {
    loading,
    userGrowthData: paginatedData,
    page,
    filter,
    setPage,
    setFilter,
    totalPages,
    handleFilterChange,
  };
};

export default useUserGrowthChart;
