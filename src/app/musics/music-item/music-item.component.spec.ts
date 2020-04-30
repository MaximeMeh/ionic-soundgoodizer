import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MusicItemComponent } from './music-item.component';

describe('MusicItemComponent', () => {
  let component: MusicItemComponent;
  let fixture: ComponentFixture<MusicItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MusicItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
