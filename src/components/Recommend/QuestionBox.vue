<template>
  <div>
    <div class="box">
      <div>    
        <h3>{{ question }}</h3>
      </div>
      <div class="submit-form">
        <form @submit.prevent="handleAnswer">
          <input v-if="enter" v-model="answer" type="text" placeholder="입력하기">
          <button v-if="enter" type="submit">제출</button>
        </form>
        <button v-if="regen" @click="$emit('handleRegen')">재생성</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['question', 'enter', 'regen'],
    emits: ['submit', 'handleRegen'],
    data() {
      return {
        answer: '',
        use: true
      }
    },
    methods: {
      handleAnswer() {
        this.$emit('submit', this.answer)
        this.answer = ''
      },
    }
  }
</script>

<style scoped>
.box {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.submit-form {
  display: flex;
  justify-content: space-between;
}
</style>