import { Module } from "@nestjs/common";
import { LostItemModuleBase } from "./base/lostItem.module.base";
import { LostItemService } from "./lostItem.service";
import { LostItemController } from "./lostItem.controller";
import { LostItemResolver } from "./lostItem.resolver";

@Module({
  imports: [LostItemModuleBase],
  controllers: [LostItemController],
  providers: [LostItemService, LostItemResolver],
  exports: [LostItemService],
})
export class LostItemModule {}
