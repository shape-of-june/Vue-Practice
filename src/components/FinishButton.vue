<template>
  <div class="button-container">
    <button class="finish-button">완료하기</button>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.button-container {
  display: flex;
  justify-content: flex-end;
  top: 10px; /* Adjust as needed */
  right: -100px; /* Adjust as needed */
}

.finish-button {
  background-color: gray;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>
