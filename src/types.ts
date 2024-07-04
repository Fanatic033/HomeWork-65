export interface Pages {
    title: string;
    content: string;
}

export interface PagesList {
    [id: string]: Pages;
}