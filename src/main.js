import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false


var firebaseConfig = {
  apiKey: "AIzaSyCVdNyBp1WuStFk_LzNMVpf35x6B-vbNKo",
  authDomain: "dinosaurios-de-chile.firebaseapp.com",
  databaseURL: "https://dinosaurios-de-chile.firebaseio.com",
  projectId: "dinosaurios-de-chile",
  storageBucket: "dinosaurios-de-chile.appspot.com",
  messagingSenderId: "253576051597",
  appId: "1:253576051597:web:9e9c972355c748554a5bc4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
