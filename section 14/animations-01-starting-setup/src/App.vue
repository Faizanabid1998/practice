<template>
  <div class="container">
    <div class="block"></div>
    <button>Animate</button>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>
  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  
  <div class="container">
    <transition @before-enter="beforeEnter" @enter="enter"> 
    <p v-show="paraVisible">para visible sometimes</p>
    </transition>
    <button @click="togglePara"> Toggle Para</button>
  </div>

</template>  

<script>
export default {
  data() {
    return { dialogIsVisible: false, 
              paraVisible:false
        };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    togglePara(){
      this.paraVisible= !this.paraVisible;
    },
    beforeEnter(el){
              el.style.opacity=0
    },
    enter(el,done ){
            let round=1 ;
            const interval=setInterval(function(){
              el.style.opacity=round*0.1;
              round ++;

              if (round>10){
                clearInterval(interval)
                done();
            }
            },20)

    },
  },
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
/* .v-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}
.v-enter-active {
  transition: all 0.5s ease-out;
}
.v-enter-to{
  opacity:1;
  transform: translateY(0);
}

.v-leave-from{
  opacity: 1;
  transform: translateY(0);
}
.v-leave-active {
  transition: all 0.5s ease-in;
}
.v-leave-to{
  opacity: 0;
  transform: translateY(30px);
} */
</style>