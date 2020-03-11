<template>
  <Swiper>
    <SwiperItem v-for="item in bannerData.list" :key="item.link">
      <img :src="item.image" alt="">
    </SwiperItem>
  </Swiper>
</template>

<script>
  import Swiper from "@/components/common/swiper/Swiper";
  import SwiperItem from "@/components/common/swiper/SwiperItem";
  export default {
    name: "HomeSwiper",
    props: ["bannerData"],
    components:{SwiperItem, Swiper}
  }
</script>

<style scoped>

</style>
