import { Book, Category, Magazine, Newspaper } from '../models';

export function mockBooks(): Book[] {
  return [
    {
      id: 'book-1',
      name: "Harry Potter and the Philosopher's Stone",
      description: 'Book 1',
      publishDate: new Date(1997, 0, 1),
      author: 'J. K. Rowling',
      catergory: Category.Fiction,
      publisher: 'Bloomsbury',
      readingType: 'book',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'book-2',
      name: 'Harry Potter and the Chamber of Secrets',
      description: 'Book 2',
      publishDate: new Date(1998, 0, 2),
      author: 'J. K. Rowling',
      catergory: Category.Fiction,
      publisher: 'Bloomsbury',
      readingType: 'book',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'book-3',
      name: 'Harry Potter and the Prisoner of Azkaban',
      description: 'Book 3',
      publishDate: new Date(1999, 0, 3),
      author: 'J. K. Rowling',
      catergory: Category.Fiction,
      publisher: 'Bloomsbury',
      readingType: 'book',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'book-4',
      name: 'Harry Potter and the Goblet of Fire',
      description: 'Book 4',
      author: 'J. K. Rowling',
      publishDate: new Date(2000, 0, 4),
      catergory: Category.Fiction,
      publisher: 'Bloomsbury',
      readingType: 'book',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'book-5',
      name: 'Harry Potter and the Order of the Pheonix',
      description: 'Book 5',
      publishDate: new Date(2003, 0, 5),
      author: 'J. K. Rowling',
      catergory: Category.Fiction,
      publisher: 'Bloomsbury',
      readingType: 'book',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'book-6',
      name: 'Harry Potter and the Half-Blood Prince',
      description: 'Book 6',
      publishDate: new Date(2005, 0, 6),
      author: 'J. K. Rowling',
      catergory: Category.Fiction,
      publisher: 'Bloomsbury',
      readingType: 'book',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'book-7',
      name: 'Harry Potter and the Deathly Hallows',
      description: 'Book 7',
      publishDate: new Date(2007, 0, 7),
      author: 'J. K. Rowling',
      catergory: Category.Fiction,
      publisher: 'Bloomsbury',
      readingType: 'book',
      readerId: undefined,
      returnDate: undefined,
    },
  ];
}

export function mockNewspapers(): Newspaper[] {
  return [
    {
      id: 'newspaper-1',
      name: 'AM New York',
      catergory: Category.News,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'newspaper',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'newspaper-2',
      name: 'The New Yorker',
      catergory: Category.News,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'newspaper',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'newspaper-3',
      name: 'New York Daily News',
      catergory: Category.News,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'newspaper',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'newspaper-4',
      name: 'New York Post',
      catergory: Category.News,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'newspaper',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'newspaper-5',
      name: 'New York Times',
      catergory: Category.News,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'newspaper',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'newspaper-6',
      name: 'New York Law Journal',
      catergory: Category.News,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'newspaper',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'newspaper-7',
      name: 'Wall Street Journal',
      catergory: Category.News,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'newspaper',
      readerId: undefined,
      returnDate: undefined,
    },
  ];
}

export function mockMagazines(): Magazine[] {
  return [
    {
      id: 'magazine-1',
      name: 'Ladybug',
      catergory: Category.Child,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'magazine',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'magazine-2',
      name: 'National Geographic',
      catergory: Category.Child,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'magazine',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'magazine-3',
      name: 'Ranger Rick Jr.',
      catergory: Category.Child,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'magazine',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'magazine-4',
      name: 'BABYBUG',
      catergory: Category.Child,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'magazine',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'magazine-5',
      name: 'Conservationist for Kids',
      catergory: Category.Child,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'magazine',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'magazine-6',
      name: 'Time Out New York Kids Magazine',
      catergory: Category.Child,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'magazine',
      readerId: undefined,
      returnDate: undefined,
    },
    {
      id: 'magazine-7',
      name: 'Kazoo magazine',
      catergory: Category.Child,
      publishDate: new Date(2024, 9, 1),
      language: 'EN',
      readingType: 'magazine',
      readerId: undefined,
      returnDate: undefined,
    },
  ];
}
