<script setup>
</script>

<template>
  <main class="dark-theme">
    <h1>My Finances</h1>
    <div class="finance-container">
      <div class="transaction-header">
        <h4>Transações</h4>
        <RouterLink to="/create">Create</RouterLink>
      </div>
      <ul class="list-group">
        <li 
          class="list-group-item" 
          v-for="(finance, index) in finances" 
          :key="index" 
          :class="{'entrada': finance.type === 'e', 'saida': finance.type === 's'}">
          <span class="type">
            {{ finance.type === 'e' ? '+' : '-' }}
          </span>
          <span class="value">{{ finance.value }}</span>
          <div class="action-buttons">
            <button class="btn-delete" @click="deleteFinance(finance.id)">Excluir</button>
            <RouterLink class="btn-edit" :to="`/update/${finance.id}`">Editar</RouterLink>
          </div>
        </li>
      </ul>
    </div>
  </main>
</template>


<script>
import FinancesService from '../services/FinancesService';

export default {
  name: "finances-list",
  data() {
    return {
      finances: [],
    };
  },

  methods: {
    retriveFinances() {
      FinancesService.getAll()
      .then(response => {
        this.finances = response.data;
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      })
    },

    deleteFinance(finance){
      FinancesService.delete(finance).then(response =>{
        this.retriveFinances()
      })
      .catch(e => {
        console.log(e);
      })

    }
  },

  mounted() {
    this.retriveFinances()
  },

  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.retriveFinances();
    });
  }
}
</script>

