export type Country = 'russia' | 'usa' | string
export type Score = 10 | 20 | number

export interface FilterList {
  byCountry: Country[]
  byScore: Score[]
}
