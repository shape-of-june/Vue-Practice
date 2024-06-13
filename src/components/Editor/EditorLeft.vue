<template>
  <div class="sidebar">
    <div v-if="$store.state.answer3List.every(writing => writing == '')">
      <hr>
      <div class="sidebar-item">
        <h3>제목없음</h3>
      </div>
      <div class="sidebar-item">
        <h3>+ 목차추가</h3>
      </div>
    </div>
    <div v-else>
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
</template>

<script>
import RecommendBox from '@/components/Recommend/RecommendBox.vue'

export default {
  components: {
    RecommendBox
  },
}
</script>

<style scoped>
.sidebar {
  width: 250px; /* adjust the width as needed */
  background-color: #f2f2f2; /* set your desired background color */
  height: 100vh;
}

.sidebar-item {
  margin-bottom: 15px;
  background-color: #f5f5f5; /* set your desired background color */
}

.sidebar-item h3 {
  margin: 0;
  font-size: 12px; /* adjust the font size as needed */
  color: #333; /* set your desired text color */
  cursor: pointer; /* optional: add cursor pointer */
}
</style>