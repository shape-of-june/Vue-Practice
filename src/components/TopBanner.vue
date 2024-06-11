<template>
  <div id="banner">
    <div class="button" style="background-color: #808080" @click="$emit('titleClicked')">
      <h3>{{ appTitle }}</h3>
    </div>
    <div class="right-group" v-if=!loginDone>
      <div class="button" style="background-color: white" @click="$emit('explainClicked')">
        <h5>서비스 소개</h5>
      </div>
      <StartFree @startFree="$emit('startFree')"/>
    </div>
    <div class="right-group" v-else>
      <div class="button" style="background-color: white" @click="$emit('explainClicked')">
        <h5>환영합니다</h5>
      </div>
      <button @click="$emit('logOut')">로그아웃</button>
    </div>
  </div>
  <hr>
</template>

<script>
import StartFree from './StartFree.vue'

  export default {
    props: ['appTitle', 'loginDone'],
    emits: ['titleClicked', 'explainClicked', 'startFree', 'logOut'],
    components: {
      StartFree,
    },
  }
</script>

<style scoped>
#banner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 48px;
  padding: 0 20px; /* Optional: Add padding to give some space */
  background-color: white;
}

.right-group {
  display: flex;
  gap: 20px; /* Adjust the gap as needed */
}
.button {
  padding: 5px 10px; /* Add padding for better appearance */
  display: flex;
  align-items: center;
  border-radius: 4px; /* Optional: Add border radius for rounded corners */
}

h3, h5 {
  margin: 0; /* Remove default margin */
}

</style>
