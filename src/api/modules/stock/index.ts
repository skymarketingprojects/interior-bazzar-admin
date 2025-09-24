import appUrl from "../../endpoints";
import apiService from "../../apiService";
import type { ApiResponseType } from "../../../types/reqResType";
import type {
  HomeCarouselType,
  HomeVideoType,
  VideoResType,
} from "../../../types/global";

export class StockService {
  static async getCarouselImages() {
    try {
      const url = `${appUrl.stock}/home/hero/`;
      const response: ApiResponseType<HomeCarouselType[]> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async getOfferHeroImages() {
    try {
      const url = `${appUrl.stock}/home/offer/`;
      const response: ApiResponseType<HomeCarouselType[]> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }

  static async getHomeVideo() {
    try {
      const url = `${appUrl.stock}/get-home-video/`;
      const response: ApiResponseType<VideoResType> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async getHomeReels() {
    try {
      const url = `${appUrl.stock}/get/home/reels/`;
      const response: ApiResponseType<HomeVideoType[]> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async fetchPlanTestimonials() {
    try {
      const url = `${appUrl.stock}/plan/testimonial/`;
      const response: ApiResponseType<HomeCarouselType[]> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
  static async fetchPlanBanner() {
    try {
      const url = `${appUrl.stock}/plan/banner/`;
      const response: ApiResponseType<HomeCarouselType[]> =
        await apiService.getGetApiResponse(url);
      return response;
    } catch (error) {
      throw error;
    }
  }
}
