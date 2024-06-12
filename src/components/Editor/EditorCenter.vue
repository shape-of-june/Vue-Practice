<template>
  <div class="editor">
    <div v-if="bookName!=''">
      <h1>{{ bookName }}</h1>
    </div>
    <div v-else>
      <h3>제목 정하기...</h3>
      <div v-if="doRecommend">
        <button @click="handleRecommend">글감 찾기</button>
        <button @click="handleNoRecommend">혼자 시작하기</button>
      </div>
    </div>


  </div>
</template>

<script>
  export default {
    data() {
      return {
        bookName: this.$store.state.bookName,
        doRecommend: true,
      }
    },
    methods: {
      handleRecommend() {
        this.$router.push('/recommend1')
      },
      handleNoRecommend() {
        this.doRecommend = false;
      }
    },
  }
</script>

<style scoped>
.editor {
  height: 100vh;
  padding: 20px;
}

h3 {
  color: gray;
}

</style>