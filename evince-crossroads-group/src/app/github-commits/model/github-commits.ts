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
    commitor: CommitterModel;
    message: string;
}

export class FileModel {
    filename: string;
    status:string;

}