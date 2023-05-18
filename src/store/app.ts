import { State } from '@/types/store/state'
import { defineStore } from 'pinia'
import { users } from '@/mock/users'

export const useStore = defineStore('app', {
  state: () : State => ({
    filter: null,
    users: users
  }),

  actions: {
    getFilter() {
      return this.filter
    },

    setFilter(newFilter: string | number) {
      this.filter = newFilter
    },

    clearFilter() {
      this.filter = null
    },

    getUsers() {
      return this.users
    },

    getUsersByFilter() {
      return this.users?.filter(user => user.country)
    }
  }
})
