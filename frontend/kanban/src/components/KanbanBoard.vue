<template>
  <div id="board" class="relative p-2 flex overflow-x-auto h-full">
    
        <div
          v-for="status in stages"
          :key="status"
          class="column"
        >
       <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{status.status}}</p>

       <draggable tag="ul" :list="status.applicants" :change="changed(list.status, $event)" :animation="200" ghost-class="ghost-card" group="status.applicants" :move="cardMoved">
            <ApplicantCard
              v-for="(applicant) in status.applicants"
              v-bind="applicant"
              :info="applicant"
              :key="applicant.id"
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
  


export default defineComponent({
  name: "KanbanBoard",
  components: {
    ApplicantCard,
    draggable: VueDraggableNext,
  },

  props: {
      stages: {
        type: Array,
        required: true,
      },

      applicants: {
        type: Array
      }
  },
  data() {
    return {
    };
  },
  methods: {
    cardMoved: function(event) {
      console.log(event)
      let data = new FormData
      data.append("applicant[status]", status)
      
      await api.updateapplicant(data)



    },
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

    background-color: gold;
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