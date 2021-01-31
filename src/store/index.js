import { createStore } from 'vuex'

export default createStore({
  state: {
    objects: [
      
    ]
  },
  mutations: {
    addToObjects(state, user){
      const obj = { name:user[0], surname:user[1], dateofbirth:user[2]};
      state.objects[state.objects.length] = Object.assign({}, state.objects, obj)
    }
  },
  actions: {
  },
  modules: {
  }
})
