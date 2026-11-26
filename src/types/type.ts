import type { ComponentType } from "react";
import type { LucideIcon } from "lucide-react";


export interface UserApplication {
  _id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  role: string;
  account_type: string;
  applicationDate: string;
  business_address: string;
  equipment_category: string;
  equipment_description: string;
  nid_tin: string;
  price_range: number;
  tel_no: string;
}

export interface ProviderProfileDataTypeForAdmin {
  _id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
  role: string;
  account_type: string;
  applicationDate: string;
  business_address: string;
  equipment_category: string;
  equipment_description: string;
  nid_tin: string;
  price_range: string;
  tel_no: string;
  user_image: string;
}

export interface providerProfileDataForPublic {
  name: string;
  email: string;
  account_type: string;
  business_address: string;
  tel_no: string;
  user_image: string;
}

export interface UserData {
  _id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  role: string;
  account_type: string;
  applicationDate: string;
  business_address: string;
  equipment_category: string;
  equipment_description: string;
  nid_tin: string;
  price_range: string;
  tel_no: string;
  user_image: string;
}

export type UserRole = "Customer" | "Owner" | "Admin";

export type RoleFilterOption = "All Roles" | UserRole;

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  joinedLabel: string;
}

export type EquipmentStatus = "pending" | "approve" | "reject";

export type EquipmentIllustrationKey =
  | "generator"
  | "camera"
  | "drill"
  | "excavator"
  | "tractor"
  | "projector";

export interface EquipmentApplicationType {
  _id: string;
  creationDate: string;
  creatorId: string;
  equipmentBrand: string;
  equipmentCategory: string;
  equipmentCondition: string;
  equipmentDescription: string;
  equipmentImage: string;
  equipmentLocation: string;
  equipmentModel: string;
  equipmentName: string;
  equipmentPrice: string;
  equipmentQuantity: string;
  status: EquipmentStatus;
  equipmentTerms: string;
  rentalType: string;
}

export interface RentalEquipmentPublicInfo {
  _id: string;
  equipmentName: string;
  equipmentCategory: string;
  equipmentLocation: string;
  equipmentPrice: number;
  rentalType: string;
  equipmentQuantity: number;
  equipmentImage: string;
}

export interface EquipmentItem {
  id: string;
  name: string;
  category: string;
  currency: string;
  price: number;
  rentalType: "Daily" | "Weekly" | "Monthly";
  location: string;
  isAvailable: boolean;
  imageUrl?: string;
  illustration: EquipmentIllustrationKey;
}

export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterConfig {
  id: string;
  label: string;
  defaultValue: string;
  options: FilterOption[];
}

export interface EquipmentSpec {
  label: string;
  value: string;
}

export interface EquipmentOwner {
  name: string;
  role: string;
  location: string;
  avatarUrl?: string;
}

export interface EquipmentInfoData {
  id: string;
  category: string;
  name: string;
  location: string;
  description: string;
  currency: string;
  pricePerDay: number;
  rentalType: string;
  availableQuantity: string;
  condition: string;
  isAvailable: boolean;
  about: string;
  specs: EquipmentSpec[];
  owner: EquipmentOwner;
  rentalTerms: {
    numbered: string[];
    bullets: string[];
  };
}

export interface AdminEquipment {
  _id: string;
  name: string;
  category: string;
  ownerName: string;
  ownerEmail?: string;
  /** Rental price per day, in USD. */
  rentalPrice: number;
  availableQuantity: number;
  status: EquipmentStatus;
}

export interface EquipmentStats {
  total: number;
  pending: number;
  approved: number;
}

export interface ProviderEquipment {
  id: string;
  name: string;
  category: string;
  rentalPrice: number;
  availableQuantity: number;
  status: EquipmentStatus;
}

export type StatusFilter = EquipmentStatus | "All";

export interface FavoriteEquipment {
  _id: string;
  equipmentId: string;
  equipmentName: string;
  equipmentCategory: string;
  equipmentPrice: number;
  rentalType: string;
  equipmentLocation: string;
  isAvailable: boolean;
}

export type PaymentStatus = "paid" | "pending";

export type RentalStatus = PaymentStatus;

export type RentalPaymentStatus = PaymentStatus;

export type BookingStatus = "pending" | "approved" | "completed";

export interface EquipmentRentalPaymentRecord {
  _id: string;
  additionalNotes: string;
  contactNumber: string;
  deliveryAddress: string;
  equipmentId: string;
  equipmentPrice: string;
  payment: string;
  paymentDate: string;
  paymentRequestEmail: string;
  paymentRequestId: string;
  paymentRequestName: string;
  productName: string;
  equepmentOwnerId: string;
  rentalDays: number;
  rentalEndDate: string;
  rentalStartDate: string;
  requiredQuantity: string;
  total: number;
}

export interface RentalRequest {
  id: string;
  equipment: string;
  renter: {
    name: string;
    email: string;
  };
  startDate: string;
  endDate: string;
  totalAmount: number;
  status: RentalStatus;
}

export interface RentalBooking {
  id: string;
  equipmentName: string;
  startDate: string;
  endDate: string;
  bookingDate: string;
  totalAmount: number;
  paymentStatus: PaymentStatus;
  bookingStatus: BookingStatus;
}

export interface RentalStat {
  label: string;
  value: number;
  icon: ComponentType<{ className?: string }>;
}

export interface RentalPaymentDetail {
  rentalId: string;

  equipmentName: string;
  equipmentId: string;
  pricePerUnit: number;
  requiredQuantity: number;

  renterName: string;
  renterEmail: string;
  renterContactNumber: string;
 
  rentalStartDate: string;
  rentalEndDate: string;
  rentalDurationDays: number;

  deliveryAddress: string;
  additionalNotes: string;
  totalAmount: number;
  paymentStatus: RentalPaymentStatus;
  paymentDate: string;
  paymentRequestId: string;
}


export interface IReview {
  _id: string;
  name: string;
  review: string;
  rating: number;
  reviewerName: string;
  reviewerImage: string;
  reviewDate: string;
}

export interface Review {
  id: string;
  quote: string;
  name: string;
  role: string;
  rating: number;
  avatarUrl: string;
}


export interface NavLinkItem {
  href: string;
  label: string;
}

export interface Category {
  name: string;
  imageUrl: string;
  href: string;
}

export type DashboardRole = "admin" | "renter" | "provider";

export type SidebarLink = {
  label: string;
  href: string;
  icon: LucideIcon;
};

export type SidebarSection = {
  label: string;
  links: SidebarLink[];
};

export interface TopSixCategory {
  _id: string;
  totalEquipment: number;
  equipmentImage: string;
}
export interface translationAnalysisData {
  success: number;
  failed: number;
  total: number;
}
export interface ApplicationStat {
  label: string;
  value: number;
}

export interface BookingFormData {
  rentalStartDate: string;
  rentalEndDate: string;
  requiredQuantity: string;
  contactNumber: string;
  deliveryAddress: string;
  additionalNotes?: string;
}

export interface favoriteExistenceType {
  found: boolean;
}
