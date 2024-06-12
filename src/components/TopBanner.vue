<template>
  <div id="banner">
    <div class="button" id="trywrite" @click="handleTitleClick">
      <h3>TryWrite</h3>
    </div>
    <div class="right-group">
      <div class="button" @click="handleExplainClick">
        <h5>서비스 소개</h5>
      </div>
      <StartFree v-if=!$store.state.isLoggedIn />
      <button v-else @click="handleLogOut">로그아웃</button>
    </div>
  </div>
  <hr>
</template>

<script>
import StartFree from '@/components/StartFree.vue'

  export default {
    components: {
      StartFree,
    },
    methods: {
      handleTitleClick() {
        this.$router.push('/')
      },
      handleExplainClick() {
        this.$router.push('/explain')
      },
      handleLogOut() {
        this.$store.commit('logOut')
        this.$router.push('/')
      },
    },
  }
</script>

<style scoped>
#banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 20px; /* Optional: Add padding to give some space */
  background-color: white;
}

.right-group {
  display: flex;
  gap: 20px; /* Adjust the gap as needed */
}
.button {
  padding: 5px 10px; /* Add padding for better appearance */
  display: flex;
  align-items: center;
  border-radius: 4px; /* Optional: Add border radius for rounded corners */
}

h3, h5 {
  margin: 0; /* Remove default margin */
}

#trywrite {
  background-color: gray;
}

</style>
