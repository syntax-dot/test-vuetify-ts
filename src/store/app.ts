import { State } from '@/types/store/state'
import { defineStore } from 'pinia'

export const useStore = defineStore('app', {
  state: () : State => ({
    filter: null
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
  }
})
