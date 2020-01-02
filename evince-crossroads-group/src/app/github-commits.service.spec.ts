import { TestBed } from '@angular/core/testing';

import { GithubCommitsService } from './github-commits.service';

describe('GithubCommitsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubCommitsService = TestBed.get(GithubCommitsService);
    expect(service).toBeTruthy();
  });
});
