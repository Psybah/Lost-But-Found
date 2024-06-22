import { LostItemWhereInput } from "./LostItemWhereInput";
import { LostItemOrderByInput } from "./LostItemOrderByInput";

export type LostItemFindManyArgs = {
  where?: LostItemWhereInput;
  orderBy?: Array<LostItemOrderByInput>;
  skip?: number;
  take?: number;
};
