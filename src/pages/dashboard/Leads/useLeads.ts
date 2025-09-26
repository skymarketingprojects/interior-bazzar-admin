import { useState } from "react";
import type { BusinessFilterType } from "../../../types/content";

const useLeads = () => {
  const [noOfUsers] = useState<number>(25478);
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
export default useLeads;
