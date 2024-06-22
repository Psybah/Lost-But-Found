import * as graphql from "@nestjs/graphql";
import { LostItemResolverBase } from "./base/lostItem.resolver.base";
import { LostItem } from "./base/LostItem";
import { LostItemService } from "./lostItem.service";

@graphql.Resolver(() => LostItem)
export class LostItemResolver extends LostItemResolverBase {
  constructor(protected readonly service: LostItemService) {
    super(service);
  }
}
