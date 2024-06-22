import { FoundItemWhereInput } from "./FoundItemWhereInput";
import { FoundItemOrderByInput } from "./FoundItemOrderByInput";

export type FoundItemFindManyArgs = {
  where?: FoundItemWhereInput;
  orderBy?: Array<FoundItemOrderByInput>;
  skip?: number;
  take?: number;
};
