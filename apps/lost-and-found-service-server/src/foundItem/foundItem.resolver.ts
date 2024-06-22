import * as graphql from "@nestjs/graphql";
import { FoundItemResolverBase } from "./base/foundItem.resolver.base";
import { FoundItem } from "./base/FoundItem";
import { FoundItemService } from "./foundItem.service";

@graphql.Resolver(() => FoundItem)
export class FoundItemResolver extends FoundItemResolverBase {
  constructor(protected readonly service: FoundItemService) {
    super(service);
  }
}
