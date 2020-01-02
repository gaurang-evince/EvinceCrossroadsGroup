import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { utils } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class GithubCommitsService {

  private api_server = "https://api.github.com/repos/gaurang-evince/EvinceCrossroadsGroup/commits";

  constructor(private httpClient: HttpClient) { }
  public pullGithubCommits() {
    return this.httpClient.get(this.api_server);
  }

}
