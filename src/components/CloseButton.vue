<template>
  <div class="button-container">
    <button class="close-button" @click="handleClose">X</button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClose() {
      this.$router.push('/editor') // Navigate to editor page  
    }
  }
}
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: flex-end;
  top: 10px; /* Adjust as needed */
  right: -100px; /* Adjust as needed */
}

.back-button {
  background-color: gray;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
