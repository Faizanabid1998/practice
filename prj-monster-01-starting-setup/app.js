    function getRandomValue(min,max){
        return Math.floor (Math.random() *(max-min)) + min; 
    }

const app=Vue.createApp({
    data(){
        return {
            playerHealth:100,
            monsterHealth:100,
            currentRound:0,
            winner:null,
            logMessages:[],
           
            button:true,
        }
    },
    computed:{
   
        monsterBarStyle(){
            if (this.monsterHealth<0){
                return {width:'0%'}
            }
            return {width: this.monsterHealth + '%' };
        },
        playerBarStyle(){
            if (this.playerHealth<0){
                return {width:'0%'}
            }
            return {width: this.playerHealth + '%' };
        },
        currentRoundValue(){
                   
                        return  this.currentRound % 3 !== 0
        },
   
    },
    watch:{
        playerHealth(value){
            if (value<=0 && this.monsterHealth<=0){
                this.winner='draw'
            }
            else if (value<=0 ){
                this.winner='monster'
            }
        },
        monsterHealth(value){
            if (value<=0 && this.playerHealth<=0){
                this.winner='draw'
            }
            else if (value<=0 ){
                this.winner='player'
            }
        },
        currentRound(value){
            if(value % 3 === 0){
                this.button = true;
            }
        },
        // button(value) {
        //     if (value === true) {
        //       this.currentRound = 0;
        //     }
        //   }
    },
    methods:{
        newGame(){
            this.playerHealth=100,
            this.monsterHealth=100,
            this.currentRound=0,
            this.winner=null,
            logMessages=[]
        },
            attackMonster(){
          
                if
                (this.button===false){
                this.currentRound=this.currentRound+1;
                
            }
            // if(this.currentRound%3==0){
            //     this.button===true;
            // }
                // else {
                //     this.currentRound++;
                // }
                const attackValue= getRandomValue(5,12)
                this.monsterHealth-=attackValue;
                this.addLogMessage('player', 'attack',attackValue)
                this.attackPlayer();
            },

            attackPlayer(){
                const attackValue= getRandomValue(8,15)
                this.playerHealth-=attackValue;
                this.addLogMessage('monster', 'attack',attackValue)

            },
            specialAttackMonster(){
                this.button=false;
                this.currentRound++;
                const attackValue= getRandomValue(10,25)
                this.monsterHealth-=attackValue;
                this.addLogMessage('player', 'attack',attackValue)
                this.attackPlayer();
                
              
            },
            healPlayer(){
                if
                (this.button===false){
                this.currentRound=this.currentRound+1;
                console.log("helo")
            }
                    // this.currentRound++;
                const healValue=getRandomValue(8,20);
                
                if(this.playerHealth+healValue >100 ){
                    this.playerHealth=100;
                }
                else {
                this.playerHealth+=healValue;
            } 
            this.addLogMessage('player', 'heal',healValue)
                this.attackPlayer();
            },
            surrender(){
                this.winner='monster'
            },
            addLogMessage(who,what,value){
                this.logMessages.unshift({
                    actionBy:who,
                    actionType:what,
                    actionValue:value
                });
            }
 
    }

});
app.mount('#game')