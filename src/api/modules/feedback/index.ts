import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { ApiResponseType } from "../../../types/reqResType";
export class FeedbackService {
  static async submitContactInfo(data: any) {
    try {
      const url = `${appUrl.feedback}/create/`;
      const response: ApiResponseType<any> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
