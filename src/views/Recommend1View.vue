<template>
  <div>
    <CloseButton/>
    <QuestionBox @submit="handleSubmit" :question="question" :enter="true" :regen="false" :notUse="false"/>
    <ButtonList :buttonList="buttonList" @buttonClicked="handleSubmit"/>
    <BackButton/>
  </div>
</template>

<script>
import CloseButton from '@/components/CloseButton.vue'
import QuestionBox from '@/components/Recommend/QuestionBox.vue'
import ButtonList from '@/components/Recommend/ButtonList.vue'
import BackButton from '@/components/BackButton.vue'


  export default {
    data() {
      return {
        question: '이야기 하고 싶은 분야를 알려주세요! 3번의 단계만 거치면 글감을 찾을 수 있어요!',
        buttonList: [
          '여행', '사진', '영화', '책', '글쓰기',
          '음악', '요리', '육아', '스타트업', '건강',
          '운동', '멘탈', '인문학', '사랑', '인생',
        ],
      }
    },
    components: {
      CloseButton,
      QuestionBox,
      ButtonList,
      BackButton
    },
    methods: {
      handleSubmit(answer) {
        this.$store.state.answer1 = answer
        this.$router.push('/recommend2')
      }
    }

  }
</script>

<style scoped>

</style>