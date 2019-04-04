//vue and javascript stuff		
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios';
import convert from 'xml-js'
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
        articles:''
    },
    mutations:{
            saveArticles(state,articles){
             state.articles = articles;
 			}
    },
    actions: {
         getArticles(context, search_query){
         	if(search_query == '' || search_query ==null)
         		search_query ="machine learning"
         	axios.get(`http://export.arxiv.org/api/query?search_query=all:"`+search_query+`"&start=0&max_results=100&sortBy=lastUpdatedDate&sortOrder=descending`)
    .then(response => {
     
     	 let x =convert.xml2js(response.data,{compact: true, spaces: 4}).feed.entry;
 		
      context.commit('saveArticles',x)
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
