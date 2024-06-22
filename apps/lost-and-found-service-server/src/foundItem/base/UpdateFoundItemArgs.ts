/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FoundItemWhereUniqueInput } from "./FoundItemWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { FoundItemUpdateInput } from "./FoundItemUpdateInput";

@ArgsType()
class UpdateFoundItemArgs {
  @ApiProperty({
    required: true,
    type: () => FoundItemWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => FoundItemWhereUniqueInput)
  @Field(() => FoundItemWhereUniqueInput, { nullable: false })
  where!: FoundItemWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => FoundItemUpdateInput,
  })
  @ValidateNested()
  @Type(() => FoundItemUpdateInput)
  @Field(() => FoundItemUpdateInput, { nullable: false })
  data!: FoundItemUpdateInput;
}

export { UpdateFoundItemArgs as UpdateFoundItemArgs };
