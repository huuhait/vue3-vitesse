import { defineStore } from 'pinia'

interface User {
  id: number
  email: string
  age: number
  gender: string
}

export default defineStore({
  id: 'test',
  state() {
    return {
      count: ref(0),
      user: ref({
        id: 1,
        email: 'user@example.com',
        age: 18,
        gender: 'male',
      }),
      users: ref<User[]>([]),
    }
  },
  actions: {
    Add() {
      this.count++
    },
    Sub() {
      this.count--
    },
    async FetchUsers() {
      try {
        const res = await fetch('http://localhost:3001/users')
        this.users = await res.json()
      } catch (error) {
        return error
      }
    },
  },
})
