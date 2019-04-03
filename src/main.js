//vue and javascript stuff		
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios';
//css
import 'bulma/css/bulma.css';

//components
import Main from './components/Main.vue';
import Dashboard from './components/Dashboard.vue'


Vue.use(Vuex)
 let routes = [
  {
  	name: 'Main',
  	path: '/nav',
  	component: Main

  },
  {
	name: 'Home',
  	path: '',
  	component:Dashboard
  }
];

const router = new VueRouter({ routes })



const store = new Vuex.Store({
    state: {
        count: 0,
        articles:'hi'
    },
    mutations:{
            saveArticles(state,articles){
             state.articles = articles;
 			}
    },
    actions: {
         getArticles(context){
         	axios.get(`http://export.arxiv.org/api/query?search_query=all:electron&start=0&max_results=1`)
    .then(response => {
     
      context.commit('saveArticles',response)
    })
  		}
    }
});



Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
