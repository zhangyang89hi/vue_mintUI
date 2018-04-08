import Vuex from 'vuex'
import Vue from 'vue'
import { setInterval } from 'timers';

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        account:{
            state:{
                username:'',
                sex:'',
                nation:'',
            },
            getters:{
                
            },
            mutations:{
                setAccount(state, account){
                    state.username = account.name;
                    state.sex = account.sex;
                    state.nation = account.nation;
                }
            },
            actions:{

            }
        },
        cart:{
            state:{
                nums:'',
                category:'',
                totalPrice:0
            },
            getters:{

            },
            mutations:{

            },
            actions:{

            }
        }
    },
    state:{
        count:0,
        tenCount:0,
    },
    getters:{
    
    },
    mutations:{
        increaseCount(state){
            state.count ++;
        },
        decreaseCount(state){
            state.count --;
        },
        setCount(state, value){
            state.count = value;
        },
        increaseTenCount(state){
            state.tenCount ++;
        }
    },
    actions:{
        increaseTenCount(contex){
            setTimeout(() => {
                contex.commit('increaseTenCount');
            }, 10000);
        }
    }
})