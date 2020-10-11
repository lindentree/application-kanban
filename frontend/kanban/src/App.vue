<template>
  <div id="app">
    
    <KanbanBoard :stages="statuses"  > 
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
      statuses: {
      
        
      'Applied': [],
      'Phone Screen': [],
      'On-Site': [],
      'Accepted': [],
      'Rejected': []
      }
     
    };
  },
  async mounted() {
    let applicants = await api.getapplicants();

    for (let i = 0; i < applicants.length; i+=1) {
      this.statuses[applicants[i].status].push(applicants[i])
    }

      
  },
  methods: {
    updateApplicantStatus: function() {
        // get your info then...
      

        if(this.debounce) return
        this.debounce = setTimeout(function() {
            this.debounce = false 

            api.updateapplicants()
        }.bind(this), 2000)
    }
} 

}
</script>

<style>

</style>
