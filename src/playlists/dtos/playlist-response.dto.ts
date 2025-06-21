import { ApiProperty } from '@nestjs/swagger';

export class PlaylistResponseDto {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty({ required: false })
  image?: string;

  @ApiProperty()
  userId: number;
}
