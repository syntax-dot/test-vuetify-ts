<template>
<template v-if="users?.length">
  <v-card maxWidth="450"
          class="mx-auto">
    <v-list threeLine>
      <v-list-subheader :title="subheader ?? 'List'" />
        <section v-for="(user, index) in users" :key="user.id">
          <userItem  :user="user" />
          <v-divider v-if="index + 1 !== users?.length" />
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
import { userItem } from '../userItem'
import { UserListProps } from './usersList.props'

defineProps<UserListProps>()
</script>
