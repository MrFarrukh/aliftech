<template>
  <div class="about">
    <h2>Employee</h2>
    <input class="form-control form-control-dark w-100" v-model="search1" type="text"  placeholder="Search">
      <div class="table-responsive">
        <table class="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Ism</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(work,index) of allFiltr" :key="index">
              <td>{{index+1}}</td>
              <td>{{work.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
  </div>
</template>

<script>

export default {
  data() {
    return{
      search1:''
    }
  },
  methods:{

  },
  computed:{
    allFiltr(){
            return this.works.filter(item =>{
                return item.name.toLowerCase().indexOf(this.search1.toLowerCase()) !== -1
            })
    },
    works(){
      return this.$store.getters.getAllWorker
    }
  },
  created(){
    // this.$store.dispatch('works')
  }
}
</script>

