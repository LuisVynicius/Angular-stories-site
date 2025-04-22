export type tale = {
    title: string,
    author: string,
    chaptersQuantity: number,
    updatedDate: string,
    likeQuantity: string
    categories: string[],
    description: string
}

export type taleView = {
    name: string,
    author: string,
    chaptersQuantity: number,
    likeQuantity: number,
    favoritesQuantity: number
    creationDate: string,
    updatedDate: string,
    status: string,
    categories: string[],
    description: string,
    chapters: chapters[]
}

export type taleRead = {
    name: string,
    author: string,
    chapterName: string,
    content: string
}

export type chapters = {
    name: string,
    date: string
}