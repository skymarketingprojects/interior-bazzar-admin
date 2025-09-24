import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { BusinessInfo, BusinessLocation } from "../../../types/global";
import type {
  ApiResponseType,
  GetPaginatedBusinessResType,
  GetTopSellersResType,
} from "../../../types/reqResType";

export class BusinessService {
  static async fetchPaginatedBusiness(pageNo: number = 1) {
    try {
      const url = `${appUrl.business}/pagination/${pageNo}/`;
      const response: ApiResponseType<GetPaginatedBusinessResType> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async createBusiness(data: BusinessInfo) {
    try {
      const url = `${appUrl.business}/create/`;
      const response: ApiResponseType<BusinessInfo> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async getBusinessInfo(
    businessId: number
  ): Promise<ApiResponseType<any>> {
    try {
      const url = `${appUrl.business}/business-info/${businessId}/`;
      const response: ApiResponseType<BusinessInfo> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async updateBusinessInfo(
    businessId: number,
    data: BusinessInfo
  ): Promise<ApiResponseType<any>> {
    try {
      const url = `${appUrl.business}/business-info/${businessId}/`;
      const response: ApiResponseType<BusinessInfo> =
        await apiService.getPatchApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async getBusinessById(
    businessId: number
  ): Promise<ApiResponseType<any>> {
    try {
      const url = `${appUrl.business}/get-business-by-id/${businessId}/`;
      const response: ApiResponseType<BusinessInfo> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async updateLocation(
    data: BusinessLocation
  ): Promise<ApiResponseType<any>> {
    try {
      const url = `${appUrl.business}/location/create-update/`;
      const response: ApiResponseType<BusinessLocation> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async getLocationById(
    businessId: number
  ): Promise<ApiResponseType<any>> {
    try {
      const url = `${appUrl.business}/get-business-location-by-id/${businessId}/`;
      const response: ApiResponseType<BusinessLocation> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async businessProfile(
    businessId: number,
    data: BusinessInfo
  ): Promise<ApiResponseType<any>> {
    try {
      const url = `${appUrl.business}/create-update-business-profile/${businessId}/`;
      const response: ApiResponseType<any> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async updateBusiness(data: any) {
    try {
      const url = `${appUrl.business}/update/`;
      const response: ApiResponseType<any> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async getBusinessDashboardData() {
    try {
      const url = `${appUrl.business}/`;
      const response: ApiResponseType<any> = await apiService.getGetApiResponse(
        url
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async updateProfile(data: any) {
    try {
      const url = `${appUrl.business}/profile/`;
      const response: ApiResponseType<any> = await apiService.getGetApiResponse(
        url,
        data
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async fetchTopSellers(pageNo: number = 1) {
    try {
      const url = `${appUrl.business}/top-business/${pageNo}/`;
      const response: ApiResponseType<GetTopSellersResType> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
