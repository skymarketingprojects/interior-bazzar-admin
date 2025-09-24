import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { ApiResponseType } from "../../../types/reqResType";
import type { AdminLeadType } from "../../../types/content";

export class LeadService {
  static async fetchLeads() {
    try {
      const url = `${appUrl.lead}/`;
      const response: ApiResponseType<AdminLeadType[]> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async updateLead(id: number, data: any) {
    try {
      const url = `${appUrl.lead}/${id}/`;
      const response: ApiResponseType<AdminLeadType> =
        await apiService.getPutApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
