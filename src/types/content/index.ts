import type {
  TagValueType,
  StatusValueType,
  PriorityValueType,
} from "../../utils/constants/app";
export interface PlanType {
  id: number;
  name: string;
  features: string[];
  price: number;
  type: "listing" | "filter";
  description: string;
  video: string;
  fallback: string;
  plan_pdf: string;
}

export interface BusinessCardProps {
  id: number;
  since: string;
  rating: string;
  timeAgo: string;
  location: string;
  category: string;
  badge?: string;
  ratingValue: number;
  companyName: string;
  membershipId: string;
  businessName: string;
  businessImage: string;
}

export interface AdsQueryForm {
  id?: number;
  phone: string;
  interested: string;
  name: string;
  email: string;
  query: string;
  city: string;
  country: string;
}

export interface AdminLeadType {
  id: number;
  date: string;
  name: string;
  phone: string;
  email: string;
  request: string;
  detail: string;
  country: string;
  city: string;
  assigned: string;
}

export type AdminLeadFormType = Omit<AdminLeadType, "id"> & { id?: number };
