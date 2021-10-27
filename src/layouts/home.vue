<template>
  <TheNav title="Vite Starter" />
  <main>
    <router-view />
    <div>[Home Layout]</div>
  </main>
  <TheFooter />
</template>

<style lang="postcss" scoped>
main {
  padding: 2rem 1rem 2.5rem 2rem;
  margin: 0 1rem 0 0;
  border-right: 1px solid var(--green-8);
  border-top: 1px solid var(--green-8);
  border-top-right-radius: 8px;
  border-top-right-radius: 8px;
  flex-grow: 1;
}

html.dark {
  & main {
    border-right: 1px solid var(--green-10);
    border-top: 1px solid var(--green-10);
  }
}
</style>
