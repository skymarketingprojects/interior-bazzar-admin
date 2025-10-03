import { useEffect, useState } from "react";
import type { BusinessFilterType } from "../../../types/content";
import { AdminService } from "../../../api/modules/admin";
import { logger } from "../../../utils/logger";
const useBusinesses = () => {
  const [noOfUsers, setNoOfUsers] = useState<number>(0);
  const [selectOptions] = useState<string[]>(["All", "Active"]);
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [filters, setFilters] = useState<BusinessFilterType>({
    sortBy: "",
    searchText: "",
  });
  const [searchText, setSearchText] = useState<string>("");
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    if (e.target.name === "searchText") setSearchText(value);
    else if (e.target.name === "sortBy") setSelectedOption(value);
  };

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setFilters({
      searchText: searchText,
      sortBy: selectedOption,
    });
  };
  const fetchUsers = async () => {
    try {
      const res = await AdminService.fetchTotalUsers();
      if (!res.response) {
        logger.error("Failed to fetch total users");
        return;
      }
      setNoOfUsers(res.data.totalUsers);
    } catch (e) {
      logger.error("Error while setting total User: ", e);
    }
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return {
    searchText,
    selectedOption,
    filters,
    noOfUsers,
    selectOptions,
    handleSearch,
    handleChange,
  };
};
export default useBusinesses;
