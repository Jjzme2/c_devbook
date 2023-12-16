<template>
  <nav :class="customClass">
    <router-link
      class="router-link"
      v-for="route in visibleRoutes"
      :key="route.name"
      :to="route.path"
    >
      <span :style="route.meta.style || ''">{{
        computedRouteName(route.name)
      }}</span>
    </router-link>
  </nav>
</template>

<script>
export default {
  name: "NavbarElement",
  props: {
    isAuthorized: {
      type: Boolean,
      default: false,
    },
    customClass: {
      type: String,
      default: "large pop start horizontal",
    },
  },
  computed: {
    visibleRoutes() {
      return this.$router.options.routes.filter(
        (route) => !route.meta?.hideInNav
      );
    },
  },
  methods: {
    computedRouteName(route) {
      return this.$stringUtils.convertStringToCase(route, "sentence");
    },
  },
};
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin: auto;
}
</style>
