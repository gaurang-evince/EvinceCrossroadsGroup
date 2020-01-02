import { Component, OnInit } from '@angular/core';
import { GithubCommitsService } from '../github-commits.service';
import { CommitModel, CommitterModel, AuthorModel } from './model/github-commits';

@Component({
  selector: 'app-github-commits',
  templateUrl: './github-commits.component.html',
  styleUrls: ['./github-commits.component.scss']
})

/// Component: GithubCommitsComponent
export class GithubCommitsComponent implements OnInit {

  //#region Declaration
  commit: CommitModel = new CommitModel();
  author: AuthorModel = new AuthorModel();
  committer: CommitterModel = new CommitterModel();
  commitsList: any[] = [];
  //#endregion

  //#region Constructor
  constructor(private githubCommitsService: GithubCommitsService) { }
  //#endregion

  //#region  methods
  ngOnInit() {
    // call service to get list of commits
    this.githubCommitsService.pullGithubCommits().subscribe((response: any) => {
      
      this.commitsList = response;

      // extracting the list of commits from the list
      this.commitsList.forEach(e => {

        const commitData = <CommitModel>e.commit;
        const authorData = <AuthorModel>e.commit.author;
        const CommitterData = <CommitterModel>e.commit.commitor;
        const sha = e.sha;

        this.author = authorData;
        this.committer = CommitterData;

        // fill commit model
        this.commit = {
          author: this.author,
          committer: this.committer,
          sha: sha,
          message: commitData.message
        };
      });

    });
  }
  //#endregion  
}
