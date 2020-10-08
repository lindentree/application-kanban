<template>
  <div id="board">
    <div class="flex justify-center">
      <div class="min-h-screen flex overflow-x-scroll py-12">
        <div
          v-for="status in stages"
          :key="status"
          class="bg-gray-100 rounded-lg px-3 py-3 column-width rounded mr-4"
        >
       <p class="text-gray-700 font-semibold font-sans tracking-wide text-sm">{{status}}</p>

         
      
        </div>
      
      </div>
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
  },
  data() {
    return {
    };
  }
};
</script>

<style scoped>


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