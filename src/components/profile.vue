<template>
    <div>
        
        <mt-cell v-for="(i, index) in items" v-bind:key="index" @click.native="cell_click(this, index)" :title="i.name" value="" :label="i.addr">
            <!-- <button @click="button_click(index)">删除</button> -->
        </mt-cell>
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
            items:[]
        }
    },
    methods:{
        get_items(){
            this.axios({
                url: '/static/json/shanghai_university.json',
                method: 'get',
            }).then( (response) => {
                if(response.data.resultcode == '200'){
                    this.items = response.data.result.list;
                }
            })
        },
        cell_click(event, index){
            console.log(event);
            // console.log(event.target);
            console.log(index);
            // this.$messagebox.alert( , 'title');
        },
        button_click(index){
            console.log(index);
        }
    },
    computed:{

    },
    watch:{

    },
    created () {  
        this.get_items();
    },
    mounted () {  

    }
}
</script>

<style lang="scss" scoped>

</style>
