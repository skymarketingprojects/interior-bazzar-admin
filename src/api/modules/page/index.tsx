import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { ApiResponseType } from "../../../types/reqResType";
export class PageService {
    static async getDisclaimer() {
        try {
            const url = `${appUrl.page}/disclaimer/`;
            const response: ApiResponseType<any> = await apiService.getGetApiResponse(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async getPrivacyPolicy() {
        try {
            const url = `${appUrl.page}/privacy-policy/`;
            const response: ApiResponseType<any> = await apiService.getGetApiResponse(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async getReturnRefund() {
        try {
            const url = `${appUrl.page}/return-and-refund/`;
            const response: ApiResponseType<any> = await apiService.getGetApiResponse(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async getTermsConditon() {
        try {
            const url = `${appUrl.page}/terms-and-conditions/`;
            const response: ApiResponseType<any> = await apiService.getGetApiResponse(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async getPaymentPage() {
        try {
            const url = `${appUrl.page}/payment/`;
            const response: ApiResponseType<any> = await apiService.getGetApiResponse(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async getImportantLinks() {
        try {
            const url = `${appUrl.page}/important-links/`;
            const response: ApiResponseType<any> = await apiService.getGetApiResponse(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async getQna() {
        try {
            const url = `${appUrl.page}/qna/`;
            const response: ApiResponseType<any> = await apiService.getGetApiResponse(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async getLegal() {
        try {
            const url = `${appUrl.page}/legal/`;
            const response: ApiResponseType<any> = await apiService.getGetApiResponse(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async getLeadPolicy() {
        try {
            const url = `${appUrl.page}/lead-policy/`;
            const response: ApiResponseType<any> = await apiService.getGetApiResponse(url);
            return response;
        } catch (error) {
            throw error;
        }
    }
}