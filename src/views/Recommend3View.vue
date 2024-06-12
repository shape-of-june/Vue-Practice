<template>
  <div>
    <CloseButton/>
    <div v-for="(question, index) in $store.state.question3List" :key="index"
          :class="{'completed':$store.state.answer3List[index]!=''}">
      <div v-if="question != ''">
        <QuestionBox @submit="answer => handleSubmit(answer, index)" 
          @handleRegen="handleRegen" @handleDelete="handleDelete(index)"
          :question="$store.state.answer2 + question" 
          :enter="true" :regen="true" :notUse="true"/>
      </div>
    </div>
    <BackButton/>
    <FinishButton @click="handleFinish"/>
  </div>
</template>

<script>
import CloseButton from '@/components/CloseButton.vue'
import QuestionBox from '@/components/Recommend/QuestionBox.vue'
import BackButton from '@/components/BackButton.vue'
import FinishButton from '@/components/FinishButton.vue'

  export default {
    data() {
      return {
        showFinish: this.$store.state.answer3List.every(answer => answer !== ''),
        allAnswered: false
      }
    },
    components: {
      CloseButton,
      QuestionBox,
      BackButton,
      FinishButton
    },
    methods: {
      handleSubmit(answer, index) {
        this.$store.state.answer3List[index] = answer
        this.$store.state.writeAblesIndex = index
        // Check if all questions are answered
        // 대답의 무결성 체크가 있어야 될듯
        // 1. 모든 답변이 완료되어야 완료 버튼이 나오게 하기
        // 2. 모든 답변이 완료되지 않아도 완료 버튼이 나오되, 완료 버튼을 누르면 미완료된 질문이 있는지 체크하고 알림창 띄우기
        if (this.$store.state.answer3List.every(answer => answer !== '')) {
          this.showFinish = true
        }
        this.$router.push('/recommend4')
      },
      handleRegen() {
        alert('리젠 기능 구현중입니다.')
      },
      handleDelete(index) {
        this.$store.state.question3List[index] = ''
        this.$store.state.answer3List[index] = '-1'
        // Check if all questions are answered
        if (this.$store.state.answer3List.every(answer => answer !== '')) {
          this.showFinish = true
        }
      },
      handleFinish() {
        this.$router.push('/recommend5')
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