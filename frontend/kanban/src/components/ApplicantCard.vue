<template>
  <div>
    {{ info }}
  </div>
</template>

<script>
export default {
  name: "ApplicantCard",
  props: {
      info: {
        type: Object,
        required: true,
      }
  },

  data() {
    return {
      enabled: true
    };
  }
}
</script>