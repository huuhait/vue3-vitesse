<script setup lang="ts">
import useTestStore from '~/stores/test'

const testStore = useTestStore()

testStore.FetchUsers()
</script>

<template>
  <div>
    <div>
      <RouterLink to="/user">
        Go to User
      </RouterLink>
      <RouterLink to="/users">
        Go to Users
      </RouterLink>
    </div>

    Count: {{ testStore.count }}
    <div>
      <button @click="testStore.Add()">
        Add
      </button>
      <br>
      <button v-if="testStore.count != 0 && testStore.count == 1" @click="testStore.Sub()">
        Sub
      </button>
    </div>

    <table>
      <thead>
        <th>ID</th>
        <th>Email</th>
        <th>Age</th>
        <th>Gender</th>
      </thead>
      <tbody>
        <tr v-for="(user, index) in testStore.users" :key="index">
          <td>{{ user.id }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.age }}</td>
          <td>{{ user.gender }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<route lang="yaml">
meta:
  layout: default
</route>
