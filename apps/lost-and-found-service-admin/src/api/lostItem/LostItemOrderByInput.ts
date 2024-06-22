import { SortOrder } from "../../util/SortOrder";

export type LostItemOrderByInput = {
  category?: SortOrder;
  createdAt?: SortOrder;
  dateLost?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  locationLost?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
