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
      statuses: [
      {
        status:'Applied',
        applicants: []

      },
       {
        status:'Phone Screen',
        applicants: []

      },
       {
        status: 'On-Site',
        applicants: []

      },
      {
        status: 'Accepted',
        applicants: []

      },
       {
        status: 'Rejected',
        applicants: []

      }
     ]
     
    };
  },
  async mounted() {
    let applicants = await api.getapplicants();

    for (let i = 0; i < applicants.length; i+=1) {
      let idx = this.statuses.findIndex(function(e) {
        return e.status === applicants[i].status;
      });

      console.log(idx)

      this.statuses[idx].applicants.push(applicants[i]);
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
