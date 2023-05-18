import { Country, Score } from "./filterVariants"

export interface FilterList {
  byCountry: Country[]
  byScore: Score[]
}
