import { IsString, IsNumber } from "class-validator";

export class CreateFeedDto {
  @IsNumber()
  public cat_id: number;

  @IsString()
  public title: string;

  @IsString()
  public content: string;
}
