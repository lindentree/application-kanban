<template>
  <div id="app">
    
    <KanbanBoard :stages="statuses" :applicants="applicants" > 
    </KanbanBoard>
  </div>
</template>

<script>

import KanbanBoard from './components/KanbanBoard.vue'
import { api } from './helpers';


export default {
  name: 'App',
  components: {
    KanbanBoard
  },
  data() {
    return {
      statuses: [
      'Applied', 'Phone Screen', 'On-Site', 'Accepted', 'Rejected'],
      applicants: [
        {
        id: 1, 
       name: 'Linden',
       contact: '1234567',
       comments: ''

       },
       {
        id: 2, 
       name: 'Jenna',
       contact: '7456789',
       comments: ''

       }

      ],
    };
  },
  async mounted() {
    this.applicants = await api.getapplicants();
  }

}
</script>

<style>

</style>
