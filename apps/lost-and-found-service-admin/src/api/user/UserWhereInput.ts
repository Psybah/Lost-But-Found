import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FoundItemListRelationFilter } from "../foundItem/FoundItemListRelationFilter";
import { StringFilter } from "../../util/StringFilter";
import { LostItemListRelationFilter } from "../lostItem/LostItemListRelationFilter";

export type UserWhereInput = {
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  foundItems?: FoundItemListRelationFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  lostItems?: LostItemListRelationFilter;
  username?: StringFilter;
};
