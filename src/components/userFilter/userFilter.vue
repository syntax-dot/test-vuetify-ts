<template>
  <v-select v-model="localModel"
            :items="items"
            clearable
            :label="label" />
</template>

<script setup lang="ts">
import { UserFilterProps, UserFilterEmit } from './userFilter.props'
import { computed } from 'vue'

const props = defineProps<UserFilterProps>()
const emit = defineEmits<UserFilterEmit>()

const localModel = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
</script>
