<template>
  <div class="sidebar">
    <hr>
    <div class="sidebar-item">
      <h3>HOME</h3>
    </div>
    <div class="sidebar-item">
      <button @click="handleBookShelfClick">내 서재</button>
    </div>
    <div class="sidebar-item">
      <button @click="handleIdeaShelfClick">아이디어 보관함</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleBookShelfClick() {
      if (this.$route.path === '/book') {
        window.location.reload()
      }
      this.$router.push('/book')
    },
    handleIdeaShelfClick() {
      alert('서비스 구현중입니다')
      // if (this.$route.path === '/idea') {
      //   window.location.reload()
      // }
      // this.$router.push('/idea')
    },
  }
  
}
</script>

<style scoped>
.sidebar {
  width: 125px; /* adjust the width as needed */
  background-color: #f2f2f2; /* set your desired background color */
  height: 100vh;
}

.sidebar-item {
  margin-bottom: 15px;
  background-color: #f5f5f5; /* set your desired background color */
}

.sidebar-item h3 {
  margin: 0;
  font-size: 18px; /* adjust the font size as needed */
  color: #333; /* set your desired text color */
}

.sidebar-item button {
  display: center;
  font-size: 10px;
  width: 100%;
  padding: 5px;
  background-color: #f5f5f5; /* set your desired background color */
  color: #333; /* set your desired text color */
  cursor: pointer; /* optional: add cursor pointer */
}
</style>