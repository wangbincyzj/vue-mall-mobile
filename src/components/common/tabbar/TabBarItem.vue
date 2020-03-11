<template>
    <div class="tab-bar-item" @click="itemClick">

        <slot v-if="active" name="item-icon-active"/>

        <slot v-else name="item-icon"/>

        <div class="item-text" :style="styleObj">
            <slot name="item-text"/>
        </div>

    </div>
</template>

<script>
    export default {
        name: "TabBarItem",
        props: {
            path: {
                type: String,
                default: "/home"
            }
        },
        computed: {
            active() {
                return this.$route.path.includes(this.path)
            },
            styleObj() {
                return this.active && {color: this.$parent.activeColor}
            }
        },
        methods: {
            itemClick() {
                this.$router.push(this.path)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tab-bar-item {
        font-size: .14rem;
        flex: 1;
        text-align: center;
        display: flex;
        flex-flow: column nowrap;
        justify-content: space-around;

        img {
          margin-top: .02rem;
            height: .24rem
        }

        .active {
            color: #fe3a71;
        }

    }
</style>
