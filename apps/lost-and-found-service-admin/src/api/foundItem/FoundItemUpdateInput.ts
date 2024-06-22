import { InputJsonValue } from "../../types";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FoundItemUpdateInput = {
  category?: "Option1" | null;
  dateFound?: Date | null;
  description?: string | null;
  image?: InputJsonValue;
  locationFound?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
