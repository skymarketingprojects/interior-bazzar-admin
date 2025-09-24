import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { ApiResponseType } from "../../../types/reqResType";

export class QuoteService {
  static async createQuote(data: any) {
    try {
      const url = `${appUrl.quote}/create/`;
      const response: ApiResponseType<any> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async verifyQuote(data: any) {
    try {
      const url = `${appUrl.quote}/verify/`;
      const response: ApiResponseType<any> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
