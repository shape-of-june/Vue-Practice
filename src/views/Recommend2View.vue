<template>
  <div>
    <CloseButton/>
    <QuestionBox @submit="handleSubmit" :question="question" :enter="true" :regen="true" :notUse="false"/>
    <BackButton/>
  </div>
</template>

<script>
import CloseButton from '@/components/CloseButton.vue'
import QuestionBox from '@/components/Recommend/QuestionBox.vue'
import BackButton from '@/components/BackButton.vue'

  export default {
    data() {
      return {
        question: this.$store.state.answer1 + this.$store.state.question2,
      }
    },
    components: {
      CloseButton,
      QuestionBox,
      BackButton
    },
    methods: {
      handleSubmit(answer) {
        this.$store.state.answer2 = answer
        // Logic that fills the next question3 List
        this.$store.state.answer3List = Array(this.$store.state.question3List.length).fill('')
        this.$router.push('/recommend3')
      }
    }
  }
</script>

<style scoped>

</style>