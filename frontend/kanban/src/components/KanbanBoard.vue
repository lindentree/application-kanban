<template>
  <div id="board" class="relative p-2 flex overflow-x-auto h-full">
    
        <div
          v-for="(value, index) in stages"
          :key="index"
          class="column"
        >
       <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{index}}</p>

       <draggable tag="ul" :name="index" :list="value" :animation="100" ghost-class="ghost-card" :group="{ name: 'index' }" @end="updateApplicantStatus" :key="index">
            <ApplicantCard
              v-for="(applicant) in value"
              v-bind="applicant"
              :info="applicant"
              :key="applicant._id"
              :name="applicant.name"
              :contact="applicant.contact"
              :status="applicant.status"
              class="p-4 mb-3 flex justify-between items-center bg-white shadow rounded-lg cursor-move"
            >

            </ApplicantCard>
          </draggable>

         
        </div>
  </div>
</template>

<script>
  import { defineComponent } from 'vue'
  import { VueDraggableNext } from 'vue-draggable-next'
  import ApplicantCard from './ApplicantCard.vue'
  import { api } from '../helpers';
  
  export default defineComponent({
    name: "KanbanBoard",
    components: {
      ApplicantCard,
      draggable: VueDraggableNext,
    },

    props: {
      stages: {
        type: Object,
        required: true,
      },

      applicants: {
        type: Array
      }
    },
    data() {
      return {
        enabled: true
      };
    },
    methods: {
 
      updateApplicantStatus: async function(event) {

        let id = event.item.getAttribute('_id');
        let newStatus = event.to.getAttribute('name');
    
        let applicant = {
          applicantId: id,
          status: newStatus
        }

        await api.updateapplicant(applicant);

      }
    }
  });
</script>

<style scoped>

  #board {
    display: grid;
    grid-auto-columns: 272px;
    grid-auto-flow: column;
    grid-gap: 8px;
  }

  .column {
    display: grid;
    grid-auto-rows: max-content;
    grid-gap: 10px;
    padding: 10px;
    background-color: #80D4FF;
  }

  .column-width {
    min-width: 320px;
    width: 320px;
  }

.ghost-card {
  opacity: 0.5;
  background: #F7FAFC;
  border: 1px solid #4299e1;
}
</style>