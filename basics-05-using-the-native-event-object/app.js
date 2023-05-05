const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
       lastName:'',
      // fullname:''
    };
  },

 computed:{
  fullname (){
    if(this.name===''){
      return '';
    }
    return this.name + ' '+ this.lastName;
  },
 },

  methods: {
    outputFullname(){
      if(this.name===''){
        return '';
      }
      return this.name + ' '+ "Abcd";
    },
    resetInput(){
      this.name='';
    },
    setName(event, ) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
