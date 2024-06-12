<template>
  <div class="button-container">
    <button class="back-button" @click="handleBack">돌아가기</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleBack() {
      this.$router.go(-1); // Navigate back to the previous page
    }
  }
}
</script>

<style scoped>
.button-container {
  position: absolute; /* Position relative to the nearest positioned ancestor */
  bottom: 10px; /* Distance from the bottom */
  right: 10px; /* Distance from the right */
  display: flex;
  justify-content: flex-end;
}

.back-button {
  background-color: gray;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
