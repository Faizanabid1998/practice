const app=Vue.createApp({
    data(){
        return{
          //  detail:false,
            friends:[{
                id:'Manuel',
                name:'Manuel Lorenz',
                phone:'01234 5678 991',
                email:'manuel@localhost.com',
            },
            {
                id:'Manuel',
                name:'Manuel Lorenz',
                phone:'01234 5678 991',
                email:'manuel@localhost.com',
            },
        ]
        };
    },
    // methods:{
    //     toggleShowDetail(){
    //                     this.detail = !this.detail
    //     }
    // }
});

app.component('friend-contact', {
    template:`
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleShowDetail()">{{detail? 'Hide' :'Show'}}Details</button>
    <ul v-if="detail">
      <li><strong>Phone:</strong> {{friend.phone}} </li>
      <li><strong>Email:</strong> {{friend.email}}</li>
    </ul>
  </li>
  `,
  data(){
    return{
            detail:false,
            friend:{
                id:'Manuel',
                name:'Manuel Lorenz',
                phone:'01234 5678 991',
                email:'manuel@localhost.com',
            }

    };
  },
  methods:{
    toggleShowDetail(){
        this.detail = !this.detail
}
  }
});
app.mount('#app')