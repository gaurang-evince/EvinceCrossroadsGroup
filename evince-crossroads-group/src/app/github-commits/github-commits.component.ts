import { Component, OnInit } from '@angular/core';
import { GithubCommitsService } from '../github-commits.service';
import { CommitModel, FileModel, CommitterModel, AuthorModel } from './model/github-commits';

@Component({
  selector: 'app-github-commits',
  templateUrl: './github-commits.component.html',
  styleUrls: ['./github-commits.component.scss']
})
export class GithubCommitsComponent implements OnInit {

  responseData: any;
  commit: CommitModel = new CommitModel();
  author: AuthorModel = new AuthorModel();
  committer: CommitterModel = new CommitterModel();
  fileList: FileModel[] = [];
  constructor(private githubCommitsService: GithubCommitsService) { }

  ngOnInit() {
    this.githubCommitsService.pullGithubCommits().subscribe((response: any) => {

      const commitData = <CommitModel>response.commit;
      const authorData = <AuthorModel>response.commit.author;
      const CommitterData = <CommitterModel>response.commit.commitor;

      this.author = authorData;
      this.committer = CommitterData;

      this.commit = {
        author: this.author,
        commitor: this.committer,
        message: commitData.message
      };

      const fList = <FileModel[]>response.files;
      this.fileList = fList;

    });
  }

}
