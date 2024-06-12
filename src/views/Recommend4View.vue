<template>
  <div>
    <CloseButton/>
    <h3>당신의 답변을 바탕으로 추천하는 5개의 글감입니다.</h3>  
    <div v-for="(question, index) in questionList" :key="index">
      <RecommendBox :question="question" @handleDelete="handleDelete(index)"/>
    </div>
    <BackButton/>
  </div>
</template>

<script>
import CloseButton from '@/components/CloseButton.vue'
import RecommendBox from '@/components/Recommend/RecommendBox.vue'
import BackButton from '@/components/BackButton.vue'

  export default {
    data() {
      return {
        questionList: this.$store.state.writeAbles[this.$store.state.writeAblesIndex]
      }
    },
    components: {
      CloseButton,
      RecommendBox,
      BackButton,
    },
    methods: {
      handleDelete(index) {
        this.$store.state.writeAbles[this.$store.state.writeAblesIndex][index] = ''
      }
    }
  }
</script>

<style scoped>
h3 {
  text-align: center;
}
</style>