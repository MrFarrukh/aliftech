<template>
  <div id="app">
     <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
      <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">EMPLOYEE</a>
    </nav>
    <div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <router-link class="nav-link active" to="/">Dashbord</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/employee">Employee</router-link> 
              </li>
              <li class="nav-item">
                <router-link class="nav-link active" to="/workers">Workers</router-link>
              </li>
            </ul>
          </div>
        </nav>
        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"><router-view/>
        </main>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data(){
    return{
      
    }
  },
  computed:{
    works(){
            return this.$store.getters.getAllWorker
    }
  },
  created(){
      this.$store.dispatch('works')
  }
}

</script>

<style lang="scss" scoped>
  .bg-light {
    background-color: #f8f9fa!important;
    min-height: 100vh;
    position: fixed;
  }
</style>
