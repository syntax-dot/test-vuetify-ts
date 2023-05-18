<template>
    <v-list-item v-click-outside="() => isExpand = false">
      <v-avatar prepend @click="isExpand = !isExpand">
        <v-img :src="user.avatar" />
      </v-avatar>

      <v-list-item>
        <v-list-item-title v-html="user.title" />
        <v-list-item-subtitle v-html="user.subtitle" />
        <v-expand-transition>
          <div v-if="isExpand">
            <v-list-item-title  v-text="user.country" />
            <v-list-item-title  v-text="user.address.city" />
            <v-list-item-subtitle v-text="user.address.street" />
          </div>
        </v-expand-transition>
      </v-list-item>
  </v-list-item>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { UserItemProps } from './userItem.props'

const isExpand = ref(false)

defineProps<UserItemProps>()
</script>
