export type TUserType={
    id:string | null;
    username:string | null;
    email:string | null;
    token:string | null;
}

export type TGlobalState={
    user:TUserType;
}
