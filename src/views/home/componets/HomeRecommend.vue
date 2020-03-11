<template>
  <div class="homeRecommend">
    <div v-for="item in recommendData.list">
      <a :href="item.link" target="_blank">
        <img :src="item.image" alt="">
        <p>{{item.title}}</p>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "HomeRecommend",
    props: ["recommendData"],
  }
</script>

<style scoped lang="scss">
  .homeRecommend{
    display: flex;
    text-align: center;
    > div{
      flex: 1;
      padding: .1rem;
      img{
        width: 100%;
        margin-bottom: .1rem;
      }
    }
  }
</style>
