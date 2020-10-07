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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
