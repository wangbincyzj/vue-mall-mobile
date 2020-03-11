<template>
  <div class="tab-bar">
    <slot/>
  </div>
</template>

<script>
  export default {
    name: "TabBar",
    props: {
      activeColor: {
        type: String,
        default: "#f00"
      }
    },
  }
</script>

<style scoped lang="scss">
  .tab-bar {
    display: flex;
    height: .49rem;
    min-height: 49px;
    background-color: #eee;
  }
</style>
