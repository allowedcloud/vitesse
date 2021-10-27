<script setup lang="ts">
import { isDark, toggleDark } from '../logic'

const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
const props = defineProps({
  title: {
    type: String,
    default: 'Vitesse',
    required: true,
  },
})

const currentTime = () => {
  return new Date().toLocaleTimeString(locale.value)
}

const now = ref('')
watchEffect(() => {
  setInterval(() => {
    return now.value = currentTime()
  }, 1000)
})

</script>

<template>
  <header>
    <nav aria-labelledby="primary-navigation">
      <h2>{{ props.title }}</h2>
      <div class="links">
        <router-link to="/">
          <feather-home />
        </router-link>
        <a href="#">
          <feather-github />
        </a>
        <!-- Colorscheme toggle -->
        <button
          :title="t('button.toggle_dark')"
          @click="toggleDark()"
        >
          <feather-sun v-if="isDark" />
          <feather-moon v-else />
        </button>
        <!-- Language toggle -->
        <div class="lang-switcher">
          <button :title="t('button.toggle_langs')" @click="toggleLocales">
            <carbon-language />
            <span>
              {{ locale.toUpperCase() }}
            </span>
          </button>
        </div>
        <div class="now">
          <feather-clock />
          <span>
            {{ now }}
          </span>
        </div>
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
          & .now {
            display: flex;
            align-items: center;
            border: 1px solid var(--gray-10);
            font-weight: 600;
            padding: 7px 10px;
            margin-top: -7px;
            margin-left: 1em;
            font-size: 11px;
            font-family: monospace;
            margin-bottom: -3px;
            border-radius: 5px;

            @media (max-width: 425px) {
              display: none;
            }

            & span {
              margin-left: 0.5em;
              margin-top: 2px;
            }
          }
          & .lang-switcher {
            border: 1px solid var(--gray-10);
            font-family: sans-serif;
            font-size: 12px;
            font-weight: 600;
            padding: 4px 5px;
            margin-left: 1em;
            margin-top: -5px;
            border-radius: 5px;

            @media (min-width: 425px) {
              padding: 6px 0;
            }

            & button {
              display: flex;
              align-items: center;
            }

            & span {
              margin-left: 0.5em;
            }
          }
        }
        & a {
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
        & button {
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
        & h2 {
            font-family: sans-serif;
            font-size: 26px;
            font-weight: 600;
            padding: 10px 20px;
            border-top-left-radius: 8px;
            border-top-right-radius: 8px;
            color: var(--green-7);
            white-space: nowrap;
        }
    }
}

html.dark {
  & nav {
    color: var(--gray-9);
    & h2 {
      color: var(--green-10);
    }
  }
}
</style>
