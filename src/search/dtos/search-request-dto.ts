import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { CursorPageOptionsDto } from 'src/common/cursor/cursor-page-options.dto';

export class SearchRequestDto extends CursorPageOptionsDto{
  @ApiProperty({ description: 'keyword', example: 'weekend' })
  @IsString()
  keyword: string;

}


