import { Component, OnInit } from '@angular/core';

import { Library } from './library.model';
import { LibraryService } from './library.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  librarys: Library[];

  constructor(private libraryService: LibraryService) { }

  ngOnInit() {
    this.librarys = this.libraryService.getAllLibrary();
  }

}
