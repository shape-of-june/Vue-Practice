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
    methods: {
      submitForm() {
        this.$store.commit('logIn')
        this.$router.push('/book')
      }
    }
  }
</script>

<style scoped>

</style>