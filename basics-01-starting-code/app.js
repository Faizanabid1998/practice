const app=Vue.createApp({
data (){
    return{
        courseGoalA:"Finish your courseA",
        // courseGoalB:"<h2>Finish your courseB</h2>",
        courseGoalB:"Finish your courseB",
        vueLink:"https://vuejs.org/"
    };
    },
    methods:{
        outputGoal (){
            const randomNumber=Math.random();
            if (randomNumber<0.5){
                return this.courseGoalA;
            }
            else{
                return this.courseGoalB;
            }
        }

    }
});

app.mount('#user-goal')