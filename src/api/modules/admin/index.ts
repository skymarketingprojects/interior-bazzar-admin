import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type {
  ApiResponseType,
  BusinessSearchResType,
  GetPaginatedAdminLeadsType,
  GetPaginatedAdminBusinessesType,
  GetPaginatedFunnelLeadType,
  GetPaginatedBusinessAnalytics,
} from "../../../types/reqResType";
import { logger } from "../../../utils/logger";
import type {
  AdminLeadType,
  BusinessType,
  SignupData,
} from "../../../types/content";

export class AdminService {
  static async fetchTotalUsers() {
    try {
      const url = `${appUrl.admin}/total-users/`;
      const response: ApiResponseType<{ totalUsers: number }> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
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
  static async fetchFunnelLeads(pageNo: number, pageSize: number) {
    try {
      const url = `${appUrl.admin}/funnel/${pageNo}/${pageSize}/`;
      const response: ApiResponseType<GetPaginatedFunnelLeadType> =
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

  static async assignLeadToBusiness(data: {
    leadId: number;
    businessId: number;
  }) {
    try {
      const url = `${appUrl.admin}/lead/assign/`;
      const response: ApiResponseType<AdminLeadType> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }

  /* Get  Analytics here  */
  static async getBusinessAnalytics() {
    try {
      const url = `${appUrl.admin}/chart/`;
      const response: ApiResponseType<SignupData[]> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
