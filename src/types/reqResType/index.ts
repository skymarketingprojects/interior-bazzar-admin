import type { AUTH_VARS } from "../../utils/constants/app";
import type { BusinessCardProps } from "../content";
import type { BlogType } from "../global";

export interface ApiResponseType<T> {
  data: T;
  response: boolean;
  message: string;
  code: number;
}

export interface ApiErrorType {
  message: string;
  status: string;
  code: number;
}

export interface RequestOptions {
  auth?: boolean;
  responseType?: "json" | "text" | "blob" | "arrayBuffer";
}

// Response After sendin Mobile no to auth

export interface VerifyOtpReqType {
  [AUTH_VARS.SESSION]: string | null;
  otp: string;
}
export interface VerifyOtpEmployeeResType {
  id: number;
}
export interface SendMobileResType {
  [AUTH_VARS.SESSION]: string;
}

export interface VerifyOtpResType {
  [AUTH_VARS.ACCESS]: string;
  [AUTH_VARS.REFRESH]: string;
  isAuthenticated?: boolean;
}

export interface UploadUrlReqType {
  fileName: string;
  fileType: string;
  for: string;
}

export interface UploadUrlResType {
  uploadUrl: string;
  fileUrl: string;
}

// home page req res types

export interface GetPaginatedBusinessResType {
  pageNo: number;
  hasNext: boolean;
  totalPages: number;
  data: BusinessCardProps[];
}
export interface GetTopSellersResType {
  // data: BusinessCardProps[];

  // topSeller: BusinessCardProps;
  topSeller: BusinessCardProps[];
  businesses: BusinessCardProps[];
  hasNext: boolean;
  totalPage: number;
  pageNo: number;
}

export interface GetPaginatedBlogs {
  blogs: BlogType[];
  hasNext: boolean;
  totalPage: number;
  pageNo: number;
}

// Generic paginated response
// export interface PaginatedResponse<T> {
//   pageNo: number;
//   hasNext: boolean;
//   totalPage: number;
//   data: T[];
// }

// // Specific usage
// export type GetPaginatedBusinessResType = PaginatedResponse<BusinessCardProps>;
// export type GetPaginatedBlogs = PaginatedResponse<BlogType>;

// // For top sellers, if you want a custom structure
// export interface GetTopSellersResType {
//   topSeller: BusinessCardProps[];
//   businesses: BusinessCardProps[];
//   hasNext: boolean;
//   totalPage: number;
//   pageNo: number;
// }
