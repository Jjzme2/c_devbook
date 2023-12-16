<template>
  <!-- Go back button -->
  <router-link :to="destination">
    <button>
      <i :class="icon" style="margin-right: 0.5rem"></i> {{ buttonText }}
    </button>
  </router-link>
</template>

<script>
export default {
  name: "GoToButton",
  props: {
    destination: {
      type: String,
      default: "/",
    },
    buttonText: {
      type: String,
      default: "Go Home",
    },
    icon: {
      type: String,
      default: "bi bi-arrow-left-circle",
    },
  },
  computed: {
    // from() {
    // 	return this.$route.path;
    // },
  },
};
</script>
