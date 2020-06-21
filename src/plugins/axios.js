import Vue from 'vue'
import axios from 'axios'

Vue.use({
    install(Vue) {
        Vue.prototype.$http = axios.create({
			baseURL: 'https://viacep.com.br/ws',
			headers: {
				'Content-Type': 'application/json'
			}
		})
    }
})