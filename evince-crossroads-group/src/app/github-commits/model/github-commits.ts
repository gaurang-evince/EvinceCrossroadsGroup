export class AuthorModel {
    name: string;
    email: string;
    date: string;
}
export class CommitterModel {
    name: string;
    email: string;
    date: string;
}
export class CommitModel {
    author: AuthorModel;
    committer: CommitterModel;
    message: string;
    sha:string;  
}
