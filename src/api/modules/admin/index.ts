import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type {
  ApiResponseType,
  BusinessSearchResType,
  GetPaginatedAdminLeadsType,
  GetPaginatedAdminBusinessesType,
} from "../../../types/reqResType";
import { logger } from "../../../utils/logger";
import type { BusinessType } from "../../../types/content";

export class AdminService {
  static async fetchBusinesses(pageNo: number, pageSize: number) {
    try {
      const url = `${appUrl.admin}/businesses/${pageNo}/${pageSize}/`;
      const response: ApiResponseType<GetPaginatedAdminBusinessesType> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async fetchLeads(pageNo: number, pageSize: number) {
    try {
      const url = `${appUrl.admin}/query/${pageNo}/${pageSize}/`;
      const response: ApiResponseType<GetPaginatedAdminLeadsType> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      logger.error("Error fetching leads:", error);
      throw error;
    }
  }
  static async getSearchedBusinesses(query: string, signal?: AbortSignal) {
    try {
      const url = `${appUrl.admin}/business/search/${encodeURIComponent(
        query
      )}/`;
      const response: ApiResponseType<BusinessSearchResType> =
        await apiService.getGetApiResponse(url, { signal });
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async getBusinessDetail(businessId: number, signal?: AbortSignal) {
    try {
      const url = `${appUrl.admin}/business/${businessId}/`;
      const response: ApiResponseType<BusinessType> =
        await apiService.getGetApiResponse(url, { signal });
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async assignLeadToBusiness(leadId: number, businessId: number) {
    try {
      const url = `${appUrl.admin}/leads/${leadId}/assign/`;
      const response: ApiResponseType<any> =
        await apiService.getPostApiResponse(url, { businessId });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
