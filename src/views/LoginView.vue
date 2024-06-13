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
      // 구글, 페이스북, 카카오, 네이버 로그인 정도가 적절할 듯 함
      // 로그인의 무결성 체크는 연동으로만 관리한다는 가정하에 굳이 안함
      submitForm() {
        this.$store.commit('logIn')
        this.$router.push('/book')
      }
    }
  }
</script>

<style scoped>

</style>