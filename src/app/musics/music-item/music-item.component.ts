import { Component, OnInit, Input } from '@angular/core';
import { Music } from '../musics.model';

@Component({
  selector: 'app-music-item',
  templateUrl: './music-item.component.html',
  styleUrls: ['./music-item.component.scss'],
})
export class MusicItemComponent implements OnInit {
  @Input() musicItem: Music;

  constructor() { }

  ngOnInit() {}

}
