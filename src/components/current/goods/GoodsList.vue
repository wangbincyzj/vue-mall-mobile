<template>
  <div class="goods">
    <GoodsListItem :style="styleObj" class="item" v-for="item in $attrs.items" :itemInfo="item"/>
  </div>
</template>

<script>
  import GoodsListItem from "@/components/current/goods/GoodsListItem";

  export default {
    name: "GoodsList",
    props: {
      row/*每一行显示几个item*/:{
        type: Number,
        default: 2
      }
    },
    components: {GoodsListItem},
    computed:{
      styleObj() {
        return {
          width:  (1 / this.row * 100 - 3) + "%"
        }
      }
    },
    created() {

    }
  }
</script>

<style scoped lang="scss">
  .goods{
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    -webkit-justify-content: space-around;
    .item{
      /*width: 47%;*/
      margin-bottom: 5px;
    }
  }
</style>
