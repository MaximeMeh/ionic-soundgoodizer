import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicsService } from '../musics.service';
import { Music } from '../musics.model';
import { AlertController } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-musics-detail',
  templateUrl: './musics-detail.page.html',
  styleUrls: ['./musics-detail.page.scss'],
})
export class MusicsDetailPage implements OnInit {
  loadedMusic: Music;
  file: MediaObject;
  playIcon= 'pause';
  audioDuration: number;
  currentPosition: number;
  restTime: string;

  constructor(private activatedRoute: ActivatedRoute,
              private musicsService: MusicsService,
              private router: Router,
              private alertCtrl: AlertController,
              public media: Media,
              public platform: Platform,) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('musicId')) {
        this.router.navigate(['/musics']);
        return;
      }
      const musicId = paramMap.get('musicId');
      this.loadedMusic = this.musicsService.getMusic(musicId);
      this.platform.ready().then(() => {
        this.readAudio();
      });
    });
  }

  onAddMusic() {
     
    this.musicsService.addMusic(this.loadedMusic.id);
    this.router.navigate(['/musics']);
           
  }

  readAudio() {
    this.file = this.media.create("../../assets/CabuTakeItAll.mp3");
    this.file.onStatusUpdate.subscribe(status => console.log(status)); // fires when file status changes
    this.file.onSuccess.subscribe(() => console.log('Action is successful'));
    this.file.onError.subscribe(error => console.log('Error!', error));
    this.file.play();

    setInterval(() => {
      this.file.getCurrentPosition().then((position) => {
        this.audioDuration = this.file.getDuration();
        this.currentPosition = Math.floor(position);
        this.convertSec(this.audioDuration - this.currentPosition);
      });
    }, 1000);
    
  }

  convertSec(secondes: number) {
    const min = Math.floor((secondes/60/60)*60);
    const sec = Math.floor(((secondes/60/60)*60 - min)*60);
    this.restTime = min + 'm ' + sec + 's';
  }

  changePosition () {
    console.log('position: ' + this.currentPosition);
    this.file.seekTo(this.currentPosition*1000);
    this.convertSec(this.audioDuration - this.currentPosition);
  }

  playPause() {
    if(this.playIcon == 'pause') {
      this.playIcon = 'play';
      this.file.pause();
    }else {
      this.playIcon = 'pause';
      this.file.play();
    }
  }

  seekTo(duration: number) {
    console.log('décalage de ' + duration/1000 + 'secondes');
    this.file.seekTo(this.currentPosition*1000 + duration);
    this.currentPosition = this.currentPosition + Math.floor(duration/1000);
    this.convertSec(this.audioDuration - this.currentPosition);
  }

}
