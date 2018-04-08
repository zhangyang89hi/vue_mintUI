<template>
    <div>
        <h3>news</h3>
        <ul >
            <li style="list-style:none;" v-for = 'n in news_data' v-bind:key=" n.uniquekey">
                <div>
                    <div class="title"> 
                        <a :href="n.url">{{n.title}}</a>
                    </div>
                    <div>
                        <img width="80px" height="60px" v-show="n.thumbnail_pic_s" :src=" n.thumbnail_pic_s" alt="">
                        <img width="80px" height="60px" v-show="n.thumbnail_pic_s02" :src=" n.thumbnail_pic_s02" alt="">
                        <img width="80px" height="60px" v-show="n.thumbnail_pic_s03" :src=" n.thumbnail_pic_s03" alt="">
                    </div>
                    <div>
                        <span>{{n.author_name}}</span>
                        <span>{{n.date}}</span>
                    </div>
                </div>
            </li>
        </ul>
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
            news_data: [],
            current_news: 'top',
            news_url: '/juhe/toutiao/index?key=683326d2193cb12c1df130bd0fd695da&'
        }
    },
    methods:{
        get_news_data(){
            this.axios({
                url: '/static/json/news.json',
                method: 'get'
            }).then( (response) => {
                if(response.data.result.stat == '1'){
                    this.news_data = response.data.result.data
                }
                else{
                    console.log('not get news');
                }
            })
        },
        get_news(){
            this.axios({
                url: this.news_url + 'type=' + this.current_news,
                method: 'get'
            }).then((response) => {
                if(response.data.result.stat == '1'){
                    this.news_data = response.data.result.data
                }
                else{
                    console.log('not get news');
                }
            })
        }
    },
    created:function(){
        // this.get_news_data();
        this.get_news();
    },
    mounted:function(){

    },
    updated:function(){

    },
    destroyed:function(){

    }


}
</script>

<style lang="scss" scoped>

</style>
