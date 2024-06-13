<template>
  <div>
    <!-- <CloseButton/> -->
    <QuestionBox @submit="handleSubmit" :question="question" :enter="true" :regen="false" :notUse="false"/>
    <ButtonList :buttonList="buttonList" @buttonClicked="handleSubmit"/>
    <!-- <BackButton/> -->
  </div>
</template>

<script>
// import CloseButton from '@/components/CloseButton.vue'
import QuestionBox from '@/components/Recommend/QuestionBox.vue'
import ButtonList from '@/components/Recommend/ButtonList.vue'
// import BackButton from '@/components/BackButton.vue'


  export default {
    data() {
      return {
        question: this.$store.state.question1,
        buttonList: this.$store.state.buttonList
      }
    },
    components: {
      // CloseButton,
      QuestionBox,
      ButtonList,
      // BackButton
    },
    methods: {
      handleSubmit(answer) {
        this.$store.state.answer1 = answer
        // 첫번째 질문에 대한 답변 생성 API 호출후 답변을 아래 변수에 저장
        this.$store.state.question2 = answer + '중 어떤 장르를 가장 좋아하시나요?'
        this.$router.push('/recommend2')
      }
    }

  }
</script>

<style scoped>

</style>