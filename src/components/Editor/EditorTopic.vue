<template>
  <div :class="{'current-view':currentView}">
    <div class="box">
      <h6>{{ topic }}</h6>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['topic','currentView'],
  }
</script>

<style scoped>
.current-view {
  display: none;
}
</style>