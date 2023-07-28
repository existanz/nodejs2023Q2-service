import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  ParseUUIDPipe,
} from '@nestjs/common';
import { FavsService } from './favs.service';

@Controller('favs')
export class FavsController {
  constructor(private readonly favsService: FavsService) {}

  @Get()
  findAll() {
    return this.favsService.findAll();
  }

  @Post('artist/:id')
  addArtistToFavs(
    @Param('id', new ParseUUIDPipe({ version: '4' })) id: string,
  ) {
    return this.favsService.addArtistToFavs(id);
  }

  @Delete('artist/:id')
  removeArtist(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.favsService.removeArtistFromFavs(id);
  }

  @Post('album/:id')
  addAlbumToFavs(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.favsService.addAlbumToFavs(id);
  }

  @Delete('album/:id')
  removeAlbum(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.favsService.removeAlbumFromFavs(id);
  }

  @Post('track/:id')
  addTrackToFavs(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.favsService.addTrackToFavs(id);
  }

  @Delete('track/:id')
  removeTrack(@Param('id', new ParseUUIDPipe({ version: '4' })) id: string) {
    return this.favsService.removeTrackFromFavs(id);
  }
}
