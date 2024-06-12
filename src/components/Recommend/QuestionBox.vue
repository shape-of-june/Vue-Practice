<template>
  <div :class="{'display-none':!use | question==''}">
    <div class="box">
      <div>    
        <h3>{{ question }}</h3>
      </div>
      <div class="submit-form">
        <form @submit.prevent="handleAnswer">
          <input v-if="enter" v-model="answer" type="text" placeholder="입력하기">
          <button v-if="enter" type="submit">제출</button>
        </form>
        <button v-if="regen" @click="handleRegen">재생성</button>
        <button v-if="notUse" @click="handleDelete">X</button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['question', 'enter', 'regen', 'notUse'],
    emits: ['submit', 'handleRegen', 'handleDelete'],
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
      handleRegen() {
        alert('리젠 기능 구현중입니다.')
        this.$emit('handleRegen')
      },
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
  flex-direction: column;
  align-items: center;
}

.submit-form {
  display: flex;
  justify-content: space-between;
}

.display-none {
  display: none;
}
</style>