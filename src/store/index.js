import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    infoCEP: {}
  },
  getters: {
    getInfoCEP(state) {
      return state.infoCEP
    }
  },
  mutations: {
    setInfoCEP(state) {
      const storedInfoCEP = JSON.parse(localStorage.getItem('infoCEP'))

			state.infoCEP = storedInfoCEP
    }
  },
  actions: {
    infoRequest({commit}, payload) {
      const cep = payload
      
			return new Promise((resolve, reject) => {
				

				Vue.prototype.$http.get(`/${cep}/json`)
					.then(resp => {

						if(resp.status === 200){
							const infoCEP = resp.data
							localStorage.setItem(
								'infoCEP', 
								JSON.stringify(infoCEP)
							)
							commit('setInfoCEP')
						}
						
						resolve(resp)
					}).catch(err => {
						reject(err)
					})
			})
		},
  }
})
