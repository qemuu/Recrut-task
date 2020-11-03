import { TestBed } from '@angular/core/testing';

import { GetAnimeCharService } from './get-anime-char.service';

describe('GetAnimeCharService', () => {
  let service: GetAnimeCharService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetAnimeCharService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
