import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LibraryDetailPage } from './library-detail.page';

describe('LibraryDetailPage', () => {
  let component: LibraryDetailPage;
  let fixture: ComponentFixture<LibraryDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibraryDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LibraryDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
