<script setup lang="ts">
const router = useRouter()
const { t } = useI18n()
</script>

<template>
  <main>
    <router-view />
    <div>
      <button @click="router.back()">
        {{ t('button.back') }}
      </button>
    </div>
  </main>
</template>
