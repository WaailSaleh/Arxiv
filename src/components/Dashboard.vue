<template>
	<div>
		<nav style="margin-left: 10%; margin-top: 2%; margin-right: 10%" class="level">
  <!-- Left side -->
  <div class="level-left">
   
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" v-model="search" placeholder="Find a post">
        </p>
        <p class="control">
          <button @click="searchtext()" class="button">
            Search
          </button>
        </p>
      </div>
    </div>
  </div>

  <!-- Right side -->
  <div class="level-right">
   <div class="field">

  <div class="control">
    <div class="select level-item  is-danger">
      <select @change="onSelect()" v-model="selected">
        <option v-for="topic in topics">{{topic}}</option>
        
      </select>

    </div>

  </div>
</div>
  </div>
</nav>

<Articles></Articles>
	</div>
</template>

<script>

	 export default {
      name: 'nav-tabs-table',
      created() {
      	this.$store.dispatch('getArticles');
      	
       },

  data () {
    return {
      search:"",
      selected: "machine learning",
     topics: [ "machine learning", "data science","psychiatry","therapy"]
    }
  },
  methods: {
    onSelect: function () {
     this.$store.commit('changeSearchTerm', this.selected);
     this.$store.dispatch('getArticles');
    },
    searchtext:function() {
      this.$store.commit('changeSearchTerm', this.search);
      this.$store.dispatch('getArticles');
    }
  }
}
</script>
<style>
	
</style>