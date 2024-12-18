<script setup>
</script>

<template>
    <main class="dark-theme">
      <h1>My Finances</h1>
      <div class="finance-container">
        <div class="transaction-header">
          <h4>Criar Transação</h4>
          <RouterLink to="/">Voltar</RouterLink>
        </div>

        <input 
          type="number" 
          class="form-control" 
          id="value" 
          v-model="finances.value" 
          placeholder="Valor da Transação"
          step="0.01"
          min="0"
          required
        >
        
        <select v-model="finances.type" class="form-control" required>
            <option value="" disabled>Selecione o tipo de transação</option>
            <option value="e">Entrada</option>
            <option value="s">Saída</option>
        </select>
        
        <RouterLink to="/" class="btn btn-success" @click="saveFinance">Criar</RouterLink>
      </div>
    </main>
  </template>

<script>
import FinancesService from '../services/FinancesService';

export default {
  name: "finances-create",
  data() {
    return {
      finances: {
         value: 0,
         type: null
      },
    };
  },

  methods: {
    saveFinance() {
      var data = {
        value: this.finances.value,
        type: this.finances.type
      }  
      FinancesService.create(data)
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      })
    }
  },

}
</script>

