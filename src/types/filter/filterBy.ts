import { Country, Score } from "./filterVariants"

export interface FilterBy {
  byCountry: Country | null
  byScore: Score | null
}
