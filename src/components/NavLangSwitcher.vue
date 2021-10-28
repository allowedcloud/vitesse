<script setup lang="ts">
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div class="lang-switcher">
    <button :title="t('button.toggle_langs')" @click="toggleLocales">
      <carbon-language />
      <span>{{ locale.toUpperCase() }}</span>
    </button>
  </div>
</template>

<style lang="postcss" scoped>
.lang-switcher {
  border: 1px solid var(--gray-10);
  font-family: sans-serif;
  font-size: 12px;
  font-weight: 600;
  padding: 4px 5px;
  margin-left: 1em;
  margin-top: -5px;
  border-radius: 5px;

  @media (min-width: 425px) {
    padding: 6px 8px;
  }

  & button {
    display: flex;
    align-items: center;
  }

  & span {
    margin-left: 0.5em;
  }
}
</style>
