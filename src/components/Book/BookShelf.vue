<template>
  <div class="book-shelf">
    <div class="before-after">
      <div class="ba-menu">
        <h3>집필중</h3>
      </div>
      <div class="ba-menu">
        <h3>집필후</h3>
      </div>
    </div>
    <hr>
    <div class="book-list">
      <div class="book" v-for="(book, index) in books" :key="index" @click="handleBookClick(index)">
        <!-- Display your book content here -->
        <p>{{ book }}</p>
      </div>
      <div class="book" @click="handleNewBook">
        <!-- Display your book content here -->
        <p>책 만들기</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      books: this.$store.state.books,
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
  }
};
</script>

<style scoped>
.book-shelf {
  width: 100%;
}


.before-after {
  display: flex;
  height: 50px;
}

.ba-menu {
  margin: 10px;
}

.book-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 10px;
  margin: 10px;
  width: 100%; /* Ensure the book list covers the entire width */
  height: 100%;
}

.book {
  width: 50px; /* Adjust the width based on your design */
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
