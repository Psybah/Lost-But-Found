import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FoundItemServiceBase } from "./base/foundItem.service.base";

@Injectable()
export class FoundItemService extends FoundItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
