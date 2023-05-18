<template>
  <v-card maxWidth="450"
          class="mx-auto">
    <v-list threeLine>
      <v-list-subheader :title="subheader ?? 'List'" />
      <template v-for="(user, index) in users" :key="user.id">
        <userItem :user="user" />
        <v-divider v-if="index + 1 !== users?.length" />
      </template>
    </v-list>
  </v-card>
</template>

<script setup lang="ts">
import { userItem } from '../userItem'
import { UserListProps } from './usersList.props'

defineProps<UserListProps>()
</script>
