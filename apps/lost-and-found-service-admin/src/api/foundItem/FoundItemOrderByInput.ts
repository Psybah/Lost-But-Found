import { SortOrder } from "../../util/SortOrder";

export type FoundItemOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  dateFound?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  image?: SortOrder;
  locationFound?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
