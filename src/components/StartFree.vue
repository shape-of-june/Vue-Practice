<template>
  <div>
    <div class="box blue" @click="handleStart">
      <h5 style="color: white">무료로 시작하기</h5>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      handleStart() {
        if (this.$store.state.isLoggedIn) {
          this.$router.push('/book')
        } else {
          this.$router.push('/login')
        }
      },
    }
  }
</script>

<style scoped>
.box {
  padding: 5px 10px; /* Add padding for better appearance */
  display: flex;
  align-items: end;
  border-radius: 4px; /* Optional: Add border radius for rounded corners */
}
.blue {
  background-color: blue;
}
h5 {
  margin: 0; /* Remove default margin */
}

</style>