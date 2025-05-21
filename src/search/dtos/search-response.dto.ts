import { ApiProperty } from '@nestjs/swagger';

export class TrackDto {
  @ApiProperty()
  trackId: string;

  @ApiProperty()
  trackName: string;

  @ApiProperty()
  artistName: string;

  @ApiProperty()
  artistId: string;

  @ApiProperty()
  albumImage: string;

   @ApiProperty()
  popularity: number;
}

export class ArtistDto {
  @ApiProperty()
  artistId: string;

  @ApiProperty()
  artistName: string;

  @ApiProperty()
  artistImage: string;

  @ApiProperty()
  popularity: number;
}

export class SearchResponseDto {
  @ApiProperty({ type: [TrackDto] })
  tracks: TrackDto[];

  @ApiProperty({ type: [ArtistDto] })
  artists: ArtistDto[];
}
