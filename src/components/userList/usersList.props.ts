import { User } from '../../types/user/user'

export interface UserListProps {
  // if you do not use state managers -> use props users
  users?: User[]
  subheader?: string
}
