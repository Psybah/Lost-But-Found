import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LostItemUpdateInput = {
  category?: "Option1" | null;
  dateLost?: Date | null;
  description?: string | null;
  locationLost?: string | null;
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
