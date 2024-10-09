export enum Category {
  Child,
  Educational,
  Fiction,
  News,
  NonFiction,
  Polictical,
  Religious,
  Technical,
}

export type Book = {
  author: string;
  description: string;
  publisher: string;
} & Readings &
  Borrowable;

export type Newspaper = {} & Readings & Borrowable;

export type Magazine = {} & Readings & Borrowable;

export type Readings = {
  id: string;
  name: string;
  catergory: Category;
  publishDate: Date;
  language?: string;
};

export type Borrowable = {
  readerId: string | undefined;
  returnDate: Date | undefined;
  readingType: string;
};
