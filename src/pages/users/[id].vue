<script setup lang="ts">
const route = useRoute()

interface User {
  id: number
  email: string
  age: number
  gender: string
}

const user = ref<User>()

const getUser = async() => {
  try {
    const res = await fetch(`http://localhost:3001/users/${route.params.id}`)
    const data = await res.json()

    user.value = data
  } catch (error) {
    //
  }
}

getUser()
</script>

<template>
  <div>
    <RouterLink to="/">
      Go to Index
    </RouterLink>
  </div>
  <div>
    {{ user }}
  </div>
</template>
