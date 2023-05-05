const app = Vue.createApp({
    data(){
        return{
            taskList:[],
            enteredTask:'',
            taskListVisible:true,
        };
    },
    computed:{
        listCaption(){ 
            return this.taskListVisible ? 'Hide' :'Show'     
    }
    },
    methods:{
        addTask(){
            this.taskList.push(this.enteredTask)
        },
        toggleTaskList(){
            this.taskListVisible = !this.taskListVisible
        }
    }
});
app.mount('#assignment')