<template>
  <div class="book-view">
    <LeftBar/>
    <BookShelf/>
  </div>
</template>

<script>
import LeftBar from '@/components/Book/BookLeftBar.vue'
import BookShelf from '@/components/Book/BookShelf.vue'

  export default {
    components: {
      LeftBar,
      BookShelf
    },
  }
</script>

<style scoped>
.book-view {
  display: flex;
  margin-bottom: 20px;
}
</style>