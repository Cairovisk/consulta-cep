<template>
  <div id="content">
    <div class="container">
      <div class="search">
        <div class="text">
          Insira o CEP
        </div>
        <transition name="fade">
          <div class="error" v-if="errors.cep">
            CEP não preenchido
          </div>
        </transition>
        <SearchInput class="cepEntry" nome="CEP" :error="errors.cep">
          <input type="tel" v-mask="'#####-###'" v-model="cep" placeholder=" " @focus="errors.cep = false; resultOpen = false">
        </SearchInput>
        <transition name="fade">
          <button v-if="!resultOpen" class="btn btn-primary h-42" @click="requestCEP()">Consultar</button>
        </transition>
      </div>
      <transition name="fade">
        <div class="result" v-if="resultOpen">
          <div class="text">
            Resultado do CEP
          </div>
          <div class="fields">
            <p>Logradouro: <span>{{ request.logradouro }}</span></p>
            <p>Bairro: <span>{{ request.bairro }}</span></p>
            <p>Cidade: <span>{{ request.localidade }}</span></p>
            <p>UF: <span>{{ request.uf }}</span></p>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import SearchInput from '@/components/UI/SearchInput.vue'

export default {
    components: {
        SearchInput
    },
    data() {
      return {
        cep: '',
        resultOpen: false,
        errors: {
            cep: false
        }
      }
    },
    methods: {
      ...mapActions([
        'infoRequest'
      ]),
      requestCEP() {
        if(this.handleErrors()) {
            this.infoRequest(this.cep).then(resp => {
            this.resultOpen = true
            this.errors.cep = false
            console.log(resp)
          }), err => {
            this.resultOpen = false
            this.errors.cep = true
            console.log(err)
          }
        }
      },
      handleErrors() {
        if(this.cep < 8) {
          this.errors.cep = true
          return false
        }
        return true
      }

    },
    computed: {
      request() {
        return this.$store.getters.getInfoCEP
      }
    }
}
</script>

<style lang="scss" scoped>
#content {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    width: 100%;

    .search {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 70px 100px;
      border: 1px solid $purple;
      border-radius: 30px;
      background: $white-primary;
      margin-bottom: 30px;

      .text {
        font-size: 36px;
        color: $black;
        font-weight: $bold;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 30px;
      }

      .error {
        font-size: 14px;
        color: $red-primary;
        font-weight: $semibold;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-bottom: 10px;
      }

      .cepEntry {
          margin-bottom: 20px;
      } 
    }

    .result {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      padding: 70px 70px;
      border: 1px solid $purple;
      border-radius: 30px;
      background: $white-primary;

      .text {
        font-size: 36px;
        color: $black;
        font-weight: $bold;
        margin-bottom: 15px;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .fields {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-size: 18px;
        font-weight: $semibold;

        span {
          font-weight: $semibold;
          color: $red-light;
        }

      }
    }

}
</style>