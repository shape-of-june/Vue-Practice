<template>
  <div class="sidebar">
    <div v-for="(topic, index) in $store.state.bookContent" :key="index">
      <EditorTopic :topic="$store.state.bookContent[index]"/>
    </div>
    <div class="box">
      <h6>+ 목차 추가</h6>
    </div>
  </div>
</template>

<script>
import EditorTopic from '@/components/Editor/EditorTopic.vue';

export default {
  components: {
    EditorTopic,
  },
};
</script>

<style scoped>
.layout {
  display: flex;
}

.sidebar {
  width: 125px; /* Fixed width */
  background-color: #f2f2f2; /* Set your desired background color */
  height: 100vh;
  flex-shrink: 0; /* Prevent shrinking */
}

.sidebar-item {
  margin-bottom: 15px;
  background-color: #f5f5f5; /* Set your desired background color */
}

.sidebar-item h3 {
  margin: 0;
  font-size: 12px; /* Adjust the font size as needed */
  color: #333; /* Set your desired text color */
  cursor: pointer; /* Optional: add cursor pointer */
}
</style>
