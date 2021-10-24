<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    default: 'Vitesse',
    required: true,
  },
})
</script>

<template>
  <header>
    <nav aria-labelledby="primary-navigation">
      <h2>{{ props.title }}</h2>
      <div>
        <router-link to="/">
          Home
        </router-link>
      </div>
    </nav>
  </header>
</template>

<style lang="postcss" scoped>
header {
    padding: 1em;
    & nav {
        display: flex;
        justify-content: space-between;
        & a {
            cursor: pointer;
            &:hover {
                text-decoration: underline;
            }
        }
        & h2 {
            font-size: 26px;
            font-weight: 600;
            color: green;
        }
    }
}
</style>
