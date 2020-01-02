import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

// GithubCommitsService
export class GithubCommitsService {

  //#region  Declaration
  private api_server = "https://api.github.com/repos/gaurang-evince/EvinceCrossroadsGroup/commits";
  //#endregion

  //#region  Constructor
  constructor(private httpClient: HttpClient) { }
  //#endregion

  //#region Services
  public pullGithubCommits() {
    return this.httpClient.get(this.api_server);
  }
  //#endregion
}
