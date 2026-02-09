export interface AddBlogPostRequest {
    title: string;
    shortDescription: string;
    content: string;
    featuredImageUrl: string;
    urlHandle: string;
    author: string;
    publisedDate: Date;
    isVisible: boolean;
}

export interface BlogPost {
    id: string;
    title: string;
    shortDescription: string;
    content: string;
    featuredImageUrl: string;
    urlHandle: string;
    author: string;
    publisedDate: Date;
    isVisible: boolean;
}