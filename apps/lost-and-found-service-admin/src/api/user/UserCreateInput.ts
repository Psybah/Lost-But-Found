import { FoundItemCreateNestedManyWithoutUsersInput } from "./FoundItemCreateNestedManyWithoutUsersInput";
import { LostItemCreateNestedManyWithoutUsersInput } from "./LostItemCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  email?: string | null;
  firstName?: string | null;
  foundItems?: FoundItemCreateNestedManyWithoutUsersInput;
  lastName?: string | null;
  lostItems?: LostItemCreateNestedManyWithoutUsersInput;
  password: string;
  roles: InputJsonValue;
  username: string;
};
