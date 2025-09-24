import { useEffect, useState } from "react";
import type {
  AdminLeadType,
  AdminLeadFormType,
} from "../../../../../types/content";
import { logger } from "../../../../../utils/logger";
import { useAlert } from "../../../../../context/AlertContext";
import { QueryService } from "../../../../../api/modules/query";
import { useModal } from "../../../../../context/ModalContext";
const useLeadTable = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [leads, setLeads] = useState<AdminLeadType[]>([]);
  const { showAlert } = useAlert();
  const { closeModal } = useModal();
  const fetchLeads = async () => {
    try {
      setLoading(true);
      const res = await QueryService.fetchLeads();
      logger.log("this is lead for me: ", res);
      if (!res.response) {
        logger.error("Failed to fetch leads");
        return;
      }
      setLeads(res.data);
    } catch (e) {
      logger.error("Error while fetching leads: ", e);
    } finally {
      setLoading(false);
    }
  };

  const updateLead = async (updatedLead: AdminLeadFormType) => {
    const { id } = updatedLead;

    if (!id) {
      logger.error("Lead id is missing");
      showAlert("Lead id is missing", "error");
      return;
    }
    try {
      const res = await QueryService.updateLead(updatedLead);
      logger.log("thios is  updated lead: ", res);
      if (!res.response) {
        showAlert("Failed to update lead", "error");
        return;
      }
      showAlert("Lead updated successfully", "success");
      const updatedLeads = leads.map((lead) => {
        if (lead.id === id) {
          return res.data;
        }
        return lead;
      });
      closeModal();
      setLeads(updatedLeads);
    } catch (e) {
      logger.error("Error while updating lead: ", e);
      showAlert("Error while updating lead", "error");
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  return {
    leads,
    loading,
    updateLead,
  };
};

export default useLeadTable;
