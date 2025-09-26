import { useEffect, useState } from "react";
import type {
  AdminLeadType,
  AdminLeadFormType,
} from "../../../../../types/content";
import { logger } from "../../../../../utils/logger";
// import { useAlert } from "../../../../../context/AlertContext";
// import { useModal } from "../../../../../context/ModalContext";
import { AdminService } from "../../../../../api/modules/admin";
const useBusinessTable = () => {
  // const { showAlert } = useAlert();
  // const { closeModal } = useModal();
  const [loading, setLoading] = useState<boolean>(false);
  const [leads, setLeads] = useState<AdminLeadType[]>([]);
  const [pageNo, setPageNo] = useState<number>(1);
  const [hasNext, setHasNext] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(20);

  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await AdminService.fetchLeads(pageNo, pageSize);
      if (!res.response) {
        logger.error("Failed to fetch leads");
        return;
      }
      setLeads(res.data.leads);
      setTotalPages(res.data.totalPages);
      setHasNext(res.data.hasNext);
    } catch (e) {
      logger.error("Error while fetching leads: ", e);
    } finally {
      setLoading(false);
    }
  };

  const updateLead = async (updatedLead: AdminLeadFormType) => {
    // const { id } = updatedLead;
    // if (!id) {
    //   logger.error("Lead id is missing");
    //   showAlert("Lead id is missing", "error");
    //   return;
    // }
    // try {
    //   const res = await QueryService.updateLead(updatedLead);
    //   logger.log("thios is  updated lead: ", res);
    //   if (!res.response) {
    //     showAlert("Failed to update lead", "error");
    //     return;
    //   }
    //   showAlert("Lead updated successfully", "success");
    //   const updatedLeads = leads.map((lead) => {
    //     if (lead.id === id) {
    //       return res.data;
    //     }
    //     return lead;
    //   });
    //   closeModal();
    //   setLeads(updatedLeads);
    // } catch (e) {
    //   logger.error("Error while updating lead: ", e);
    //   showAlert("Error while updating lead", "error");
    // }
  };

  useEffect(() => {
    fetchLeads();
  }, [pageNo]);
  const incrementPage = () => {
    if (pageNo < totalPages) {
      setPageNo((prev) => prev + 1);
    }
  };

  return {
    leads,
    incrementPage,
    loading,
    updateLead,
    pageSize,
    pageNo,
    totalPages,
    setPageNo,
    hasNext,
  };
};

export default useBusinessTable;
