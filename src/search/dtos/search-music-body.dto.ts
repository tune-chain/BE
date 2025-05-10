import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class SearchMusicBodyDto {
  @ApiProperty({ description: 'artist', example: 'weekend' })
  @IsOptional()
  @IsString()
  artist:string;

  @ApiProperty({ description: 'title', example: 'starboy' })
  @IsOptional()
  @IsString()
  title: string;
}
