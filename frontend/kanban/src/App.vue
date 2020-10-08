<template>
  <div id="app">
    
    <KanbanBoard :stages="statuses" > 
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
      statuses: ['Applied', 'Phone Screen', 'On-Site', 'Accepted', 'Rejected'],
      cards: [],
    };
  }

}
</script>

<style>

</style>
