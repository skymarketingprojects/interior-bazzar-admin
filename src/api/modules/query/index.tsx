import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { ApiResponseType } from "../../../types/reqResType";
import type { BusinessInfo, } from "../../../types/global";
import type { AdminLeadType, AdsQueryForm } from "../../../types/content";

export class QueryService {
    static async createQuery(data: BusinessInfo) {
        try {
            const url = `${appUrl.query}/create-query/`;
            const response: ApiResponseType<BusinessInfo> =
                await apiService.getPostApiResponse(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async createAdsQuery(data: AdsQueryForm) {
        try {
            const url = `${appUrl.query}/ads/create/`;
            const response: ApiResponseType<AdsQueryForm> =
                await apiService.getPostApiResponse(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async verifyAdsQuery(data: AdsQueryForm) {
        try {
            const url = `${appUrl.query}/ads/verify/`;
            const response: ApiResponseType<AdsQueryForm> =
                await apiService.getPostApiResponse(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async fetchLeads() {
        try {
            const url = `${appUrl.query}/`;
            const response: ApiResponseType<AdminLeadType[]> =
                await apiService.getGetApiResponse(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async updateLead(data: any) {
        try {
            const url = `${appUrl.query}/update/`;
            const response: ApiResponseType<AdminLeadType> =
                await apiService.getPostApiResponse(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async getStripConfig() {
        try {
            const url = `${appUrl.query}/offer-text/`;
            const response: ApiResponseType<any> = await apiService.getGetApiResponse(
                url
            );
            return response;
        } catch (error) {
            throw error;
        }
    }
}
