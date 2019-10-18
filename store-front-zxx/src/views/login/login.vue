<template>
    <div id="zxx">
        <p class="zxx-dp">ZXX的8号店铺</p>
        <p>今日幸运数字 : <span class="lunck-num">{{ luckNum }}</span></p>



    </div>
</template>

<script>
    import rond from "@/utils/common"
    export default {
        name: "login",
        data () {
            return {
                luckNum : 8
            }
        },
        created() {
            this.luckNum = rond.rondomNum();
        },
    }
</script>

<style lang="stylus" scoped>
    #zxx 
        width 100%
        height 100%
        text-align center

        .zxx-dp
            color red 

        .lunck-num
            color green
            font-size 24px
</style>