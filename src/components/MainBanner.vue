<template>
  <div id="banner">
    <div class="box" >
      <h4>{{ bannerTitle }}</h4>
    </div>
    <StartFree @startFree="$emit('startFree')"/>
  </div>
  <hr>
</template>

<script>
import StartFree from './StartFree.vue'

  export default {
    emits: ['startFree'],
    components: {
      StartFree
    },
    props: ['bannerTitle']
  }
</script>

<style scoped>
#banner {
  display: flex;
  flex-direction: column; /* Align items vertically */
  justify-content: center; /* Center items vertically */
  align-items: center; /* Center items horizontally */
  height: 100px; /* Adjust the height as needed */
  padding: 0 20px; /* Optional: Add padding to give some space */
  /* background-color: ivory; */
}

.box {
  padding: 5px 10px; /* Add padding for better appearance */
  display: flex;
  align-items: end;
  border-radius: 4px; /* Optional: Add border radius for rounded corners */
}

h4 {
  margin: 0; /* Remove default margin */
}

</style>
