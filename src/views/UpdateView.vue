<script setup>
</script>

<template>
    <main class="dark-theme">
      <h1>My Finances</h1>
      <div class="finance-container">
        <div class="transaction-header">
          <h4>Editar Transação</h4>
          <RouterLink to="/">Voltar</RouterLink>
        </div>
  
        <input 
          type="number" 
          class="form-control" 
          id="value" 
          v-model="finance.value" 
          placeholder="Valor da Transação"
          step="0.01"
          min="0"
          required
        >
        
        <select v-model="finance.type" class="form-control" required>
          <option value="" disabled>Selecione o tipo de transação</option>
          <option value="e">Entrada</option>
          <option value="s">Saída</option>
        </select>
        
        <RouterLink class="btn btn-success" to="/" @click="saveFinance">Salvar</RouterLink>
      </div>
    </main>
  </template>
  

<script>
import FinancesService from '../services/FinancesService';

export default {
  name: "finances-update",
  props: ['id'],
  data() {
    return {
      finance: {
         value: 0,
         type: null
      },
    };
  },

  methods: {
    loadFinance() {
      // Aqui você pode buscar a transação pela ID, seja no estado ou API
      const finance = FinancesService.getOne(this.id).then(response => {
        this.finance = {
            value: response.data.value,
            type: response.data.type
        }; 
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      })
    },
    saveFinance(){
        var data = {
        value: this.finance.value,
        type: this.finance.type
      }  
      FinancesService.update(this.id, data)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      })
    }
  },

  mounted() {
    this.loadFinance();
  }

}
</script>

