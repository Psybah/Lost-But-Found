import { User } from "../user/User";

export type LostItem = {
  category?: "Option1" | null;
  createdAt: Date;
  dateLost: Date | null;
  description: string | null;
  id: string;
  locationLost: string | null;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
