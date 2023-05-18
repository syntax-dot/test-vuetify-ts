import { FilterBy } from "../filter/filterBy"
import { User } from "../user/user"

export interface State {
  filter: FilterBy
  users: User[] | null
}
