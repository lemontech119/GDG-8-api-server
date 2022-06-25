import { IsString, IsNumber } from "class-validator";

export class FeedDto {

    @IsNumber()
    public cat_id: number;

    @IsString()
    public title: string;

    @IsString()
    public content: string;

    @IsString()
    public image_url: string;
}
