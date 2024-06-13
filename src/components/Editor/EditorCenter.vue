<template>
  <div class="editor">
    <div>
      <div v-if="bookName==''">
        <button @click="handleRecommend">글감 찾기</button>
        <button @click="handleNoRecommend">혼자 시작하기</button>
      </div>
    </div>
    <EditorComponent/>
    <RevisionButton/>
  </div>
</template>

<script>
import RevisionButton from '@/components/RevisionButton.vue'
import EditorComponent from '@/components/Editor/EditorComponent.vue'

export default {
  data() {
    return {
      bookName: this.$store.state.bookName,
      doRecommend: true,
    }
  },
  methods: {
    handleRecommend() {
      this.$router.push('/recommend1')
    },
    handleNoRecommend() {
      this.doRecommend = false;
    },
  },
  components: {
    RevisionButton,
    EditorComponent
  }
}
</script>

<style scoped>
.editor {
  height: 100vh;
  padding: 20px;
}

h3 {
  color: gray;
}
</style>