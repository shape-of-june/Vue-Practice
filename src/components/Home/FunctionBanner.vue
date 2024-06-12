<template>
  <div id="banner">
    <div class="box" >
      <h4>{{ bannerTitle }}</h4>
    </div>
    <div class="box gray" >
      <div>
        <h1>{{ bannerTitle }}</h1>
      </div>
      <div>
        <h1>설명 사진</h1>
      </div>
    </div>
  </div>
  <hr>
</template>

<script>

  export default {
    props: ['bannerTitle']
  }
</script>

<style scoped>
#banner {
  display: flex;
  flex-direction: column; /* Align items vertically */
  justify-content: center; /* Center items vertically */
  align-items: center; /* Center items horizontally */
  height: 150px; /* Adjust the height as needed */
  padding: 0 20px; /* Optional: Add padding to give some space */
  /* background-color: ivory; */
}

.box {
  padding: 5px 10px; /* Add padding for better appearance */
  display: flex;
  align-items: end;
  border-radius: 4px; /* Optional: Add border radius for rounded corners */
}

.gray {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f0f0f0;
}


h1, h4{
  margin: 0; /* Remove default margin */
}
</style>
