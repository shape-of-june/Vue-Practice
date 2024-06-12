<template>
  <div :class="{'display-none':!use || question==''}">
    <div class="box">
      <h3>{{ question }}</h3>
      <button @click="handleDelete">X</button>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['question'],
    emits: ['handleDelete'],
    data() {
      return {
        use: true
      }
    },
    methods: {
      handleDelete() {
        this.use = false
        this.$emit('handleDelete')
      }
    }
  }
</script>

<style scoped>
.box {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.display-none {
  display: none;
}
</style>