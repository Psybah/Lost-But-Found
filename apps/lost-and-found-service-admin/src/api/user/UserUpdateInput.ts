import { FoundItemUpdateManyWithoutUsersInput } from "./FoundItemUpdateManyWithoutUsersInput";
import { LostItemUpdateManyWithoutUsersInput } from "./LostItemUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserUpdateInput = {
  email?: string | null;
  firstName?: string | null;
  foundItems?: FoundItemUpdateManyWithoutUsersInput;
  lastName?: string | null;
  lostItems?: LostItemUpdateManyWithoutUsersInput;
  password?: string;
  roles?: InputJsonValue;
  username?: string;
};
