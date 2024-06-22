import { LostItem as TLostItem } from "../api/lostItem/LostItem";

export const LOSTITEM_TITLE_FIELD = "name";

export const LostItemTitle = (record: TLostItem): string => {
  return record.name?.toString() || String(record.id);
};
