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
        // 같은 창에서 누를 시 새로 고침이 되도록 함
        if (this.$route.path === '/') {
          // 현재는 리로드하면 로그인 정보가 삭제됨
          // JWT을 로컬 스토리지나 쿠키에 저장하여 새로 고침 이후에도 로그인 상태 유지할 수 있도록 해야 함
          window.location.reload()
        }
        else {
          // 다른 창에서 누를 시 홈으로 이동
          this.$router.push('/')
        }
      },
      handleExplainClick() {
        if (this.$route.path === '/explain') {
          window.location.reload()
        }
        else {
          this.$router.push('/explain')
        }
      },
      handleLogOut() {
        this.$store.commit('logOut')
        if (this.$route.path === '/') {
          window.location.reload()
        }
        else {
          this.$router.push('/')
        }
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
