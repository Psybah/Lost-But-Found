import { FoundItem } from "../foundItem/FoundItem";
import { LostItem } from "../lostItem/LostItem";
import { JsonValue } from "type-fest";

export type User = {
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  foundItems?: Array<FoundItem>;
  id: string;
  lastName: string | null;
  lostItems?: Array<LostItem>;
  roles: JsonValue;
  updatedAt: Date;
  username: string;
};
