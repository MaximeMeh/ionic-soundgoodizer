import { Injectable,  EventEmitter } from '@angular/core';
import { Music } from '../musics.model';

@Injectable({
  providedIn: 'root'
})
export class MusicsDetailService {
  $musicIn = new EventEmitter();
  music: Music = {
    id: "",
    title: "",
    imageUrl: "",
    description: ""
  }

  constructor() { }

  onAddMusic() {
    console.log("music ajouté");
    this.music.id = 'r4';
    this.music.title = 'Flight Facilities - Need You ft. NÏKA';
    this.music.imageUrl = 'https://i1.sndcdn.com/artworks-000308962431-lzrm2j-t500x500.jpg';
    this.music.description = 'Flight Facilities — Need You feat. NÏKA Stream & download: futr.cl/NeedYou';

    this.$musicIn.emit(this.music);
  }
}
