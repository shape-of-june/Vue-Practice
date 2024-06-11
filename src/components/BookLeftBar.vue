<template>
  <div class="sidebar">
    <hr>
    <div class="sidebar-item">
      <h3>HOME</h3>
    </div>
    <div class="sidebar-item">
      <h3>내 서재</h3>
    </div>
    <div class="sidebar-item">
      <h3>아이디어 보관함</h3>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style scoped>
.sidebar {
  width: 125px; /* adjust the width as needed */
  background-color: #f2f2f2; /* set your desired background color */
  height: 100vh;
}

.sidebar-item {
  margin-bottom: 15px;
  background-color: #f5f5f5; /* set your desired background color */
}

.sidebar-item h3 {
  margin: 0;
  font-size: 18px; /* adjust the font size as needed */
  color: #333; /* set your desired text color */
  cursor: pointer; /* optional: add cursor pointer */
}
</style>