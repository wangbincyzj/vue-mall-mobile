<template>
  <div id="app">

    <transition name="slide-right">
      <router-view class="routerView"/>
    </transition>

    <MainTabBar/>
  </div>
</template>

<script>
  import MainTabBar from "@/views/tabblar/MainTabBar";

  export default {
    components: {MainTabBar},
    created() {
      console.log(this.$router);
    },
  }
</script>

<style lang="scss">
  @import "assets/css/base.css";
  #app{
    height: 100%;
    overflow-x: hidden;
    position: relative;
  }

  .routerView {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  .slide-right-enter-active {
    transition: .3s all;
    transform: translateX(0);
  }

  .slide-right-leave-active {
    transition: .3s all;
    opacity: 1;
  }

  .slide-right-enter {
    transform: translateX(100%);
  }

  .slide-right-leave-to {
    opacity: 0;
  }
</style>

