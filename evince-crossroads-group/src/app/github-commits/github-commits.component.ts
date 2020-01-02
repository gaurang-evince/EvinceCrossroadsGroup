import { Component, OnInit } from '@angular/core';
import { GithubCommitsService } from '../github-commits.service';
import { CommitModel, CommitterModel, AuthorModel } from './model/github-commits';

@Component({
  selector: 'app-github-commits',
  templateUrl: './github-commits.component.html',
  styleUrls: ['./github-commits.component.scss']
})
export class GithubCommitsComponent implements OnInit {
  commit: CommitModel = new CommitModel();
  author: AuthorModel = new AuthorModel();
  committer: CommitterModel = new CommitterModel();

  commitsList: any[] = [];
  constructor(private githubCommitsService: GithubCommitsService) { }

  ngOnInit() {
    this.githubCommitsService.pullGithubCommits().subscribe((response: any) => {

      this.commitsList = response;

      this.commitsList.forEach(e => {

        const commitData = <CommitModel>e.commit;
        const authorData = <AuthorModel>e.commit.author;
        const CommitterData = <CommitterModel>e.commit.commitor;
        const sha = e.sha;

        this.author = authorData;
        this.committer = CommitterData;

        this.commit = {
          author: this.author,
          committer: this.committer,
          sha: sha,
          message: commitData.message
        };
      });

    });
  }
}
