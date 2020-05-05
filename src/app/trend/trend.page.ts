import { Component, OnInit } from '@angular/core';
import { Trend } from './trend.model';

@Component({
  selector: 'app-trend',
  templateUrl: './trend.page.html',
  styleUrls: ['./trend.page.scss'],
})
export class TrendPage implements OnInit {

  trends: Trend[] = [
    {
      title: 'Top 50 Global',
      image: '../../assets/top50global.PNG'
    },
    {
      title: 'Top 50 Australie',
      image: '../../assets/top50aus.PNG'
    },
    {
      title: 'Top 50 South Africa',
      image: '../../assets/top50sa.PNG'
    },
    {
      title: 'Top 50 USA',
      image: '../../assets/top50usa.PNG'
    },
    {
      title: 'Top 50 France',
      image: '../../assets/top50france.PNG'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  /*
    spaceBetween: 0 <- Spacing is made trough ion-cards margin
    slidesPerView: 1.15 <- Amount of visible Slides, or in our example: Cards
  */

  slideOpts = {
    spaceBetween: 2,
    // centeredSlides: true,
    slidesPerView: 1.60,

  
  }

  




  
}
