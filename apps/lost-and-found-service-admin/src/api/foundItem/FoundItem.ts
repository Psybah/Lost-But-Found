import { JsonValue } from "type-fest";
import { User } from "../user/User";

export type FoundItem = {
  category?: "Option1" | null;
  createdAt: Date;
  dateFound: Date | null;
  description: string | null;
  id: string;
  image: JsonValue;
  locationFound: string | null;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
