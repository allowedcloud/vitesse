<script setup lang="ts">
</script>

<template>
  <header>
    <nav aria-labelledby="primary-navigation">
      <NavLogo />
      <div class="links">
        <NavLinks />
        <NavLangSwitcher />
      </div>
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
header {
  padding: 1em 1em 0 0;
  margin-bottom: 0.5rem;
  @media (min-width: 425px) {
    padding: 1em 2em 0 1em;
  }
  & nav {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    color: var(--gray-4);
    & .links {
      display: flex;
      align-items: center;
    }
  }
}

html.dark {
  & nav {
    color: var(--gray-9);
  }
}
</style>
