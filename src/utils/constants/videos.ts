import type { VideoTypeTemp } from "../../types/global";

export const DUMMY_VIDEO: VideoTypeTemp = {
  id: 1,
  type: "square",
  fallback:
    "https://granthamv1.s3.ap-south-1.amazonaws.com/stock_media/page_6/section_None/ed7190aa-2f02-4d55-bda6-8322e84004a1_Social-Agent.jpg",
  video:
    "https://granthamv1.s3.ap-south-1.amazonaws.com/stock_media/page_6/section_None/00e88d32-7779-43fa-a4be-96f2b1398af6_Social_Agent.mp4",
};

export const DUMMY_REEL: VideoTypeTemp = {
  id: 2,
  type: "reel",
  fallback:
    "https://granthamv1.s3.ap-south-1.amazonaws.com/stock_media/page_6/section_None/1b63baad-5354-431f-a224-086f783a0623_thumbnail-1.jpg",
  video:
    "https://granthamv1.s3.ap-south-1.amazonaws.com/stock_media/page_6/section_None/a74e44e9-239b-4548-8e45-cbfb1a5c6bd2_Video-1.mp4",
};
