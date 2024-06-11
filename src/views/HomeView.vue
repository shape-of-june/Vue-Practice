<template>
  <StartBanner :bannerTitle="bannerTitle1"/>
  <FunctionBanner :bannerTitle="bannerTitle2"/>
  <FunctionBanner :bannerTitle="bannerTitle3"/>
  <FunctionBanner :bannerTitle="bannerTitle4"/>
  <StartBanner :bannerTitle="bannerTitle5"/>
</template>

<script>
import StartBanner from '@/components/StartBanner.vue'
import FunctionBanner from '@/components/FunctionBanner.vue'
  
  export default {
    components: {
      StartBanner,
      FunctionBanner
    },
    data() {
      return {
        bannerTitle1: '에세이 집필을 더 쉽게',
        bannerTitle2: '서비스 사용 방법',
        bannerTitle3: '주제 선정 기능',
        bannerTitle4: '퇴고 기능',
        bannerTitle5: '지금 바로 시작하세요',
      }
    },
  }
</script>

<style scoped>

</style>