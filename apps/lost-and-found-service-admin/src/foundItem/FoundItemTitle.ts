import { FoundItem as TFoundItem } from "../api/foundItem/FoundItem";

export const FOUNDITEM_TITLE_FIELD = "name";

export const FoundItemTitle = (record: TFoundItem): string => {
  return record.name?.toString() || String(record.id);
};
