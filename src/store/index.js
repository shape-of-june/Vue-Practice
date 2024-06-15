import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
  state () {
    return {
      // 로그인 정보 (전역에서 사용)
      isLoggedIn: false,

      // <이슈> EditorView로 옮기기
      // 현재
      bookName: '',
      bookContent: [],

      // <이슈> 이것도 로그인 정보에 따라 동적으로 BookView로 옮기기
      books: ['책1', '책2', '책3', '책4'],
      finishedBooks: [],
      
      // <이슈> recommendView1로 옮기기
      question1: '이야기 하고 싶은 분야를 알려주세요! 3번의 단계만 거치면 글감을 찾을 수 있어요!',
      buttonList: [
        '여행', '사진', '영화', '책', '글쓰기',
        '음악', '요리', '육아', '스타트업', '건강',
        '운동', '멘탈', '인문학', '사랑', '인생',
      ],

      // if) answer1,2,3이 모두 editor에 영향을 주는 변수라면 answer들을 저장해야 함
      // else) answer1,2들이 editor에 영향을 주지 않는다면 answer들을 저장하지 않고 각 뷰에서
      // 호출하여 얻은 다음 질문들만을 저장하고 최종 글감을 writeAbles에 저장
      answer1: '',

      question2: '',
      answer2: '',

      question3List: [],
      answer3List: [],
      // 
      writeAbles: [],
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
    setBook(state){
      // 현재 선정한 글감을 정리해 넣는 함수, RecommendView4에서 사용
      // 아직 데이터를 어떻게 관리해야될 지 정하지 않아서 보류
      // { answer2 = 책 제목, (question3List, answer3List) = 대목차, writeAbles = 소목차 }
      state.bookName = state.answer2
      // ''처리 된 writeable은 사용자가 x 버튼을 누른 것
      state.bookContent = state.writeAbles.filter(writeable => writeable!='')
    }
  },
})

export default store