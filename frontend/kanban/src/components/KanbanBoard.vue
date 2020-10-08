<template>
  <div id="board" class="relative p-2 flex overflow-x-auto h-full">
    
        <div
          v-for="status in stages"
          :key="status"
          class="column"
        >
       <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{status}}</p>

       <draggable :list="applicants" :animation="200" ghost-class="ghost-card" group="tasks">
            <task-card
              v-for="(applicant) in applicants"
              :key="applicant.id"
              :name="applicant.name"
              class="mt-3 cursor-move"
            ></task-card>
            <!-- </transition-group> -->
          </draggable>

         
        </div>
  </div>
</template>

<script>
  //import draggable from 'vuedraggable'
  //import ApplicantCard from './ApplicantCard.vue'
export default {
  name: "KanbanBoard",
  components: {
    //ApplicantCard,
    //draggable
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
};
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

    background-color: grey;
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