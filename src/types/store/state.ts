import { User } from "../user/user"

export interface State {
  filter: string | number | null
  users: User[] | null
}
