<template>
  <div>
    <div ref="editor"></div>
  </div>
</template>

<script>
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';

export default {
  name: 'EditorComponent',
  mounted() {
    this.editor = new EditorJS({
      holder: this.$refs.editor,  // Reference to the div where EditorJS will be initialized
      tools: {
        header: {
          class: Header,
          // inlineToolbar: ['link'],
          // shortcut: 'shift+3', 단축기 /1 이거로 못 바꾸나?
        },
        list: {
          class: List,
          inlineToolbar: true,  // 리스트의 항목별 편집 버튼 표시
        },
      },
      data: {
        blocks: [
          {
            type: 'header',
            data: {
              text: this.$store.state.bookName==''?'제목 정하기...':this.$store.state.bookName,
              level: 2,
            },
          },
          {
            type: 'paragraph',
            data: {
              text: this.$store.state.bookName==''?'':this.$store.state.writeAbles[0],
            },
          },
        ],
      },
    });
  },
  beforeUnmount() {
    if (this.editor) {
      this.editor.destroy();
    }
  },
};
</script>

<style scoped>
/* You can add custom styles for the editor here */
</style>
