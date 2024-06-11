import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      isLoggedIn: false,
      bookName: '',
      books: ['책1', '책2', '책3', '책4'],
    }
  },
  mutations: {
    logOut (state) {
      state.isLoggedIn = false
    },
    logIn (state) {
      state.isLoggedIn = true
    },
    setBookName (state, index) {
      state.bookName = state.books[index]
    },
    createNewBook (state) {
      state.bookName = ''
    },

  },
})

export default store