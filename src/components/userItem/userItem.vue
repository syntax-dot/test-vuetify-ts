<!-- eslint-disable vue/no-undef-components -->
<template>
  <v-list-item>
    <v-avatar>
      <v-img :src="user.avatar" />
    </v-avatar>

    <v-list-item>
      <v-list-item-title v-html="user.title" />
      <v-list-item-subtitle v-html="user.subtitle" />
    </v-list-item>
  </v-list-item>
</template>

<script setup lang="ts">
import { UserItemProps } from './userItem.props'

defineProps<UserItemProps>()
</script>
