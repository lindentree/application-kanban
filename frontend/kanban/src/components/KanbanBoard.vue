<template>
  <div id="board" class="relative p-2 flex overflow-x-auto h-full">
    
        <div
          v-for="status in stages"
          :key="status"
          class="column"
        >
       <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{status.status}}</p>

       <draggable tag="ul" :list="status.applicants" :animation="200" ghost-class="ghost-card" group="status.applicants">
            <ApplicantCard
              v-for="(applicant) in status.applicants"
              :info="applicant"
              :key="applicant.id"
              :name="applicant.name"
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

    background-color: pink;
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