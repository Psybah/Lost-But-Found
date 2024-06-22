import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { LostItemServiceBase } from "./base/lostItem.service.base";

@Injectable()
export class LostItemService extends LostItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
