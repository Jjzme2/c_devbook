<template>
  <div class="dashboard-page" v-if="error">
    <button @click="this.$router.go(-1)">Go Back</button>
    <p>An Error has occurred. You can view more info about this error below:</p>

    {{ "Error type: " + errorType }}

    <h1>
      This error occurred in: <strong>{{ error.origin }}</strong>
    </h1>
    <hilighter color="red">Message: {{ error.message }}</hilighter>
  </div>
</template>

<script>
import hilighter from "@/components/app/common/text/highlightText.vue";

export default {
  name: "dashboardError",
  components: { hilighter },
  props: {
    error: Object,
  },
  computed: {
    errorType() {
      return this.$stringUtils.convertStringToCase(this.error.type, "title");
    },
  },
};
</script>
