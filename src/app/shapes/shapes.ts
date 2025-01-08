export type CardBook = {
    name: string,
    author: string,
    quantity: number,
    updatedDate: string,    
    categories: string[],
    description: string
};

export type ViewBook = {
    name: string,
    author: string,
    categories: string[],
    creationDate: string,
    updatedDate: string,
    description: string,
    chapters: string[]
}

export type ReadingBook = {
    name: string,
    author: string,
    text: string
}