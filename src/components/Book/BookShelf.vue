<template>
  <div class="book-shelf">
    <h3>내 서재</h3>
    <div class="book-container">
      <div class="before-after">
        <div @click="beforeButtonClick" :class="{'on-here':onBefore}">
          <h3>집필중</h3>
        </div>
        <div @click="afterButtonClick" :class="{'on-here':!onBefore}">
          <h3>집필후</h3>
        </div>
      </div>
      <hr>
      <div class="book-list-container">
        <div class="book-list">
          <BookComponent class="book" v-for="(bookName, index) in books" 
            :key="index" @click="handleBookClick(index)" :bookName="bookName"/>
          <BookComponent class="book" v-if="onBefore" @click="handleNewBook" :bookName="'+'"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BookComponent from '@/components/Book/BookComponent.vue'

export default {
  data() {
    return {
      books: this.$store.state.books,
      onBefore: true,
    }
  },
  methods: {
    handleBookClick(index) {
      this.$store.commit('setBookName', index)
      this.$router.push('/editor')
    },
    handleNewBook() {
      this.$store.commit('createNewBook')
      this.$router.push('/editor')
    },
    beforeButtonClick() {
      this.onBefore = true
      this.books = this.$store.state.books
    },
    afterButtonClick() {
      this.onBefore = false
      this.books = this.$store.state.finishedBooks
    },
  },
  components: {
    BookComponent,
  }
};
</script>

<style scoped>
.book-shelf {
  margin: 20px;
  width: 100%
}

.book-container {
  border: 1px solid #ccc;
  border-radius: 10px;
  width: 100%;
  height: 100%;
}

.before-after {
  display: flex;
  flex-direction: flex-start;
  height: 30px;
}

.before-after div {
  margin: 0 10px;
}

hr {
  margin: 10px 0;
}

.book-list-container {
  padding: 10px;
}

.book-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  width: 100%;
}

.book {
  width: 50px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  margin: 10px;
  height: 50px;
}

/* Style for the last book in each row to remove right margin */
.book:nth-child(4n) {
  margin-right: 0;
}

.on-here h3{
  color: red;
}

/* Adjust book width for smaller screens */
@media (max-width: 768px) {
  .book {
    width: 50px;
  }
}

/* Adjust book width for even smaller screens */
@media (max-width: 480px) {
  .book {
    width: 50px;
  }
}
</style>
