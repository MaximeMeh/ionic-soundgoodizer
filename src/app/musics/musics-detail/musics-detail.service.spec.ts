import { TestBed } from '@angular/core/testing';

import { MusicsDetailService } from './musics-detail.service';

describe('MusicsDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicsDetailService = TestBed.get(MusicsDetailService);
    expect(service).toBeTruthy();
  });
});
