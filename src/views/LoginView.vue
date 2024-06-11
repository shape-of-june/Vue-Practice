<template>
  <div>
    <h1>Login Page</h1>
    <form action="" @submit.prevent="submitForm">
      <div>
        <label for="userID">ID:</label>
        <input id="userID" type="text">
      </div>
      <div>
        <label for="password">PW:</label>
        <input id="password" type="text">
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
  export default {
    emits: ['login'],
    methods: {
      submitForm() {
        alert('로그인 성공')
        this.$emit('login')
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>

</style>