import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type FoundItemWhereInput = {
  category?: "Option1";
  dateFound?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  image?: JsonFilter;
  locationFound?: StringNullableFilter;
  name?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
