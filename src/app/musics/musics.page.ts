import { Component, OnInit } from '@angular/core';
import { Music } from './musics.model';
import { MusicsService } from './musics.service';


@Component({
  selector: 'app-musics',
  templateUrl: './musics.page.html',
  styleUrls: ['./musics.page.scss'],
})
export class MusicsPage implements OnInit {
  musics: Music[];

  sliderConfig = {

  }


  constructor(private musicsService: MusicsService) { }

  ngOnInit() {
    this.musics = this.musicsService.getAllMusics();
  }

}
