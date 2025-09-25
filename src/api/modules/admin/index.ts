import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type {
  ApiResponseType,
  BusinessSearchResType,
} from "../../../types/reqResType";
import { logger } from "../../../utils/logger";
import type { BusinessType } from "../../../types/content";

export class AdminService {
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

  static async assignLeadToBusiness(
    leadId: number,
    businessId: number
  ): Promise<ApiResponseType<null>> {
    try {
      const url = `${appUrl.admin}/leads/${leadId}/assign/`;
      const response: ApiResponseType<null> =
        await apiService.getPostApiResponse(url, { businessId });
      return response;
    } catch (error) {
      throw error;
    }
  }
}
