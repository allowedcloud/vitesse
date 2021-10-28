<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Vitesse',
  },
})
</script>

<template>
  <h2>{{ props.title }}</h2>
  <slot></slot>
</template>

<style lang="postcss" scoped>
h2 {
  font-family: sans-serif;
  font-size: 26px;
  font-weight: 600;
  padding: 10px 20px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: var(--green-7);
  white-space: nowrap;
}

html.dark {
  & h2 {
    color: var(--green-9);
  }
}
</style>
