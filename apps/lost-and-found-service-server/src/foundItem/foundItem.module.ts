import { Module } from "@nestjs/common";
import { FoundItemModuleBase } from "./base/foundItem.module.base";
import { FoundItemService } from "./foundItem.service";
import { FoundItemController } from "./foundItem.controller";
import { FoundItemResolver } from "./foundItem.resolver";

@Module({
  imports: [FoundItemModuleBase],
  controllers: [FoundItemController],
  providers: [FoundItemService, FoundItemResolver],
  exports: [FoundItemService],
})
export class FoundItemModule {}
