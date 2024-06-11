<template>
  <TopBanner/>
  <RouterView/>
</template>

<script>
import TopBanner from '@/components/TopBanner.vue'
  
  export default {
    components: {
      TopBanner
    },
  }
</script>

<style scoped>

</style>