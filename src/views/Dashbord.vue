<template>
  <div class="home">
    <h1>Dashbord</h1>
    <div class="infos d-flex">
      <div class="card mt-15 col-3 bg-primary text-white text-center p-3">
        <blockquote class="blockquote mb-0">
          <h4>{{workerLength}}</h4>
          <footer class="blockquote-footer">
            <small>
             <cite title="Source Title"><h3>Employee</h3></cite>
            </small>
          </footer>
        </blockquote>
      </div>
      <div class="card m-15 col-3 bg-primary text-white text-center p-3">
        <blockquote class="blockquote mb-0">
          <h4>{{getMan.length}}</h4>
          <footer class="blockquote-footer">
            <small><cite title="Source Title"><h3>Men</h3></cite>
            </small>
          </footer>
        </blockquote>
      </div>
      <div class="card m-15 col-3 bg-primary text-white text-center p-3">
        <blockquote class="blockquote mb-0">
          <h4>{{getWoman.length}}</h4>
          <footer class="blockquote-footer">
            <small><cite title="Source Title"><h3>Women</h3></cite>
            </small>
          </footer>
        </blockquote>
      </div>
      <div class="card m-15 col-3 bg-primary text-white text-center p-3">
        <blockquote class="blockquote mb-0">
          <h4>
    {{getAges}}
    </h4>
          <footer class="blockquote-footer">
            <small><cite title="Source Title"><h3>Avarage Age</h3></cite>
            </small>
          </footer>
        </blockquote>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
    return {
      selectedCategory: "All",
      kal: []
    }
  },
  computed:{
    works(){
      return this.$store.getters.getAllWorker
    },
    workerLength(){
      return this.$store.getters.getLength
    },
    getMan(){
        return this.$store.getters.getManLength
    },
    getWoman(){
        return this.$store.getters.getWomanLength
    },
    getey(){
      return this.$store.getters.getSas
    },
    getAges(){
      let today = new Date(); 
      let year = today.getFullYear();
      console.log(year)
      return this.$store.getters.getYoung(year)
    }
  },
  created(){
    // this.$store.dispatch('works')
    // this.getsYoung()
  },
}
</script>
