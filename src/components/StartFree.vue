<template>
  <div>
    <div class="box blue" @click="$emit('startFree')">
      <h5 style="color: white">무료로 시작하기</h5>
    </div>
  </div>
</template>

<script>
  export default {
    emits: ['startFree'],
  }
</script>

<style scoped>
.box {
  padding: 5px 10px; /* Add padding for better appearance */
  display: flex;
  align-items: end;
  border-radius: 4px; /* Optional: Add border radius for rounded corners */
}
.blue {
  background-color: blue;
}
h5 {
  margin: 0; /* Remove default margin */
}

</style>