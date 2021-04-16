import axios from 'axios'

export default{
    state:{
        works:[],
        sas: 0
    },
    actions:{
        works(context){
            axios.get('http://localhost:3000/works')
                .then(response=>{
                    context.commit('allWorker',response)
            })
        },
        addWorker(context,payload){
            axios.post('http://localhost:3000/works',payload)
                .then(response =>{
                    context.commit('pushWorker',response)
            })
        },
        saveWorker(context,payload){
            let index = payload.index
            delete payload.index
            axios.put('http://localhost:3000/works/'+payload.id,payload)
                .then(response =>{
                    response.data.index = index
                    context.commit('savedWorker',response.data)
            })
        },
        delWorker(context,payload){
            axios.delete('http://localhost:3000/works/'+payload.item.id,payload)
            context.commit('spliceWorker',payload.index)
        },
    },
    mutations:{
        pushWorker(state,payload){
            state.works.push(payload.data)
        },
        savedWorker(state,payload){
            let index = payload.index
            delete payload.index
            state.works[index] = payload
        },
        spliceWorker(state,payload){
            state.works.splice(payload,1)
        },
        allWorker(state,payload){
            state.works = payload.data
        }
    },
    getters:{
        getAllWorker(state){
            return state.works
        },
        getLength(state){
            return state.works.length
        },  
        getById(state){
            return idGet => {
                return state.works.find(item => 
                    item.id === idGet
                )
            }
        },
        getManLength(state){
            return state.works.filter(item =>{
                return item.gender == 'Male'
            })
        },
        getWomanLength(state){
            return state.works.filter(item =>{
                return item.gender == 'Female'
            })
        },
        getAllYoung(state){
            return state.works
        },
        getYoung(state){
            return year => {
                state.works.forEach(item => {
                    console.log(item)
                    var wyear = parseInt(item.date.slice(0,4))
                    console.log(year,wyear)
                    state.sas += year-wyear
                })
                return parseInt(state.sas/state.works.length)
            }
        },
        getSas(state){
            return state.sas
        }
    }
}