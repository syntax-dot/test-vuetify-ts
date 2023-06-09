import { Address } from './../address/address';
export interface User {
  id: string
  avatar: string
  title: string
  subtitle: string
  country: 'russia' | 'usa'
  score: number
  address: Address
}
