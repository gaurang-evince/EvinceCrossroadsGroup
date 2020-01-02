import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GithubCommitsService {

  private api_server = "https://api.github.com/repos/gaurang-evince/EvinceCrossroadsGroup/commits/f02bcfe6c77ce4dcbdc62f1ad33d79f09907ac69";
  
  constructor(private httpClient: HttpClient) { }
  public pullGithubCommits(){    
    return this.httpClient.get(this.api_server);
  }
}
