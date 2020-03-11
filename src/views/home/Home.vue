<template>
  <div id="home">

    <transition name="down">
      <NavBar class="homeNav" v-show="headFlag">
        <span slot="center">首页</span>
      </NavBar>
    </transition>


    <HomeSwiper v-if="multiData" :banner-data="multiData.data.banner"/>

    <HomeRecommend v-if="multiData" :recommend-data="multiData.data.recommend"/>

    <HomeFeatureView/>

    <TabControl :index.sync="index" :titles="['流行', '新款', '精选']"/>

    <GoodsList  :row="2" :items="goodsList" v-if="goods.pop.list.length>1"/>

    <div style="height: 1500px">
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
      <p>123</p>
    </div>

  </div>
</template>

<script>
  import {getHomeMultidata, getHomeGoods} from "@/api/home";
  import NavBar from "@/components/common/navbar/NavBar";
  import HomeSwiper from "@/views/home/componets/HomeSwiper";
  import HomeRecommend from "@/views/home/componets/HomeRecommend";
  import HomeFeatureView from "@/views/home/componets/HomeFeatureView";
  import TabControl from "@/components/current/tabControl/TabControl";
  import GoodsList from "@/components/current/goods/GoodsList";

  export default {
    name: "Home",
    components: {GoodsList, TabControl, HomeFeatureView, HomeRecommend, HomeSwiper, NavBar},
    data() {
      return {
        multiData: null,
        index: 0,
        headFlag: false,
        goods: {
          pop: {page: 1, list: []},
          new: {page: 1, list: []},
          sell: {page: 1, list: []}
        }
      }
    },
    created() {
      this.dataInject();
    },
    mounted() {
      this.headFlag = true
    },
    computed: {
      goodsList() {
        // todo 冗余
        switch (this.index) {
          case 0:
            return this.goods.pop.list;
          case 1:
            return this.goods.new.list;
          case 2:
            return this.goods.sell.list;
        }
      }
    },
    methods: {
      /*数据注入基于$route的api缓存*/
      dataInject() {
        if (this.$route.meta.cache["getHomeMultidata"]) {
          console.log("$route缓存调用");
          this.multiData = this.$route.meta.cache["getHomeMultidata"];
        } else {
          getHomeMultidata().then(ret => {
            console.log("api调用");
            this.multiData = ret;
            this.$route.meta.cache["getHomeMultidata"] = ret;
          })
        }
        if (this.$route.meta.cache["getHomeGoods"]) {
          console.log("getHomeGoods route缓存获取");
          this.goods = this.$route.meta.cache["getHomeGoods"]
        } else {
          this.getHomeGoods("pop");
          this.getHomeGoods("new");
          this.getHomeGoods("sell");
        }
      },

      getHomeGoods(type) {
        getHomeGoods(type, this.goods[type].page++).then(ret => {
          this.goods[type].list = this.goods[type].list.concat/*concat性能优于...展开1/3左右的效率*/(ret.data.list);
          this.$route.meta.cache["getHomeGoods"] = this.goods
        })
      },

      homeScroll(e){
        console.log(e)
      }
    },

  }
</script>

<style scoped lang="scss">
  #home {
    padding-top: .44rem;
    padding-bottom: .49rem;
  }

  .homeNav {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
  }
  .down-enter-active{
    transform: translateY(0);
    transition: .5s all;
  }
  .down-enter{
    transform: translateY(-100px);
  }
</style>
