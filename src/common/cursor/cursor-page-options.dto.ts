import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsOptional } from 'class-validator';


export class CursorPageOptionsDto {
  @ApiProperty({ description: 'Cursor ID', example: 0 })
  @Type(() => Number)
  @IsOptional()
  cursorId?: number = '' as any;

  @ApiProperty({ description: 'PageSize', example: 5 })
  @Type(() => Number)
  @IsOptional()
  pageSize?: number = 5;
}
