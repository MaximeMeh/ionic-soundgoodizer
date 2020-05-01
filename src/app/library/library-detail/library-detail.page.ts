import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibraryService } from '../library.service';
import { Library } from '../library.model';
import { AlertController } from '@ionic/angular';
import { Media, MediaObject } from '@ionic-native/media/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-library-detail',
  templateUrl: './library-detail.page.html',
  styleUrls: ['./library-detail.page.scss'],
})
export class LibraryDetailPage implements OnInit {
  loadedLibrary: Library;
  file: MediaObject;
  playIcon= 'pause';
  audioDuration: number;
  currentPosition: number;
  restTime: string;

  constructor(private activatedRoute: ActivatedRoute,
              private libraryService: LibraryService,
              private router: Router,
              private alertCtrl: AlertController,
              public media: Media,
              public platform: Platform,) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('libraryId')) {
        return;
      }
      const libraryId = paramMap.get('libraryId');
      this.loadedLibrary = this.libraryService.getLibrary(libraryId);
      this.platform.ready().then(() => {
        this.readAudio();
      });
    });
  }

  onDeleteLibrary() {
    this.alertCtrl.create({
      header: 'Voulez vous vraiment supprimer?',
      message: 'Etes vous sur de vouloir supprimer cette musique de votre playlist?',
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel'
        },
        {
          text: 'Supprimer',
          handler: () => {
            this.libraryService.deleteLibrary(this.loadedLibrary.id);
            this.router.navigate(['/library']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    }); 
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
