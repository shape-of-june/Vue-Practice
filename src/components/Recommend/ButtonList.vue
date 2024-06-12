<template>
  <div class="button-list">
    <button v-for="(item, index) in buttonList" :key="index"
            @click="$emit('buttonClicked',item)"> {{ item }}
    </button>
  </div>
</template>

<script>
  export default {
    props: ['buttonList'],
    emits: ['buttonClicked'],
  }
</script>

<style scoped>
.button-list {
  display: flex;
  flex-wrap: wrap; /* Allow buttons to wrap to the next row */
  justify-content: center; /* Center the buttons in each row */
  gap: 20px; /* Add space between buttons */
  margin-top: 20px;
}

.button-list button {
  margin: 5px; /* Add a small margin for spacing */
  width: 100px;
  height: 50px;
  border-radius: 20px;
}
</style>