import { Component, OnInit } from '@angular/core';
// import { MusicsService } from './musics.service';
// import { Music } from './musics.model';



@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.page.html',
  styleUrls: ['./searchbar.page.scss'],
})
export class SearchbarPage implements OnInit {
  jsonData:any=[];
  // musics: Music[];

  constructor()
  {
    this.initializaJSONData();
  }

  FilterJSONData(ev:any)
  {
    this.initializaJSONData();
    const val = ev.target.value;
    if(val && val.trim() != '')    
    {
      this.jsonData = this.jsonData.filter((item)=>{
        return (item.title.toLowerCase().indexOf(val.toLowerCase())>-1);
      })
    }
  }

  initializaJSONData()
  {
    this.jsonData = [
      {
        "title": "Cabu - Take It All Feat. Blusko",
      },
      {
        "title": "Galimatias - Blowback",
      },
      {
        "title": "PARTYNEXTDOOR & Rihanna - BELIEVE IT",
      },
      {
        "title": "L'Impératrice — VANILLE FRAISE",
      }
    ]
  }

  selectVal(val)
  {
    alert("you have selected : " +val);
  }

  ngOnInit() {
  }

}
