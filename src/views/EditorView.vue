<template>
  <div class="horizontal">
    <EditorLeftBar/>
    <EditorComponent/>
  </div>
</template>

<script>
import EditorLeftBar from '@/components/EditorLeftBar.vue'
import EditorComponent from '@/components/EditorComponent.vue';

  export default {
    components: {
      EditorLeftBar,
      EditorComponent
    },
  }
</script>

<style scoped>
.horizontal {
  display: flex;
}

</style>