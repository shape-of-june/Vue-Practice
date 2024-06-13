<template>
  <div>
    <h2>질문에 답변을 해주세요. 답변을 한 질문들에 대해서만 글감을 생성해줍니다.</h2>
    <!-- <CloseButton/> -->
    <div v-for="(question, index) in $store.state.question3List" :key="index"
          :class="{'completed':$store.state.answer3List[index]!=''}">
      <div>
        <QuestionBox @submit="answer => handleSubmit(answer, index)" @handleRegen="handleRegen"
          :question="question" :enter="true" :regen="true"/>
      </div>
    </div>
    <!-- <BackButton/> -->
    <FinishButton @click="handleFinish"/>
  </div>
</template>

<script>
// import CloseButton from '@/components/CloseButton.vue'
import QuestionBox from '@/components/Recommend/QuestionBox.vue'
// import BackButton from '@/components/BackButton.vue';
import FinishButton from '@/components/FinishButton.vue'

  export default {
    data() {
      return {
        allAnswered: false
      }
    },
    components: {
      // CloseButton,
      QuestionBox,
      // BackButton,
      FinishButton
    },
    methods: {
      handleSubmit(answer, index) {
        // 답변의 저장
        this.$store.state.answer3List[index] = answer
        // API 호출로 추천 글감 저장하는 코드 들어가야함!

      },
      handleRegen() {
        // 리젠시 동작은 추후 구현
        alert('리젠 기능 구현중입니다.')
      },
      handleFinish() {
        // API 호출로 현재 글감들을 대목차 & 중목차 & 소목차등으로 구성하여 저장
        // 여기서 트리 형태로 받는 것 vs 리스트 형태 + (대목, 중목, 소목)로 받을 지 고민해봐야
        this.$store.state.writeAbles = [
          '형과의 음악 공유: 첫 힙합 경험',
          '에픽하이의 매력에 빠지다',
          '힙합과의 첫 만남: 초등학교 시절',
          'MP3 속의 보물: 힙합 음악과의 인연',
          '힙합 사랑의 시작: 형과 함께한 음악 시간',
        ]
        this.$router.push('/recommend4')
      }
    }
  }
</script>

<style scoped>
.completed {
  background-color: gray;
}

.display-none {
  display: none;
}
</style>