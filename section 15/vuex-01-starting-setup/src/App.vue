<template>
  <base-container title="Vuex" v-if="isAuth">
    <the-counter> </the-counter>

    <button @click="addOne">Add1</button>
  </base-container>

    <base-container>
      <user-auth> </user-auth>
     </base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    UserAuth
  },
  methods:{
    addOne(){
      this.$store.dispatch('increment')
      // this.$store.commit('increase', {value:10})
    }
  },
   computed:{
        isAuth(){
            return    this.$store.getters.userAuthenticated
        }
    } 
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>