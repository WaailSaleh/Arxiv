<template>
	<div style="margin-left: 15%; margin-top: 5%; margin-right: 15%">
	<div class="tile is-ancestor is-vertical">
		<div class="tile is-parent">
	    <article class="tile is-child notification is-primary">
	      <div class="content">
			 <p class="title">{{author}}</p>
			</div>
			</article>
		</div>

  <div v-for="article in this.$store.state.articles" >
	  <div v-if="monthOld(article)" class="tile is-parent">
	    <article class="tile is-child notification is-success">
	      <div class="content">
	     
			  <a style="text-decoration: none; " 
			      @click="inspect(article)">
			       		<p class="subtitle">{{article.title._text}} :: {{printDate(article)}}
			       		</p> 
			   </a>
	      
	      </div>
	    </article>
	  </div>
	</div>
</div>
</div>
</template>

<script>
	import moment from 'moment'
	export default{


		created()
		{	
			
			this.$store.commit('changeSearchTerm',this.author);
				this.$store.dispatch('getArticles');
		},

		methods:
		{	
			printDate(x){
				x= this.getDate(x);
				//mm-dd-yyyy
				//return x.date.month+"-"+x.date.day+"-"+x.date.year
				return x.date;
			},
			//assumes all months have 30 days because i only want a mvp, in real case id use a lib for this
			//ignore that i got tired and used a lib cuz i kept thinking of edge cases
			monthOld(x)
			{	
				x = this.getDate(x)
				return moment(x.date,"MM-DD-YYYY").isBetween(moment().subtract(30,'days'), moment());
			},
			  getDate(x){
             
             	x.date = moment(x.published._text, moment.HTML5_FMT.DATE).format( "MM-DD-YYYY");
     
              return x;
             
            },
			inspect(article)
			{
				this.$store.commit('viewArticle',article);
			       this.$router.push({ path: 'article' })
			}
		},
	
		 computed: 
		 {
		 	 author: function () 
			    {			      
			      return this.$store.state.author
			   	},
			    article: function () 
			    {			      
			      return this.$store.state.article_inspect
			   	}

		}	
	}
</script>