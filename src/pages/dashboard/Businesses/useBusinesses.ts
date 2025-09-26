import { useState } from "react";

const useBusinesses = () => {
  const [noOfUsers, setNoOfUsers] = useState<number>(25478);
  const [selectOptions, setSelectOptions] = useState<string[]>([
    "All",
    "Active",
  ]);
  const [searchText, setSearchText] = useState<string>("");
  const handleChange = (
    e:
      | React.ChangeEvent<HTMLSelectElement>
      | React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = e.target.value;
    console.log("Selected value:", value);
  };
  return { noOfUsers, selectOptions, searchText, handleChange };
};
export default useBusinesses;
