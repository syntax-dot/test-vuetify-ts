import { State } from '@/types/store/state'
import { defineStore } from 'pinia'
import { users } from '@/mock/users'
import { FilterBy } from '@/types/filter/filterBy'
import { ref } from 'vue'

export const useStore = defineStore('app', {
  state: () : State => ({
    filter: {
      byCountry: null,
      byScore: null
    },
    users: users
  }),

  actions: {
    getFilter() {
      return this.filter
    },

    setFilter(newFilter: FilterBy) {
      this.filter = newFilter
    },

    clearFilter() {
      this.filter = {
        byCountry: null,
        byScore: null
      }
    },

    getUsers() {
      return this.users
    },

    getUsersByFilter() {
      const { byCountry: country, byScore: score  } = this.filter

      if (!country && !score)
        return this.users

      if (country && score)
        return this.users?.filter(user => user.country === country && user.score >= score)

      if (country)
        return this.users?.filter(user => user.country === country)

      if (score)
        return this.users?.filter(user => user.score >= score)
    }
  }
})
