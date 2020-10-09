<template>
  <div>
    <h2>
      {{name}}
    </h2>
  </div>
</template>

<script>
export default {
  name: "ApplicantCard",
  props: {
      info: {
        type: Object,
        required: true,
      },
      name: {
        type: String,
      },
      contact: {
        type: String,
      },
      status: {
        type: String,
        required: true,
     },
  },

  data() {
    return {
      enabled: true
    };
  }
}
</script>