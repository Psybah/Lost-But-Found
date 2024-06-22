import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { LostItemService } from "./lostItem.service";
import { LostItemControllerBase } from "./base/lostItem.controller.base";

@swagger.ApiTags("lostItems")
@common.Controller("lostItems")
export class LostItemController extends LostItemControllerBase {
  constructor(protected readonly service: LostItemService) {
    super(service);
  }
}
