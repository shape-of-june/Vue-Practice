<template>
  <div>
    <CloseButton/>
    <div class="center">
      <div>
        <h3>비서가 구성한 목차입니다. 자유롭게 수정 가능해요.</h3>
      </div>
      <div>
        <h2>{{ $store.state.answer2 }}</h2>
      </div>
      <div>
        <div v-for="(outerQ, outerIndex) in $store.state.answer3List" :key="outerIndex">
          <div v-if="outerQ!='' && outerQ !='-1'">
            <RecommendBox :question="$store.state.answer3List[outerIndex]"
              @handleDelete="handleDeleteOuter(outerIndex)"/>
            <div v-for="(innerQ, innerIndex) in $store.state.writeAbles[outerIndex]" :key="innerIndex">
              <div v-if="innerQ!=''">
                <RecommendBox :question="'(dot)' + innerQ" @handleDelete="handleDeleteInner(outerIndex, innerIndex)"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FinishButton @click="handleFinish"/>
    <BackButton/>
  </div>
</template>

<script>
import CloseButton from '@/components/CloseButton.vue'
import RecommendBox from '@/components/Recommend/RecommendBox.vue'
import BackButton from '@/components/BackButton.vue'
import FinishButton from '@/components/FinishButton.vue'

  export default {
    methods: {
      handleFinish() {
        this.$store.commit('setBook')
        this.$router.push('/editor')
      },
      handleDeleteOuter(outerIndex) {
        this.$store.state.answer3List[outerIndex] = ''
      },
      handleDeleteInner(outerIndex, innerIndex) {
        this.$store.state.writeAbles[outerIndex][innerIndex] = ''
      }
    },
    components: {
      CloseButton,
      RecommendBox,
      BackButton,
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