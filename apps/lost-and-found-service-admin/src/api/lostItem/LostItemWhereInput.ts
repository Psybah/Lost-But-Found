import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LostItemWhereInput = {
  category?: "Option1";
  dateLost?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  locationLost?: StringNullableFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
