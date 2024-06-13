<template>
  <div>
    <!-- <CloseButton/> -->
    <QuestionBox @submit="handleSubmit" @handleRegen="handleRegen" :question="question" :enter="true" :regen="true" :notUse="false"/>
    <!-- <BackButton/> -->
  </div>
</template>

<script>
// import CloseButton from '@/components/CloseButton.vue'
import QuestionBox from '@/components/Recommend/QuestionBox.vue'
// import BackButton from '@/components/BackButton.vue'

  export default {
    data() {
      return {
        question: this.$store.state.question2,
      }
    },
    components: {
      // CloseButton,
      QuestionBox,
      // BackButton
    },
    methods: {
      handleSubmit(answer) {
        this.$store.state.answer2 = answer
        // 두번째 질문에 대한 답변 생성 API 호출후 답변을 아래 변수에 저장
        this.$store.state.question3List = [
          answer + '을 처음 접하게 된 계기나 특별한 경험이 있나요? 그 경험이 당신에게 어떤 영향을 미쳤나요?',
          answer + '을 경험하면서 개인적으로 기억에 남는 순간이 있나요? 그 순간이 왜 특별했는지 설명해주세요.',
          answer + '이 당신의 일상 생활이나 감정에 어떤 영향을 미치나요? 예를 들어, 그것이 힘들 때 도움이 되거나,\
          기분 좋을 때 더 즐거움을 주는 경험이 있나요?'
        ]
        // 두번째 질문 리스트 사이즈에 맞는 빈 답변 리스트 생성
        this.$store.state.answer3List = Array(this.$store.state.question3List.length).fill('')
        this.$router.push('/recommend3')
      },
      handleRegen() {
        alert('리젠 기능 개발중입니다')
      }
    }
  }
</script>

<style scoped>

</style>