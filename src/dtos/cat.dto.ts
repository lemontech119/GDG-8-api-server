import { IsString } from "class-validator";

export class CreateCatDto {
  @IsString()
  public name: string;

  @IsString()
  public loc_x: string;

  @IsString()
  public loc_y: string;

  @IsString()
  public image_url: string;

  @IsString()
  public description: string;
}
