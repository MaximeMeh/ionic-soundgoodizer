import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicsDetailPage } from './musics-detail.page';

describe('MusicsDetailPage', () => {
  let component: MusicsDetailPage;
  let fixture: ComponentFixture<MusicsDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicsDetailPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicsDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
