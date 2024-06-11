<template>
  <MainBanner @startFree="$emit('startFree')" :bannerTitle="bannerTitle1"/>
  <ServiceExplain :bannerTitle="bannerTitle2"/>
  <ServiceExplain :bannerTitle="bannerTitle3"/>
  <ServiceExplain :bannerTitle="bannerTitle4"/>
  <MainBanner @startFree="$emit('startFree')" :bannerTitle="bannerTitle5"/>
</template>

<script>
import MainBanner from '../components/MainBanner.vue'
import ServiceExplain from '../components/ServiceExplain.vue'
  
  export default {
    components: {
      MainBanner,
      ServiceExplain
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