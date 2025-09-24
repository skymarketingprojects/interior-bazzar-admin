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
  const [loading, setLoading] = useState<boolean>(false);
  const [leads, setLeads] = useState<AdminLeadType[]>([
    {
      id: 1,
      date: "2025-09-10",
      name: "Amit Sharma",
      phone: "+91 9876543210",
      email: "amit.sharma@example.com",
      request: "Product demo",
      detail: "Interested in jewelry rolling machines for small workshop",
      country: "India",
      city: "Mumbai",
      assigned: "Rajesh",
    },
    {
      id: 2,
      date: "2025-09-11",
      name: "Sarah Johnson",
      phone: "+1 202-555-0184",
      email: "sarah.johnson@example.com",
      request: "Quotation",
      detail: "Needs quotation for 2 wire drawing machines",
      country: "USA",
      city: "New York",
      assigned: "Unassigned",
    },
    {
      id: 3,
      date: "2025-09-12",
      name: "Mohammed Ali",
      phone: "+971 50 123 4567",
      email: "m.ali@example.com",
      request: "Technical specs",
      detail: "Asked for detailed specifications of hydraulic press machine",
      country: "UAE",
      city: "Dubai",
      assigned: "Anita",
    },
    {
      id: 4,
      date: "2025-09-13",
      name: "Emily Carter",
      phone: "+44 7700 900123",
      email: "emily.carter@example.com",
      request: "Bulk order",
      detail: "Looking for 10 bench draw machines for factory setup",
      country: "UK",
      city: "London",
      assigned: "Karan",
    },
    {
      id: 5,
      date: "2025-09-14",
      name: "Rajiv Mehta",
      phone: "+91 9812345678",
      email: "rajiv.mehta@example.com",
      request: "After-sales service",
      detail: "Requested maintenance service for old rolling machine",
      country: "India",
      city: "Delhi",
      assigned: "Unassigned",
    },
    {
      id: 6,
      date: "2025-09-15",
      name: "Sophia Lee",
      phone: "+65 8123 4567",
      email: "sophia.lee@example.com",
      request: "Custom design",
      detail: "Wants a customized wire drawing machine",
      country: "Singapore",
      city: "Singapore",
      assigned: "Manish",
    },
    {
      id: 7,
      date: "2025-09-16",
      name: "Carlos Fernandez",
      phone: "+34 612 345 678",
      email: "carlos.fernandez@example.com",
      request: "Pricing info",
      detail: "Asked for pricing of hydraulic press models",
      country: "Spain",
      city: "Madrid",
      assigned: "Unassigned",
    },
    {
      id: 8,
      date: "2025-09-17",
      name: "Linda Wong",
      phone: "+852 9123 4567",
      email: "linda.wong@example.com",
      request: "Warranty details",
      detail: "Wanted warranty info for jewelry rolling machine",
      country: "Hong Kong",
      city: "Hong Kong",
      assigned: "Ravi",
    },
    {
      id: 9,
      date: "2025-09-18",
      name: "James Brown",
      phone: "+1 303-555-0123",
      email: "james.brown@example.com",
      request: "Installation support",
      detail: "Requested installation help for wire drawing machine",
      country: "USA",
      city: "Chicago",
      assigned: "Unassigned",
    },
    {
      id: 10,
      date: "2025-09-19",
      name: "Olga Petrova",
      phone: "+7 912 345 6789",
      email: "olga.petrova@example.com",
      request: "Export order",
      detail: "Interested in exporting 5 bench draw machines",
      country: "Russia",
      city: "Moscow",
      assigned: "Anita",
    },
  ]);
  const { showAlert } = useAlert();
  const { closeModal } = useModal();
  const fetchLeads = async () => {
    // try {
    //   setLoading(true);
    //   const res = await QueryService.fetchLeads();
    //   logger.log("this is lead for me: ", res);
    //   if (!res.response) {
    //     logger.error("Failed to fetch leads");
    //     return;
    //   }
    //   setLeads(res.data);
    // } catch (e) {
    //   logger.error("Error while fetching leads: ", e);
    // } finally {
    //   setLoading(false);
    // }
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
    // fetchLeads();
  }, []);

  return {
    leads,
    loading,
    updateLead,
  };
};

export default useLeadTable;
