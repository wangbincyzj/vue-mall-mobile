<template>
  <div class="navBar">
    <div class="left">
      <slot name="left"/>
    </div>
    <div class="center">
      <slot name="center"/>
    </div>
    <div class="right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props:{
      bgc/*背景颜色*/:{
        default: "#ff8198",
        type: String
      },
      boxShadow/*阴影*/:{
        default: true,
        type: Boolean
      }
    },
    mounted() {
      this.$el.style.backgroundColor = this.bgc;
      this.$el.style.boxShadow = this.boxShadow && "0 1px 4px rgba(204, 204, 204, 0.46)"
    }
  }
</script>

<style scoped lang="scss">
  .navBar{
    color: white;
    width: 100%;
    display: flex;
    height: .44rem;
    line-height: .44rem;
    text-align: center;
    .left, .right{
      flex-basis: 20%;
    }
    .center{
      flex: 1;
      font-size: .16rem;
    }
  }
</style>
