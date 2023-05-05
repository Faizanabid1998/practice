import { createApp } from 'vue';
import {createStore} from 'vuex'

import App from './App.vue';

const store= createStore({
    state(){
     return{
         counter:0,
         userAuth:false
    };
    },
    mutations:{

        increment(state){
          
            state.counter=state.counter+2;
        },
        increase(state,payload){
                state.counter=state.counter+payload.value
        },
        setAuth(state,payload){
            state.userAuth=payload.isAuth;
        }
    }, 
    actions:{
            increment(context){
                setTimeout(function(){
                    context.commit('increment')
                },2000)
            },
            login(context){
                context.commit('setAuth',{isAuth:true})
            },
            logout(context){
                context.commit('setAuth',{isAuth:false})
            }
    },
    getters:{
            finalCounter(state){
                return state.counter
            },
            userAuthenticated(state){
                return state.userAuth;
            }
    }
});



const app = createApp(App);
app.use(store);
app.mount('#app');
