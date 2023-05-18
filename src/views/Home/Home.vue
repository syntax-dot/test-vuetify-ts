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
        <userFilter v-model="selectedFilter"
                    :items="filters.byCountry"
                    clearable
                    label="Filter by country" />

        <userFilter v-model="selectedFilter"
                    :items="filters.byScore"
                    clearable
                    label="Filter by score" />
      </v-col>

      <v-col cols="12"
             md="4">
        <usersList :users="users" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import { userFilter } from '@/components/userFilter';
import { usersList } from '@/components/userList';
import { users } from '@/mock/users';
import { ref } from 'vue';

const filters = {
  byCountry: ['russia', 'usa'],
  byScore: [10, 20]
}

const selectedFilter = ref<string | null>(null)
</script>
