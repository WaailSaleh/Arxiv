<template>
	<div>
		<nav style="margin-left: 10%; margin-top: 2%; margin-right: 10%" class="level">
  <!-- Left side -->
  <div class="level-left">
   
    <div class="level-item">
      <div class="field has-addons">
        <p class="control">
          <input class="input" type="text" placeholder="Find a post">
        </p>
        <p class="control">
          <button class="button">
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
      <select>
        <option>Select dropdown</option>
        <option>With options</option>
      </select>
    </div>
  </div>
</div>
  </div>
</nav>
	</div>
</template>

<script>
	 export default {
      name: 'nav-tabs-table',
      created() {
      	this.$store.dispatch('getArticles');
      	console.log('action commited');
       },

  data () {
    return {
      selected: [],
      Articles: [
        {
          name: 'Sign contract for "What are conference organizers afraid of?"'
        },
        {
          name: 'Lines From Great Russian Literature? Or E-mails From My Boss?'
        },
        {
          name: 'Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit'
        }
      ]
    }
  },
  methods: {
    onSelect: function (items) {
      this.selected = items
    }
  }
}
</script>
<style>
	
</style>