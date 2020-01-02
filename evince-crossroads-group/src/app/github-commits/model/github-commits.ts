// AuthorModel
export class AuthorModel {
    name: string;
    email: string;
    date: string;
}
// CommitterModel
export class CommitterModel {
    name: string;
    email: string;
    date: string;
}
// CommitModel
export class CommitModel {
    author: AuthorModel;
    committer: CommitterModel;
    message: string;
    sha:string;  
}
