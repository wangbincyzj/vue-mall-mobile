<template>
  <div class="item">
    <div class="img">
      <img v-lazy="itemInfo.show.img" alt="">
    </div>
    <h3>{{itemInfo.title}}</h3>
    <p>¥{{itemInfo.price}} <i/>{{itemInfo.cfav}}</p>
  </div>
</template>

<script>
  export default {
    name: "GoodsListItem",
    props:["itemInfo"],
  }
</script>

<style scoped lang="scss">
  .item{
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    img{
      // 320 * 480
      vertical-align: bottom;
      max-width: 100%;
      margin-bottom: 2px;
    }
    h3{
      font-weight: 400;
      width: 100%;
      font-size: .14rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    p{
      line-height: .14rem;
      font-size: .14rem;
      i{
        vertical-align: bottom;
        display: inline-block;
        font-style: normal;
        width: .14rem;
        height: .14rem;
        background: url("~@/assets/img/detail/detail_bottom.png");
        background-size: .14rem;
      }
    }
  }
</style>
