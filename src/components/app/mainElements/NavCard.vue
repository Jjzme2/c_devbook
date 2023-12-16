<template>
  <div class="nav-card">
    <nav>
      <router-link
        class="router-link"
        v-for="route in visibleRoutes"
        :key="route.name"
        :to="route.path"
      >
        <span class="route">
          {{ computedRouteName(route.name) }}
        </span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  name: "NavCard",
  props: {
    routes: {
      type: Array,
      required: false,
      default: () => [],
      validator: (routes) => {
        return routes.every((route) => {
          return route.name && route.path;
        });
      },
    },
  },
  computed: {
    visibleRoutes() {
      return this.routes.length > 0
        ? this.routes
        : this.$router.options.routes.filter((route) => !route.meta?.hideInNav);
    },
  },
  methods: {
    computedRouteName(name) {
      return this.$stringUtils.convertStringToCase(name, "sentence");
    },
  },
};
</script>

<style scoped>
.nav-card {
  align-items: center;
  border: var(--primary-border);
  display: flex;
  justify-content: center;
  padding: 0.15rem;
  max-width: 350px;
}

.nav-card nav {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin: auto;
}

.route {
  border-bottom: 3px solid #ccc;
  /* border-right: 3px solid #ccc; */
  font-size: 1rem;
  font-weight: 300;
  padding: 0.15rem;
  text-align: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}
</style>
