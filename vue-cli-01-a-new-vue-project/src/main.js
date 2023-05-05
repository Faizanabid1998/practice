import { createApp } from 'vue';

// import { createApp } from 'vue';: This line imports the createApp 
//function from the Vue.js library.

import App from './App.vue';

// import App from './App.vue';: This line imports the 
// App component from the App.vue file, which is the root component of the Vue.js application.

import FriendContact from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

// import FriendContact from './components/FriendContact.vue';: 
//This line imports the FriendContact component from the FriendContact.vue file, which is a child component used in the application.


const app = createApp(App);
// const app = createApp(App);: This line creates a new Vue.js 
//application instance using the createApp function and passing in the App component as the root component.


app.component('friend-contact', FriendContact);
app.component('new-friend',NewFriend)

// app.component('friend-contact', FriendContact);: 
//This line registers the FriendContact component globally in the Vue.js application instance, which makes it available for use in other components.


app.mount('#app');

// app.mount('#app');: This line mounts the Vue.js 
//application instance to the HTML element with the ID of app. This means that the Vue.js application will be rendered inside the HTML element with the ID of app.



// This is a code snippet written in JavaScript that uses Vue.js, a popular
// JavaScript framework for building user interfaces. Here's what each line of code does:






