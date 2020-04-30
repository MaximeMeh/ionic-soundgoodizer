import { Component, OnInit } from '@angular/core';

import { MusicsService } from '../musics/musics.service';
import { Music } from '../musics/musics.model';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  musics: Music[];

  constructor(private musicsService: MusicsService) { }

  ngOnInit() {
    this.musics = this.musicsService.getAllMusics();
  }

}
