<template>
  <div class="horizontal">
    <EditorLeft/>
    <EditorCenter/>
    <EditorRight/>
  </div>
</template>

<script>
import EditorLeft from '@/components/Editor/EditorLeft.vue'
import EditorCenter from '@/components/Editor/EditorCenter.vue'
import EditorRight from '@/components/Editor/EditorRight.vue'

  export default {
    components: {
      EditorLeft,
      EditorCenter,
      EditorRight,
    },
  }
</script>

<style scoped>
.horizontal {
  display: flex;
}

</style>