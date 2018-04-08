<template>
    <div>
        <mt-header title="XYZ" fixed>
            <router-link to="/" slot="left">
                <mt-button icon="back">返回</mt-button>
            </router-link>
            <router-link to="/" slot="right">
                <mt-button icon="more">更多</mt-button>
            </router-link>
        </mt-header>
        <br><br>
        <router-view></router-view>
        <br><br>
        <mt-tabbar v-model="tabbar_active" fixed>
            <mt-tab-item id="首页">首页</mt-tab-item>
            <mt-tab-item id="头条">头条</mt-tab-item>
            <mt-tab-item id="购物车">购物车</mt-tab-item>
            <mt-tab-item id="消息">消息</mt-tab-item>
            <mt-tab-item id="我的">我的</mt-tab-item>
        </mt-tabbar>
    </div>
</template>


<script>

export default {
    props:{

    },
    components:{

    },
    data(){
        return{
            tabbar_active : '首页'
        }
    },
    methods:{

    },
    computed:{
    },
    watch:{
        tabbar_active: function (){
            switch(this.tabbar_active){
                case '首页': this.$router.push('/home') ;break;
                case '头条': this.$router.push('/home/news') ;break;
                case '购物车': this.$router.push('/home/cart') ;break;
                case '消息': this.$router.push('/home/profile') ;break;
                case '我的': this.$router.push('/home/user') ;break;
                default: ;break;
            }
            // this.$router.push('/');
        }
    }


}
</script>

<style lang="scss" scoped>

</style>
