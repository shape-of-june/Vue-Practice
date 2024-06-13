<template>
  <div>
    <!-- <CloseButton/> -->
    <div class="center">
      <div>
        <h3>비서가 구성한 목차입니다. 자유롭게 수정 가능해요.</h3>
      </div>
      <div>
        <div v-for="(topic, index) in $store.state.writeAbles" :key="index">
          <RecommendBox :question="topic" @handleDelete="handleDelete(index)"/>
        </div>
      </div>
    </div>
    <FinishButton @click="handleFinish"/>
  </div>
</template>

<script>
// import CloseButton from '@/components/CloseButton.vue'
import RecommendBox from '@/components/Recommend/RecommendBox.vue'
import FinishButton from '@/components/FinishButton.vue'

  export default {
    methods: {
      handleFinish() {
        // setBook에서 현재 글감들을 쓰고 있는 책에 저장해야 함
        this.$store.commit('setBook')
        this.$router.push('/editor')
      },
      handleDelete(index) {
        this.$store.state.writeAbles[index] = ''
      },
    },
    components: {
      // CloseButton,
      RecommendBox,
      FinishButton,
    },

  }
</script>

<style scoped>
.center {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>