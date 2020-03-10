<template>
    <div id="profile">
        <label>
            用户名 <input type="text" v-model="username">
        </label>
        <div @click="login({username, age:18})">登录</div>
        <div @click="changeUsername">改变用户名</div>
        <hr>
        <label>
            年龄 <input type="text" v-model="age">
        </label>
        <div @click="setAge(age)">改变年龄</div>
    </div>
</template>

<script>
    import {mapActions, mapMutations} from "vuex"
    import {types} from "@/store/mutations";

    export default {
        name: "Profile",
        data() {
            return {
                username: "",
                age: 18
            }
        },
        methods:{
            ...mapActions(
                {login: "login"}
            ),
            ...mapMutations(
                {setAge: types.SET_USER_AGE}
            ),
            changeUsername(){
                this.$store.commit(types.SET_USER_NAME, this.username)
            }
        }
    }
</script>

<style scoped lang="scss">
    #profile{
        height: 100%;
        background-color: #6f98fe;
        color: white;
        padding-top: 30px;
    }
</style>
