<template>
<template v-if="filtredUsers?.length">
  <v-card maxWidth="450"
          class="mx-auto">
    <v-list threeLine>
      <v-list-subheader :title="subheader ?? 'List'" />
        <section v-for="(user, index) in filtredUsers" :key="user.id">
          <userItem  :user="user" />
          <v-divider v-if="index + 1 !== filtredUsers?.length" />
        </section>
    </v-list>
  </v-card>
</template>
<template v-else>
        <v-progress-circular
          :size="50"
          color="primary"
          indeterminate
        />
      </template>
</template>

<script setup lang="ts">
import { useStore } from '@/store/app';
import { userItem } from '../userItem'
import { UserListProps } from './usersList.props'
import { watchEffect } from 'vue';
import { ref } from 'vue';
import { User } from '@/types/user/user';

const store = useStore()
const filtredUsers = ref<User[] | null | undefined>(null)

defineProps<UserListProps>()

function fetchUserByFilter() {
  filtredUsers.value = store.getUsersByFilter()
}



watchEffect(fetchUserByFilter)
</script>
