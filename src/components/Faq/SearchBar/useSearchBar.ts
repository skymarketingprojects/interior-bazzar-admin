import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { useAlert } from "../../../context/AlertContext";
const useBlogSearchBar = () => {
  const { showAlert } = useAlert();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(searchTerm);
    showAlert("Under development" + " " + searchTerm, "info");
    setSearchTerm("");
  };
  return { searchTerm, handleSearchChange, handleSubmit };
};
export default useBlogSearchBar;
