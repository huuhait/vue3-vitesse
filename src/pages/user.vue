<script setup lang="ts">
import useTestStore from '~/stores/test'

const testStore = useTestStore()
</script>

<template>
  <div>
    <RouterLink to="/">
      Go to Index
    </RouterLink>
  </div>
  <div>
    {{ testStore.user }}
  </div>
</template>
