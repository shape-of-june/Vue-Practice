import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      isLoggedIn: false,

      bookName: '',
      books: ['책1', '책2', '책3', '책4'],
      
      question2: '중 어떤 장르를 가장 좋아하시나요?',
      question3List: [
        '을 처음 접하게 된 계기나 특별한 경험이 있나요? 그 경험이 당신에게 어떤 영향을 미쳤나요?',
        '을 경험하면서 개인적으로 기억에 남는 순간이 있나요? 그 순간이 왜 특별했는지 설명해주세요.',
        '이 당신의 일상 생활이나 감정에 어떤 영향을 미치나요? 예를 들어, 그것이 힘들 때 도움이 되거나,\
          기분 좋을 때 더 즐거움을 주는 경험이 있나요?',
      ],
      writeAbles: [
        [
          '에픽하이와의 첫 만남',
          '에픽하이의 음악이 끼친 영향',
          '형과의 음악 공유 경험',
          '초등학생 시절의 음악 경험',
          '에픽하이의 음악적 특징',
        ],
        [
          '에픽하이와의 첫 만남',
          '에픽하이의 음악이 끼친 영향',
          '형과의 음악 공유 경험',
          '초등학생 시절의 음악 경험',
          '에픽하이의 음악적 특징',
        ],
        [
          '에픽하이와의 첫 만남',
          '에픽하이의 음악이 끼친 영향',
          '형과의 음악 공유 경험',
          '초등학생 시절의 음악 경험',
          '에픽하이의 음악적 특징',
        ],
      ],
      writeAblesIndex: 0,

      answer1: '',
      answer2: '',
      answer3List: [],
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