const app=Vue.createApp({
    data(){
        return {
            inputClass:'',
            paraVisible:true,
            inputBackgroundColor:''
        };
    },
    computed:{
            paraClasses(){
                return{
                    user1: this.inputClass==='user1',
                    user2: this.inputClass==='user2',
                    visible:this.paraVisible,
                    hidden:!this.paraVisible,
                }
            }
    },
    methods:{
                toggleVisible(){
                    this.paraVisible=!this.paraVisible;
                }
    }

});
app.mount('#assignment')