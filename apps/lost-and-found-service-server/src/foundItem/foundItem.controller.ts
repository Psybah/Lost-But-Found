import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FoundItemService } from "./foundItem.service";
import { FoundItemControllerBase } from "./base/foundItem.controller.base";

@swagger.ApiTags("foundItems")
@common.Controller("foundItems")
export class FoundItemController extends FoundItemControllerBase {
  constructor(protected readonly service: FoundItemService) {
    super(service);
  }
}
