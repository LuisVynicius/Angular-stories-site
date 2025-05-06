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
    chapters: chapter[]
}

export type taleRead = {
    name: string,
    author: string,
    chapterName: string,
    content: string
}

export type taleCreate = {
    name: string,
    description: string,
    categories: string[]
}

export type taleUpdateAll = {
    id: number,
    name: string,
    description: string,
    categories: string[],
    chapters: chapter[]
}

export type taleUpdateTale = {
    id: number,
    name: string,
    description: string,
    categories: string[]
}

export type taleDelete = {
    name: string
}

export type chapter = {
    name: string,
    date: string
}

export type chapterCreate = {
    taleId: number,
    name: string,
    content: string
}

export type chapterUpdate = {
    taleId: number,
    chapters: chapter[]
}