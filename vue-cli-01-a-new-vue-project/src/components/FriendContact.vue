
<template>
  <li>
    <h2>{{ name }} {{isFavourite ? '(Favourite)' :''}} </h2>
    <button @click="toggleDetails">{{ detailsAreVisible ? 'Hide' : 'Show'}} </button>
    <button @click="toggleFavourite"> toggle Favourite
</button>
    <ul v-if="detailsAreVisible">
      <li>
        <strong>Phone:</strong>
        {{ phoneNumber }}
      </li>
      <li>
        <strong>Email:</strong>
        {{ emailAddress }}
      </li>
    </ul>
    <button
    @click="DeleteFriend"
    >
    Delete</button>
  </li>
</template>

<script>
export default {
  // props:[
  //   'name',
  //   'phoneNumber',
  //   'emailAddress',
  //   'isFavourite',
  // ],
  props:{
    id:{
      type:String,
      required:true
    },
    name:{String,
    required:true
    },
    phoneNumber:String,
    emailAddress:String,
    isFavourite:{
    Boolean,
    required:false,
    default:false,
    },
},
emits:['toggle-favourite',
        'delete-friend'
],
  data() {
    return {
      detailsAreVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "0123 45678 90",
        email: "manuel@localhost.com",
      },
      // friendIsFavourite:this.isFavourite,
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavourite() {
    this.$emit('toggle-favourite',this.id)
    },
    DeleteFriend(){
      this.$emit('delete-friend',this.id)
    },

  }
};
</script>