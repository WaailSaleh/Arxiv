<template>
 <nav class="navbar" style="background-color: red" role="navigation" aria-label="main navigation">
  <div class="container">
  <div class="navbar-brand">
    <a class="navbar-item" href="https://bulma.io">
      <p style="  padding:10px ;  color: white"> <strong> ArXiv </strong> </p>
    </a>

       <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" @click="isOpen = !isOpen" v-bind:class="{'is-active': isOpen}">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>
        <div class="navbar-menu" v-bind:class="{'is-active': isOpen}">
    <div class="navbar-start">
      <a class="navbar-item">
        Home
      </a>

      <a class="navbar-item">
        Page 2
      </a>

      
      </div>
    </div>

  </div>
    
  </div>
</nav>
  </template>

<script>
export default {
  name: 'Main',
  props: {
    msg: String
  },
  data: function() {
    return {
    isOpen : false
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>
