import { ApiProperty } from '@nestjs/swagger';
export class CursorPageResponseDto {
  @ApiProperty({ example: 5, description: 'Next page cursor' })  
  nextCursor: number;

  @ApiProperty({ example: true, description: 'Last page flag' })
  hasNextPage: boolean;
}
