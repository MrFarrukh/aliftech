<template>
    <div id="worker" >
        <input class="form-control form-control-dark w-100" v-model="search" type="text"  placeholder="Search">
        <div class="modal fade p-50" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">More info</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="table-responsive">
                    <table class="table table-striped table-sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Gender</th>
                                <th>Position</th>
                                <th>Specialist</th>
                                <th>Birth</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{{res.id}}</td>
                                <td>{{res.name}}</td>
                                <td>{{res.gender}}</td>
                                <td>{{res.pos}}</td>
                                <td>{{res.spec}}</td>
                                <td>{{res.date}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>
        <div class="modal fade show" id="exampleModalCenter1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" v-show="isActive" style="display:block;">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Add Employee</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="card " >
                    <form>
                        <div class="form-row">
                            <div class="form-group col-md-5" style="margin-left:40px;">
                                <label for="inputText4">Full Name</label>
                                <input type="text" class="form-control"   placeholder="Name" v-model="employe.name">
                            </div>
                            <div class="form-group col-md-5 " style="margin-left:40px;">
                                    <label  >Date of Birth</label>
                                    <input  type="date" class="form-control" style=" "  v-model="employe.date">
                            </div>
                            <div class="form-group col-md-5" style="margin-left:40px;">
                            <label for="inputState">Specialist</label>
                                <select id="inputState" class="form-control" v-model="employe.spec">
                                    <option selected>Choose...</option>
                                    <option>IT</option>
                                    <option>Marketing</option>
                                    <option>Finance</option>
                                </select>
                            </div>
                            <div class="form-group col-md-5" style="margin-left:40px;">
                                <label for="inputText4" >Position</label>
                                <input type="text" class="form-control" id="inputPassword4" placeholder="Lavozimi" v-model="employe.pos">
                            </div>
                            <div class="radios col " style="margin-left:40px;">
                                <div class="form-check form-check-inline col-md-5" >
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="Male" v-model="employe.gender">
                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                </div>
                                <div class="form-check form-check-inline col-md-5 " style="margin-left:52px;">
                                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="Female" v-model="employe.gender">
                                    <label class="form-check-label" for="inlineRadio2">Female</label>
                                </div>
                            </div>  
                        </div>
                    </form>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button @click="add" data-dismiss="modal" v-show="!isBtn" class="btn btn-primary">Add</button>
                <button @click="save" data-dismiss="modal"  v-show="isBtn" class="btn btn-primary">save</button>
            </div>
            </div>
        </div>
        </div>
        <!-- <div class="mb-3" >
            <div class="card " v-show="isActive">
                <form>
                    <div class="form-row">
                        <div class="form-group col-md-6">
                            <label for="inputText4">Full Name</label>
                            <input type="text" class="form-control"  placeholder="Name" v-model="employe.name">
                        </div>
                        <div class="form-group ">
                                <label  >Date of Birth</label>
                                <input  type="date" class="form-control"  v-model="employe.date">
                        </div>
                        <div class="form-group col-md-4">
                        <label for="inputState">Specialist</label>
                            <select id="inputState" class="form-control" v-model="employe.spec">
                                <option selected>Choose...</option>
                                <option>IT</option>
                                <option>Marketing</option>
                                <option>Finance</option>
                            </select>
                        </div>
                        <div class="form-group col-md-6">
                            <label for="inputText4" >Position</label>
                            <input type="text" class="form-control" id="inputPassword4" placeholder="Lavozimi" v-model="employe.pos">
                        </div>
                        <div class="radios col-md-4" >
                            <div class="form-group ">
                                <label for="inputradio1" >Man</label>
                                <input value="man" name="inradio" type="radio" class="form-control" id="inputradio1" v-model="employe.gender">
                            </div>
                            <div class="form-group">
                                <label for="inputradio2">Woman</label>
                                <input value="woman" name="inradio" type="radio" class="form-control" id="inputradio2" v-model="employe.gender">
                            </div>
                        </div>    
                    </div>
                    <button @click="add" v-show="!isBtn" class="btn btn-primary">Add</button>
                    <button @click="save"  v-show="isBtn" class="btn btn-primary">save</button>
                </form>
            </div>
        </div>     -->
        <div class="workers">
            <h2>Workers</h2>
            <div class="table-responsive">
                <table class="table table-striped table-sm">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Ism</th>
                            <th>See more...</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(work,index) of allFiltr" :key="index">
                            <td>{{index+1}}</td>
                            <td>{{work.name}}</td>
                            <td><button  @click="more(index+1)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">More...</button></td>
                            <td><button @click="edit(index)" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter1">Edit</button></td>
                            <td><button  @click="del(index)" class="btn btn-danger">Delete</button></td>
                        </tr>
                    </tbody> 
                </table>
            </div>
        </div>
        <button @click="plus" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter1">
        Plus
        </button>
    </div>    
</template>

<script>
export default {
    data(){
        return{
            search:'',
            isActive:false,
            res:[],
            employe:{
                name:'',
                pos:'',
                gender:'',
                spec:'',
                date:'' 
            },
            isBtn:false
        }
    },
    methods:{
        more(id){
            this.res = this.$store.getters.getById(id)
        },
        plus(){
            this.isActive = !this.isActive
            this.isBtn = false
        },
        add(){
            this.$store.dispatch('addWorker',this.employe)
            this.employe = {
                name:'',
                pos:'',
                spec:'',
                date:'',
                gender:''
            }
            this.isActive = false
        },
        edit(index){
            this.isBtn = true
            this.isActive = true

            this.employe = this.works[index]
            this.employe.id = this.works[index].id 
        },
        save(){
            this.isActive = false
            this.$store.dispatch('saveWorker',this.employe)
            this.employe = {
                name:'',
                pos:'',
                spec:'',
                gender:'',
                date:''
            }
        },
        del(index){
            const obj = {
                index : index,
                item : this.works[index]
            }
            this.$store.dispatch('delWorker',obj)
            this.isActive = false
        }
    },
    computed:{
        allFiltr(){
            return this.works.filter(item =>{
                return item.name.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
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

<style>
    .modal-dialog {
    max-width: 800px;
    margin: 1.75rem auto;
}
</style>