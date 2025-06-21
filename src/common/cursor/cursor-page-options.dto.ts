import { Type } from 'class-transformer';
import { IsOptional, IsInt } from 'class-validator';

export class CursorPageOptionsDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  cursor?: number; 

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  limit?: number; 
}
