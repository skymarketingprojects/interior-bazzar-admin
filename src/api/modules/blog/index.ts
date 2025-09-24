import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type {
  ApiResponseType,
  GetPaginatedBlogs,
} from "../../../types/reqResType";
import type { GetBlogResponseType } from "../../../types/global";

export class BlogService {
  static async getBlogs(pageNo: number = 1) {
    try {
      const url = `${appUrl.blog}/pagination/${pageNo}/`;
      const response: ApiResponseType<GetPaginatedBlogs> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }

  static getBlogById = async (id: number) => {
    try {
      const url = `${appUrl.blog}/${id}/`;
      const response: ApiResponseType<GetBlogResponseType> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  };
}
