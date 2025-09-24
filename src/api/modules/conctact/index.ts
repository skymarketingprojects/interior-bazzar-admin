import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { ApiResponseType } from "../../../types/reqResType";

export class ContactService {
  static async submitContactInfo(data: any) {
    try {
      const url = `${appUrl.contact}/create/`;
      const formData = new FormData();

      Object.entries(data).forEach(([key, value]) => {
        if (value !== undefined && value !== null) {
          if (value instanceof File || value instanceof Blob) {
            // if it's a File/Blob, append directly
            formData.append(key, value);
          } else {
            // fallback: ensure it’s a string
            formData.append(key, String(value));
          }
        }
      });
      const response: ApiResponseType<any> =
        await apiService.getPostApiResponse(url, formData);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
