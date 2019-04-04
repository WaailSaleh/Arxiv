<template>
	<div style="margin-left: 15%; margin-top: 5%; margin-right: 15%">
	<div class="tile is-ancestor is-vertical">
 
	  <div class="tile is-parent">
	    <article class="tile is-child notification is-success">
	      <div class="content">
	      <p class="subtitle">{{article.title._text}}</p>
	        <p class="subtitle">
	        	<div class="tags -are-medium">
	        	<div v-if="Array.isArray(article.author)" v-for="author in article.author">
	        		 <a style="text-decoration: none; "  @click="inspect(author.name._text)"> 
	        		 		<span class="tag is-primary">{{author.name._text}} </span>
	        		 </a>
	        	</div>
	        	<div v-else>
	        		<span class="tag is-primary"  @click="inspect(author._text)" >{{author._text}}</span>
	        	</div>
	        </div>
	        </p>
	        <div class="content">
	         
	          {{article.summary._text}}
	        </div>
	      </div>
	    </article>
	  </div>
	</div>

</div>
</template>
<script>
	export default{
		data() {
			return {

			}
		},	
		methods:{
			inspect(author){
				this.$store.commit('viewAuthor',author);
			       this.$router.push({ path: 'author' })
			}
		},
		 computed: {
		
   
    article: function () {
      
      return this.$store.state.article_inspect
    }

	}	
	}
</script>