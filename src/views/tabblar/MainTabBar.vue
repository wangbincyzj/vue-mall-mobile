<template>
    <TabBar class="mainTabBar" active-color="blue">
        <TabBarItem path="/home">
            <img slot="item-icon" src="@/assets/img/tabbar/home.svg" alt="">
            <img slot="item-icon-active" src="@/assets/img/tabbar/home_active.svg" alt="">
            <div slot="item-text">首页</div>
        </TabBarItem>
        <TabBarItem path="/category">
            <img slot="item-icon" src="@/assets/img/tabbar/category.svg" alt="">
            <img slot="item-icon-active" src="@/assets/img/tabbar/category_active.svg" alt="">
            <div slot="item-text">分类</div>
        </TabBarItem>
        <TabBarItem path="/cart">
            <img slot="item-icon" src="@/assets/img/tabbar/cart.svg" alt="">
            <img slot="item-icon-active" src="@/assets/img/tabbar/cart_active.svg" alt="">
            <div slot="item-text">购物车</div>
        </TabBarItem>
        <TabBarItem path="/profile">
            <img slot="item-icon" src="@/assets/img/tabbar/profile.svg" alt="">
            <img slot="item-icon-active" src="@/assets/img/tabbar/profile_active.svg" alt="">
            <div slot="item-text">我的</div>
        </TabBarItem>
    </TabBar>
</template>

<script>
    import TabBar from "@/components/tabbar/TabBar";
    import TabBarItem from "@/components/tabbar/TabBarItem";
    export default {
        name: "MainTabBar",
        components: {TabBar, TabBarItem}
    }
</script>

<style scoped lang="scss">
    .mainTabBar{
        z-index: 10;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }
</style>
