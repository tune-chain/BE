import { ApiProperty } from '@nestjs/swagger';

export class PlaylistTrackResponseDto{
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  artist: string;

  @ApiProperty()
  image: string;
}
