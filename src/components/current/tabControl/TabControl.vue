<template>
  <div class="tabControl">
    <ul>
      <li
        :class="{active:index===activeIndex}"
        v-for="(item,index) in titles"
        @click="liClick(index)"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "TabControl",
    props:{
      titles:{
        type: Array,
        default() {
          return ["菜单1", "菜单2", "菜单3"]
        }
      },
      index:Number
    },
    data() {
      return {
        activeIndex: 0
      }
    },
    methods:{
      liClick(index){
        this.activeIndex = index;
        this.$emit("update:index", index)
      }
    }
  }
</script>

<style scoped lang="scss">
  .tabControl{
    z-index: 9;
    background: white;
    position: sticky;
    width: 100%;
    top: .44rem;
    ul{
      list-style: none;
      height: .4rem;
      line-height: .4rem;
      display: flex;
      text-align: center;
      width: 100%;
      li{
        flex-grow: 1;
        position: relative;
        &::after{
          content: "";
          position: absolute;
          height: .02rem;
          background-color: #ff5777;
          bottom: .02rem;
          left: 50%;
          transform: translateX(-50%);
          width: 0;
          transition: .2s all;
        }
        &.active{
          color: var(--color-tint);
          position: relative;
          &::after{
            width: 50%;
          }
        }
      }
    }
  }
</style>
