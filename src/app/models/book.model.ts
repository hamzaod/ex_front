export interface Book {
    isbn: string;
    title: string;
    price: number;
    updated: Date;
    synopsis: Array<string>[];
}