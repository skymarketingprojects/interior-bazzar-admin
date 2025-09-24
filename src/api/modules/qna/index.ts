import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { ApiResponseType } from "../../../types/reqResType";

export class QnaService {
  static async getQnas() {
    try {
      const url = `${appUrl.qna}/`;
      const response: ApiResponseType<any> = await apiService.getGetApiResponse(
        url
      );
      return response;
    } catch (error) {
      throw error;
    }
  }
}
