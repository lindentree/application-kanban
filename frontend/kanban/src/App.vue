<template>
  <div id="app">
    
    <KanbanBoard :stages="statuses" :applicants="cards" > 
    </KanbanBoard>
  </div>
</template>

<script>
//import draggable from 'vuedraggable'

import KanbanBoard from './components/KanbanBoard.vue'

export default {
  name: 'App',
  components: {
    KanbanBoard,
    //draggable
  },
  data() {
    return {
      statuses: [
      'Applied', 'Phone Screen', 'On-Site', 'Accepted', 'Rejected'],
      cards: [
        {
        id: 1, 
       name: 'Linden',
       contact: '1234567'

       }
      ],
    };
  }

}
</script>

<style>

</style>
