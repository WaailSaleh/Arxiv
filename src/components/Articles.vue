<template>
	<div style="margin-left: 15%; margin-right: 15%">
	<div class="tile is-ancestor is-vertical">
  <div v-for="article in this.$store.state.articles" >
	  <div class="tile is-parent">
	    <article class="tile is-child notification is-success">
	      <div class="content">
	     
			  <a style="text-decoration: none; " 
			      @click="inspect(article)">
			         									<p class="subtitle">{{article.title._text}}</p> </a>
	       <!--  <p class="subtitle">
	        	<div class="tags -are-medium">
	        	<div v-if="Array.isArray(article.author)" v-for="author in article.author">
	        		<span class="tag is-primary">{{author.name._text}} </span>
	        	</div>
	        	<div v-else>
	        		<span class="tag is-primary">{{author._text}}</span>
	        	</div>
	        </div>
	        </p>
	        <div class="content">
	         
	          {{article.summary._text}}
	        </div> -->
	      </div>
	    </article>
	  </div>
	</div>
</div>
</div>
</template>
<script>
	export default{
		
		methods:{
			inspect(article){
				this.$store.commit('viewArticle',article);
			       this.$router.push({ path: 'article' })
			}
		}
	}
</script>