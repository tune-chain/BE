import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class CreatePlaylistsBodyDto {
    @ApiProperty()
    @IsString()
    walletAddress : string;

    @ApiProperty()
    @IsString()
    name : string;

    @ApiProperty()
    @IsString()
    image? : string;
}
