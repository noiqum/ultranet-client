export type TUserType={
    id:string | null;
    username:string | null;
    email:string | null;
    token:string | null;
}

export type TGlobalState={
    user:TUserType;
}

export enum EOption {
    status="status",
    photos="photos",
    videos="videos"
}

export type TPostData={
    option:string;
    content:string;
}