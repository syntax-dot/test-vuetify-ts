<template>
  <v-container>
    <v-row align="center"
           justify="center"
           class="ma-4">
      <v-col cols="12">
        <v-img src="@/assets/logo.svg"
               class="my-3"
               contain
               height="200" />
      </v-col>

      <v-col cols="12"
             md="4">
        <userFilter v-model="selectedFilter.byCountry"
                    :items="filters.byCountry"
                    label="Filter by country" />

        <userFilter v-model="selectedFilter.byScore"
                    :items="filters.byScore"
                    label="Filter by score" />
      </v-col>

      <v-col cols="12"
             md="4">
        <usersList />
        <!-- <usersList :users="filtredUsers" /> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { userFilter } from '@/components/userFilter';
import { usersList } from '@/components/userList';
// import { users } from '@/mock/users';
// import { User } from '@/types/user/user';
import { FilterList } from '@/types/filter/filterList';
import { FilterBy } from '@/types/filter/filterBy';
import { ref, watchEffect } from 'vue';
import { useStore } from '@/store/app';

const store = useStore()

// const filtredUsers = ref<User[]>(users)

const filters: FilterList = {
  byCountry: ['russia', 'usa'],
  byScore: [10, 20]
}

const selectedFilter = ref<FilterBy>({
  byCountry: null,
  byScore: null
})

// **** if you do not use state managers ****

// function changeUsers() {
//   const { byCountry, byScore } = selectedFilter.value

//   if (!byCountry && !byScore) return

//   if (byCountry)
//     return filtredUsers.value = users.filter(user => user.country === byCountry)

//   else if (byScore)
//     return filtredUsers.value = users.filter(user => user.score === byScore)
// }

// watchEffect(changeUsers)

// **** using the state manager ****

function changeFilter() {
  const { byCountry, byScore } = selectedFilter.value

  if (!byCountry && !byScore) return store.clearFilter()

  store.setFilter(selectedFilter.value)
}

watchEffect(changeFilter)
</script>
