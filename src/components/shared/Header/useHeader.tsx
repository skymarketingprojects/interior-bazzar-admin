import { useState, type ChangeEvent } from "react";
import { useAppSelector } from "../../../redux/store/hook";
import { PAGES } from "../../../utils/constants/app";
import { useAlert } from "../../../context/AlertContext";

const useHeader = () => {
  const { showAlert } = useAlert();
  const auth = useAppSelector((state) => state.auth);

  let adminLink = "";
  if (auth.isAuthenticated) {
    adminLink = `/dashboard`;
  }
  const [search, setSearch] = useState("");
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    showAlert("Under development" + " " + search, "info");
    setSearch("");
  };
  const links = [
    { label: "Seller/Buyer", url: PAGES.SELLER_BUYER },
    { label: "FAQs", url: PAGES.FAQ },
  ];
  const isAuthenticated = auth.isAuthenticated;
  return {
    links,
    search,
    adminLink,
    isAuthenticated,

    handleSubmit,
    handleSearchChange,
  };
};

export default useHeader;
