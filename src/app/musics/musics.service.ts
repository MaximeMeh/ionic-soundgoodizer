import { Injectable } from '@angular/core';
import { Music } from './musics.model';

@Injectable({
  providedIn: 'root'
})
export class MusicsService {
  private musics: Music[] = [
    {
      id: 'r1',
      title: 'Cabu - Take It All Feat. Blusko',
      imageUrl: 'https://i1.sndcdn.com/artworks-bI0PmgpBG00zO8vB-yKzjdA-t500x500.jpg',
      description: 'I remember seeing Blushko when he did vocals for Goldlink when he did his like a version for triple j, i was like Holy shit who tf is this white dude with this soulful ass voice.'
    },
    {
      id: 'r2',
      title: 'Galimatias - Blowback',
      imageUrl: 'https://i1.sndcdn.com/artworks-000236660879-crds05-t500x500.jpg',
      description: 'soundcloud.com/galimatias'
    },
    {
      id: 'r3',
      title: 'L Impératrice — VANILLE FRAISE',
      imageUrl: 'https://i1.sndcdn.com/artworks-000104850680-lfl4vy-t500x500.jpg',
      description: 'STREAM THAT SWEET ICE-CREAM → qlima.cool/VanilleFraise VINYL RECORD → bit.ly/ODYSSEE_vinyl VIDEO ♗ CLIP → youtu.be/iZAqaykiS70'
    }
  ];

  constructor() { }

  getAllMusics() {
    return [...this.musics];
  }

  getMusic(musicId: string) {
    return {
      ...this.musics.find(music => {
      return music.id === musicId;
      })
    };
  }

  deleteMusic(musicId: string) {
    this.musics = this.musics.filter(music => {
      return music.id !== musicId;
    });
  }

}
