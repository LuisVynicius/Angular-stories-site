export type fullBook = {
    name: string,
    author: string,
    quantity: number,
    data: string,
    categories: string[],
    description: string
};

export type viewBook = {
    name: string,
    author: string,
    categories: string[],
    creationDate: string,
    updatedDate: string,
    description: string,
    chapters: string[]
}

export type readingBook = {
    name: string,
    author: string,
    text: string
}