import { IsString, IsNumber } from "class-validator";

export class CreateCommentDto {
  @IsNumber()
  public feed_id: number;

  @IsString()
  public userName: string;

  @IsString()
  public comment: string;
}