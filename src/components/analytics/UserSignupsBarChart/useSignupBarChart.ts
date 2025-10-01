import { useState, useMemo } from "react";
export type FilterType = "daily" | "weekly" | "monthly";
import type { SignupData } from "../../../types/content";
import { DateFormatter } from "../helper";
const userSignups = [
  { date: "2025-07-01", signups: 50, paid: 12, active: 8 },
  { date: "2025-07-02", signups: 42, paid: 13, active: 11 },
  { date: "2025-07-03", signups: 13, paid: 9, active: 7 },
  { date: "2025-07-04", signups: 25, paid: 8, active: 8 },
  { date: "2025-07-05", signups: 11, paid: 5, active: 4 },
  { date: "2025-07-06", signups: 67, paid: 16, active: 9 },
  { date: "2025-07-07", signups: 64, paid: 20, active: 12 },
  { date: "2025-07-08", signups: 43, paid: 12, active: 14 },
  { date: "2025-07-09", signups: 28, paid: 9, active: 7 },
  { date: "2025-07-10", signups: 36, paid: 14, active: 10 },
  { date: "2025-07-11", signups: 75, paid: 19, active: 15 },
  { date: "2025-07-12", signups: 30, paid: 7, active: 8 },
  { date: "2025-07-13", signups: 79, paid: 15, active: 11 },
  { date: "2025-07-14", signups: 71, paid: 18, active: 10 },
  { date: "2025-07-15", signups: 49, paid: 16, active: 12 },
  { date: "2025-07-16", signups: 53, paid: 18, active: 13 },
  { date: "2025-07-17", signups: 34, paid: 13, active: 12 },
  { date: "2025-07-18", signups: 48, paid: 15, active: 11 },
  { date: "2025-07-19", signups: 20, paid: 9, active: 7 },
  { date: "2025-07-20", signups: 59, paid: 17, active: 10 },
  { date: "2025-07-21", signups: 38, paid: 12, active: 9 },
  { date: "2025-07-22", signups: 63, paid: 20, active: 15 },
  { date: "2025-07-23", signups: 22, paid: 6, active: 5 },
  { date: "2025-07-24", signups: 60, paid: 14, active: 10 },
  { date: "2025-07-25", signups: 55, paid: 16, active: 9 },
  { date: "2025-07-26", signups: 41, paid: 15, active: 12 },
  { date: "2025-07-27", signups: 39, paid: 12, active: 11 },
  { date: "2025-07-28", signups: 66, paid: 18, active: 13 },
  { date: "2025-07-29", signups: 77, paid: 19, active: 14 },
  { date: "2025-07-30", signups: 45, paid: 12, active: 9 },
  { date: "2025-07-31", signups: 32, paid: 10, active: 8 },
  { date: "2025-08-01", signups: 52, paid: 14, active: 10 },
  { date: "2025-08-02", signups: 47, paid: 12, active: 9 },
  { date: "2025-08-03", signups: 35, paid: 10, active: 8 },
  { date: "2025-08-04", signups: 60, paid: 17, active: 13 },
  { date: "2025-08-05", signups: 44, paid: 11, active: 10 },
  { date: "2025-08-06", signups: 39, paid: 9, active: 7 },
  { date: "2025-08-07", signups: 68, paid: 21, active: 15 },
  { date: "2025-08-08", signups: 55, paid: 16, active: 13 },
  { date: "2025-08-09", signups: 33, paid: 8, active: 6 },
  { date: "2025-08-10", signups: 29, paid: 7, active: 5 },
  { date: "2025-08-11", signups: 72, paid: 19, active: 14 },
  { date: "2025-08-12", signups: 48, paid: 13, active: 10 },
  { date: "2025-08-13", signups: 62, paid: 18, active: 12 },
  { date: "2025-08-14", signups: 50, paid: 14, active: 11 },
  { date: "2025-08-15", signups: 46, paid: 13, active: 9 },
  { date: "2025-08-16", signups: 31, paid: 9, active: 6 },
  { date: "2025-08-17", signups: 40, paid: 11, active: 8 },
  { date: "2025-08-18", signups: 57, paid: 15, active: 12 },
  { date: "2025-08-19", signups: 36, paid: 10, active: 7 },
  { date: "2025-08-20", signups: 70, paid: 20, active: 15 },
  { date: "2025-08-21", signups: 64, paid: 18, active: 14 },
  { date: "2025-08-22", signups: 41, paid: 12, active: 9 },
  { date: "2025-08-23", signups: 30, paid: 8, active: 6 },
  { date: "2025-08-24", signups: 58, paid: 16, active: 11 },
  { date: "2025-08-25", signups: 66, paid: 19, active: 13 },
  { date: "2025-08-26", signups: 49, paid: 15, active: 10 },
  { date: "2025-08-27", signups: 37, paid: 10, active: 7 },
  { date: "2025-08-28", signups: 63, paid: 17, active: 14 },
  { date: "2025-08-29", signups: 74, paid: 20, active: 16 },
  { date: "2025-08-30", signups: 43, paid: 12, active: 9 },
  { date: "2025-08-31", signups: 34, paid: 10, active: 7 },
  { date: "2025-09-01", signups: 58, paid: 16, active: 12 },
  { date: "2025-09-02", signups: 42, paid: 11, active: 9 },
  { date: "2025-09-03", signups: 33, paid: 9, active: 7 },
  { date: "2025-09-04", signups: 60, paid: 18, active: 13 },
  { date: "2025-09-05", signups: 49, paid: 14, active: 10 },
  { date: "2025-09-06", signups: 36, paid: 10, active: 8 },
  { date: "2025-09-07", signups: 65, paid: 19, active: 15 },
  { date: "2025-09-08", signups: 53, paid: 15, active: 11 },
  { date: "2025-09-09", signups: 38, paid: 12, active: 9 },
  { date: "2025-09-10", signups: 45, paid: 13, active: 10 },
  { date: "2025-09-11", signups: 69, paid: 20, active: 16 },
  { date: "2025-09-12", signups: 32, paid: 9, active: 7 },
  { date: "2025-09-13", signups: 76, paid: 22, active: 18 },
  { date: "2025-09-14", signups: 48, paid: 14, active: 11 },
  { date: "2025-09-15", signups: 55, paid: 17, active: 12 },
  { date: "2025-09-16", signups: 39, paid: 11, active: 8 },
  { date: "2025-09-17", signups: 44, paid: 12, active: 10 },
  { date: "2025-09-18", signups: 59, paid: 16, active: 13 },
  { date: "2025-09-19", signups: 31, paid: 8, active: 6 },
  { date: "2025-09-20", signups: 67, paid: 20, active: 15 },
  { date: "2025-09-21", signups: 52, paid: 15, active: 11 },
  { date: "2025-09-22", signups: 43, paid: 13, active: 10 },
  { date: "2025-09-23", signups: 35, paid: 10, active: 8 },
  { date: "2025-09-24", signups: 61, paid: 17, active: 13 },
  { date: "2025-09-25", signups: 73, paid: 21, active: 17 },
  { date: "2025-09-26", signups: 40, paid: 11, active: 9 },
  { date: "2025-09-27", signups: 50, paid: 14, active: 11 },
  { date: "2025-09-28", signups: 62, paid: 18, active: 14 },
  { date: "2025-09-29", signups: 46, paid: 13, active: 10 },
  { date: "2025-09-30", signups: 37, paid: 11, active: 8 },
  { date: "2025-10-01", signups: 37, paid: 11, active: 8 },
];

export const useSignupBarChart = (pageSize: number = 7) => {
  const [filter, setFilter] = useState<FilterType>("daily");
  const [page, setPage] = useState<number>(1);
  const data = userSignups;
  // 🔹 Transform data based on filter
  const filteredData = useMemo(() => {
    if (filter === "daily") {
      return data.map((d) => ({
        ...d,
        date: DateFormatter.monthDay(d.date), // show "Sep 25" instead of "2025-09-25"
      }));
    }

    if (filter === "weekly") {
      const grouped: SignupData[] = [];
      for (let i = 0; i < data.length; i += 7) {
        const slice = data.slice(i, i + 7);
        grouped.push({
          date: `${DateFormatter.monthDay(
            slice[0].date
          )} - ${DateFormatter.monthDay(slice[slice.length - 1].date)}`,
          signups: slice.reduce((a, c) => a + c.signups, 0),
          paid: slice.reduce((a, c) => a + c.paid, 0),
          active: slice.reduce((a, c) => a + c.active, 0),
        });
      }
      return grouped;
    }

    if (filter === "monthly") {
      const map = new Map<string, SignupData>();
      data.forEach((d) => {
        const monthKey = d.date.slice(0, 7); // "YYYY-MM"

        if (!map.has(monthKey)) {
          // get first and last date of the month in your data
          const monthDates = data.filter((item) =>
            item.date.startsWith(monthKey)
          );
          const firstDate = monthDates[0].date;
          const lastDate = monthDates[monthDates.length - 1].date;

          // format using DateFormatter: "01 Jul - 31 Jul"
          const label = `${DateFormatter.monthDay(
            firstDate
          )} - ${DateFormatter.monthDay(lastDate)}`;

          map.set(monthKey, { date: label, signups: 0, paid: 0, active: 0 });
        }

        const item = map.get(monthKey)!;
        item.signups += d.signups;
        item.paid += d.paid;
        item.active += d.active;
      });

      return Array.from(map.values());
    }

    return data;
  }, [filter, data]);

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

  return {
    filter,
    setFilter,
    page,
    setPage,
    paginatedData,
    totalPages,
    handleFilterChange,
  };
};

// interface UseSignupChartDataResult {
//   filter: FilterType;
//   setFilter: (filter: FilterType) => void;
//   page: number;
//   setPage: (page: number) => void;
//   paginatedData: SignupData[];
//   totalPages: number;
//   handleFilterChange: (filter: FilterType) => void;
// }
