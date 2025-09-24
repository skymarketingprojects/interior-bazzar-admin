import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { ApiResponseType } from "../../../types/reqResType";

export class PlansService {
    static async getPlans() {
        try {
            const url = `${appUrl.plan}/template/`;
            const response: ApiResponseType<any> =
                await apiService.getGetApiResponse(url);
            return response;
        } catch (error) {
            throw error;
        }
    }

    static async submitQuery(data: any) {
        try {
            const url = `${appUrl.plan}/submit/`;
            const response: ApiResponseType<any> =
                await apiService.getPostApiResponse(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    }
    static async planQuery(data: any) {
        try {
            const url = `${appUrl.plan}/create/`;
            const response: ApiResponseType<any> =
                await apiService.getPostApiResponse(url, data);
            return response;
        } catch (error) {
            throw error;
        }
    }

}
