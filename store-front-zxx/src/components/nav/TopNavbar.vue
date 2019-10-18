<template>
    <div v-if="menuShow">
        <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1"><router-link to="/">Home</router-link></el-menu-item>
            <el-submenu index="2">
                <template slot="title">ABOUT</template>
                <el-menu-item index="2-1"><router-link to="/">Home</router-link></el-menu-item>
                <el-menu-item index="2-2"><router-link to="/about">about</router-link></el-menu-item>
                <el-menu-item index="2-3">选项3</el-menu-item>
            </el-submenu>
            <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                menuShow: true,
                activeIndex: "1",
                activeIndex2: "1"
            };
        },
        methods: {
            handleSelect (key, keyPath) {
                console.log(key, keyPath);
            }
        },
        watch: {
            $route: {
                handler (n) {
                    let {meta} = n;
                    this.menuShow = meta.noHeader == false ?  false : true;
                },
                immediate:true //实时监听
            }
        },
    }
</script>

<style lang="stylus" scoped>

</style>