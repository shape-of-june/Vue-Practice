<template>
  <TopBanner :appTitle="appTitle"
              :loginDone="loginDone"
              @titleClicked="goToHome"
              @startFree="goToLogin"
              @explainClicked="goToExplain"
              @logOut="loginDone = false"/>
  <RouterView @startFree="goToLogin"
              @login="loginDone = true"></RouterView>
</template>

<script>
import TopBanner from './components/TopBanner.vue'
  
  export default {
    components: {
      TopBanner
    },
    data() {
      return {
        appTitle: 'TryWrite',
        loginDone: false
      }
    },
    methods: {
      goToHome() {
        this.$router.push('/')
      },
      goToLogin() {
        alert('로그인 페이지로 이동합니다.')
        this.$router.push('/login')
      },
      goToExplain() {
        alert('어디로 가야하오')
      }
    }
  }
</script>

<style scoped>

</style>