 //vue and javascript stuff		
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import axios from 'axios';
import convert from 'xml-js'
import moment from 'moment'
import 'bulma/css/bulma.css';

//components
import Main from './components/Main.vue';
import Dashboard from './components/Dashboard.vue'
import Articles from './components/Articles.vue'
import Article from './components/Article.vue'
import Author from './components/Author.vue'

Vue.component('Articles', Articles)
Vue.component('Article', Article)
Vue.component('Author', Author)

Vue.use(Vuex)
 let routes = [
  {
  	name: 'Main',
  	path: '/nav',
  	component: Main

  },
  {
    name: 'Author',
    path: '/author',
    component: Author

  },
  {
    name: 'Article',
    path: '/article',
    component: Article

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
        articles:'',
        search_query : "machine learning",
        article_inspect:{},
        author:"",
    },
    getters: {

    },
    mutations:{
           
            saveArticles(state,articles){

             state.articles = articles;
 			},
            changeSearchTerm(state,term){
              state.search_query = term;
            },
            viewArticle(state,Article){
              state.article_inspect = Article;
            },
            viewAuthor(state,author){
              state.author = author;
            },
    },
    actions: {
         getArticles(context){
         

          //having a crazy hard time figuring out how to implement date based search, realized most of my front end work allowed me to create and have full control of the api and its endpoints and that i have been a spoiled child until now 
         	axios.get(`http://export.arxiv.org/api/query?search_query=all:"`+context.state.search_query+`"&start=0&max_results=100&sortBy=lastUpdatedDate&sortOrder=descending`)
    .then(response => {
        
     	 let x =convert.xml2js(response.data,{compact: true, spaces: 4}).feed.entry;
 		
      context.commit('saveArticles',x)
    })
  		},
      
      getMoreArticles(context,start){
         let temp=[];

          for(let i = 0; i <= start ; i++)
          axios.get(`http://export.arxiv.org/api/query?search_query=all:"`+context.state.search_query+`"&start=`+i+`00&max_results=100&sortBy=lastUpdatedDate&sortOrder=descending`)
    .then(response => {   
       temp.concat(convert.xml2js(response.data,{compact: true, spaces: 4}).feed.entry);
 });
      context.commit('saveArticles',temp)
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
