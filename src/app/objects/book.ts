import { chapter } from "./chapter"

export type book = {
    title: string,
    createBy: string,
    chapterCount: number,
    categories: string[],
    description: string,
    chapters: chapter[]
  }