/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FoundItem } from "./FoundItem";
import { FoundItemCountArgs } from "./FoundItemCountArgs";
import { FoundItemFindManyArgs } from "./FoundItemFindManyArgs";
import { FoundItemFindUniqueArgs } from "./FoundItemFindUniqueArgs";
import { CreateFoundItemArgs } from "./CreateFoundItemArgs";
import { UpdateFoundItemArgs } from "./UpdateFoundItemArgs";
import { DeleteFoundItemArgs } from "./DeleteFoundItemArgs";
import { User } from "../../user/base/User";
import { FoundItemCreateInputDto } from "../FoundItemCreateInputDto";
import { FoundItemService } from "../foundItem.service";
@graphql.Resolver(() => FoundItem)
export class FoundItemResolverBase {
  constructor(protected readonly service: FoundItemService) {}

  async _foundItemsMeta(
    @graphql.Args() args: FoundItemCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FoundItem])
  async foundItems(
    @graphql.Args() args: FoundItemFindManyArgs
  ): Promise<FoundItem[]> {
    return this.service.foundItems(args);
  }

  @graphql.Query(() => FoundItem, { nullable: true })
  async foundItem(
    @graphql.Args() args: FoundItemFindUniqueArgs
  ): Promise<FoundItem | null> {
    const result = await this.service.foundItem(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FoundItem)
  async createFoundItem(
    @graphql.Args() args: CreateFoundItemArgs
  ): Promise<FoundItem> {
    return await this.service.createFoundItem({
      ...args,
      data: {
        ...args.data,

        user: args.data.user
          ? {
              connect: args.data.user,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => FoundItem)
  async updateFoundItem(
    @graphql.Args() args: UpdateFoundItemArgs
  ): Promise<FoundItem | null> {
    try {
      return await this.service.updateFoundItem({
        ...args,
        data: {
          ...args.data,

          user: args.data.user
            ? {
                connect: args.data.user,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FoundItem)
  async deleteFoundItem(
    @graphql.Args() args: DeleteFoundItemArgs
  ): Promise<FoundItem | null> {
    try {
      return await this.service.deleteFoundItem(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => User, {
    nullable: true,
    name: "user",
  })
  async getUser(@graphql.Parent() parent: FoundItem): Promise<User | null> {
    const result = await this.service.getUser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => String)
  async ReportFoundItem(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.ReportFoundItem(args);
  }

  @graphql.Mutation(() => FoundItemCreateInputDto)
  async ReportFoundItemAction(
    @graphql.Args()
    args: FoundItemCreateInputDto
  ): Promise<FoundItemCreateInputDto> {
    return this.service.ReportFoundItemAction(args);
  }
}