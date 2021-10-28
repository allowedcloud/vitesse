<script setup lang="ts">
import { isDark, toggleDark } from '../logic'

const { t } = useI18n()
</script>

<template>
  <router-link to="/">
    <feather-home />
  </router-link>
  <a href="#">
    <feather-github />
  </a>
  <!-- Colorscheme toggle -->
  <button :title="t('button.toggle_dark')" @click="toggleDark()">
    <feather-sun v-if="isDark" />
    <feather-moon v-else />
  </button>
</template>

<style lang="postcss" scoped>
a {
  cursor: pointer;
  margin: 0 0.5em;
  -webkit-tap-highlight-color: transparent;
  &:active {
    color: var(--green-9);
  }

  @media (min-width: 425px) {
    margin: 0 1em;
  }
}
button {
  cursor: pointer;
  margin: 0 0.5em;
  -webkit-tap-highlight-color: transparent;

  &:active {
    color: var(--green-9);
  }

  @media (min-width: 425px) {
    margin: 0 1em;
  }
}
</style>
