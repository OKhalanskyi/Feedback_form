export type BlobProps = {
    top?:number;
    bottom?:number;
    left?:number;
    right?:number;
    marginRight?:number;
    zIndex?:number
}

export type InputHeightProps = Partial<{
    height:number
}>

export type FeedbackParams = {
    id:number
    username:string;
    email:string;
    message:string
}

export type IconProps={
    path:string
    img:string
}

export type FeedbackProps={
    feedbacks:FeedbackParams[]
}