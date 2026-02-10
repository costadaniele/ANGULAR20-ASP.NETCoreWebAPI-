import { Category } from "../../category/models/category.model";

export interface AddBlogPostRequest {
    title: string;
    shortDescription: string;
    content: string;
    featuredImageUrl: string;
    urlHandle: string;
    author: string;
    publisedDate: Date;
    isVisible: boolean;
    categories: string[];
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
    categories: Category[];
}