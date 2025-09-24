import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { ApiResponseType } from "../../../types/reqResType";
import type {
  LoginForm,
  SignupForm,
  LoginFormResponse,
  ChangePasswordForm,
  ForgetPasswordForm,
  SignupFormResponse,
  ChangePasswordFormResponse,
  ForgetPasswordFormResponse,
  ResetPassword,
  ResetPasswordResponse,
} from "../../../types/global";

export class AuthService {
  static async signup(data: SignupForm) {
    try {
      const url = `${appUrl.auth}/signup/`;
      const response: ApiResponseType<SignupFormResponse> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async signin(data: LoginForm) {
    try {
      const url = `${appUrl.auth}/signin/`;
      const response: ApiResponseType<LoginFormResponse> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async deleteAccount() {
    try {
      const url = `${appUrl.auth}/delete-account/`;
      const response: ApiResponseType<any> =
        await apiService.getDeleteApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async forgetPassword(data: ForgetPasswordForm) {
    try {
      const url = `${appUrl.auth}/forget_password_request/`;
      const response: ApiResponseType<ForgetPasswordFormResponse> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async changePassword(data: ChangePasswordForm) {
    try {
      const url = `${appUrl.auth}/change-password/`;
      const response: ApiResponseType<ChangePasswordFormResponse> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async resetPassword(data: ResetPassword) {
    try {
      const url = `${appUrl.auth}/reset-password/`;
      const response: ApiResponseType<ResetPasswordResponse> =
        await apiService.getPostApiResponse(url, data);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
