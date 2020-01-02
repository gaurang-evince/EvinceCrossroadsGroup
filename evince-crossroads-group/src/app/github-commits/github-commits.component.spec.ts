import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubCommitsComponent } from './github-commits.component';

describe('GithubCommitsComponent', () => {
  let component: GithubCommitsComponent;
  let fixture: ComponentFixture<GithubCommitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GithubCommitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubCommitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
