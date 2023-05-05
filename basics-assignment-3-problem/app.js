const app=Vue.createApp({
data(){
    return {
    number:0,
    };
},
computed:{
    result(){
        if(this.number<37){
            return 'not there'
        }
        else if(this.number>37){
            return 'too much'
        }
        else if(this.number===37){
            return this.number
        }
    },
},
watch:{
        result(){
            const that=this;
            setTimeout(function(){
                that.number=0;
            },5000)
        },
},

methods:{
addNum(num){
this.number=this.number+num;
},
},


});
app.mount('#assignment');