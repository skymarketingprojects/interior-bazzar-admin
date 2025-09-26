import { useEffect, useRef, useState } from "react";
import type { AdminLeadType, BusinessType } from "../../../types/content";
import type { BusinessSearchType } from "../../../types/reqResType";
import { AdminService } from "../../../api/modules/admin";
import { logger } from "../../../utils/logger";

type LoadingKeys = "search" | "detail" | "assign";

const useAssignLead = (lead: AdminLeadType) => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState<BusinessSearchType[]>([]);
  const [selectedBusiness, setSelectedBusiness] = useState<BusinessType | null>(
    null
  );

  // centralized loading state
  const [loading, setLoading] = useState<Record<LoadingKeys, boolean>>({
    search: false,
    detail: false,
    assign: false,
  });

  const controllerRef = useRef<AbortController | null>(null);

  /** Utility helper to run async operations with loading state */
  const runAsync = async (key: LoadingKeys, fn: () => Promise<any>) => {
    setLoading((prev) => ({ ...prev, [key]: true }));
    try {
      return await fn();
    } catch (err) {
      throw err;
    } finally {
      setLoading((prev) => ({ ...prev, [key]: false }));
    }
  };

  /** Fetch search suggestions */
  const fetchSearchResults = async (query: string) => {
    if (controllerRef.current) controllerRef.current.abort();
    const controller = new AbortController();
    controllerRef.current = controller;

    return runAsync("search", async () => {
      const res = await AdminService.getSearchedBusinesses(
        query,
        controller.signal
      );
      setSearchResults(res.data.businesses || []);
    }).catch((err) => {
      if (err.name !== "AbortError") logger.error("Search error:", err);
    });
  };

  /** Fetch selected business detail */
  const fetchBusinessDetail = async (businessId: number) => {
    return runAsync("detail", async () => {
      const res = await AdminService.getBusinessDetail(businessId);
      setSelectedBusiness(res.data);
    }).catch((err) => logger.error("Business detail fetch error:", err));
  };

  /** Handle input change with debounce */
  useEffect(() => {
    if (!searchText.trim()) {
      setSearchResults([]);
      return;
    }

    const debounce = setTimeout(() => {
      fetchSearchResults(searchText);
    }, 300);

    return () => {
      clearTimeout(debounce);
      controllerRef.current?.abort();
    };
  }, [searchText]);

  /** When user selects a business */
  const handleSelectBusiness = (business: BusinessSearchType) => {
    setSearchText(business.businessName);
    setSearchResults([]);
    fetchBusinessDetail(business.id);
  };

  /** Assign lead to selected business */
  const handleAssignLead = async () => {
    if (!selectedBusiness) return;

    await runAsync("assign", async () => {
      await AdminService.assignLeadToBusiness(lead.id, selectedBusiness.id);
      alert("Lead assigned successfully!");
    }).catch((err) => {
      logger.error("Lead assignment failed:", err);
      alert("Failed to assign lead.");
    });
  };

  return {
    searchText,
    setSearchText,
    searchResults,
    selectedBusiness,
    loading,
    handleSelectBusiness,
    handleAssignLead,
  };
};

export default useAssignLead;
