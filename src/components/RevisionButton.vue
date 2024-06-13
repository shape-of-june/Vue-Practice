<template>
  <div class="button-container">
    <button class="revision-button">퇴고하기</button>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.button-container {
  position: relative; /* Make this container a positioning context */
  height: 80vh; /* Ensure the container takes up the full viewport height */
  width: 80vw; /* Ensure the container takes up the full viewport width */
}

.revision-button {
  background-color: gray;
  border: none;
  font-size: 20px;
  cursor: pointer;
  position: absolute;
  bottom: 30px; /* Adjust as needed */
  right: 30px; /* Adjust as needed */
}
</style>
