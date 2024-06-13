<template>
  <div class="book-container">
    <p>{{ bookName }}</p>
    <!-- 책 정보 -->
  </div>
</template>

<script>
export default {
  props: ['bookName'],
}
</script>

<style scoped>
.book-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh; /* 세로 중앙 정렬을 위해 전체 높이 설정 */
  text-align: center; /* 텍스트 중앙 정렬 */
}

p {
  /* p 요소에 대한 추가 스타일을 여기에 정의할 수 있습니다 */
}
</style>
