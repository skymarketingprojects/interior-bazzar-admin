export interface BusinessFilterType {
  sortBy: string;
  searchText: string;
}
export interface LeadFilterType {
  sortBy: string;
  searchText: string;
}
export interface TableFilterType {
  sortBy: string;
  searchText: string;
}

/*###########    A N A L Y T I C S    ####################################################################*/

export interface MetricCardType {
  title: string;
  value: number;
  colorHex?: string;
}

export interface SignupData {
  date: string;
  clients: number;
  businesses: number;
  users: number;
}

/*###########    E      N      D    ####################################################################*/

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
  interested: string;
  query: string;
  country: string;
  city: string;
  assigned: string;
}

export interface FunnelLeadType {
  id: number;
  name: string;
  companyName: string;
  email: string;
  phone: string;
  planType: string;
  plan: string;
  intrest: string;
}

export interface AdminBusinessListType {
  id: number;
  name: string;
  plan: string;
  joinAt: string;
  totalLeads: number;
  assignedLeads: number;
  platformLeads: number;
}

export type AdminLeadFormType = Omit<AdminLeadType, "id"> & { id?: number };

export interface BusinessType {
  id: number;
  badge: string;
  bio: string;
  business_name: string;
  category: string;
  city: string;
  country: string;
  cover_image_url: string;
  gst: string;
  location_link: string;
  pin_code: string;
  segment: string;
  since: string;
  state: string;
  updated_at: string;
  whatsapp: string;
}
