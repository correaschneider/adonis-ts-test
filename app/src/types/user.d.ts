import { AddressInterface } from "./address";

export interface UserInterface {
  id: string;
  isActive: boolean;
  firstName: string;
  lastName: string;
  company: string;
  email: string;
  created_at: Date;
  address?: Object | AddressInterface
}
