<template>
  <div>
    {{ info }}
  </div>
</template>

<script>
export default {
  name: "",
  props: {
      info: {
        type: Object,
        required: true,
      },
  },

  data() {
    
  }
}
</script>