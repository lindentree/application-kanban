<template>
  <div >
    <h2>
      {{name}}
    </h2>

    <p>
      {{contact}}
    </p>
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
     }
  },

  computed: {
    card_status () {
      console.log(this.status)
      return status
    }
  },

  data() {
    return {
      enabled: true
    };
  }
}
</script>