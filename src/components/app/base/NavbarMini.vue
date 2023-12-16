<template>
  <div :class="['navbar-mini', customClass]" @click="navigateTo(route)">
    <router-link :to="route" class="nav-link">
      <i :class="routeIcon"></i>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "NavbarMini",
  props: {
    route: {
      type: String,
      default: "/",
    },
    routeIcon: {
      type: String,
      default: "bi bi-arrow-left-circle",
    },
    customClass: {
      type: String,
      default: "bg-light",
    },
  },
  methods: {
    navigateTo(route) {
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
/* Improved styling */
.navbar-mini {
  display: flex;
  padding: 1.5rem;
  border-radius: 8px;
  transition: background-color 0.3s ease;
  align-items: center;
}

/* Responsive design */
@media (max-width: 768px) {
  .navbar-mini {
    padding: 0.3rem;
  }
}

/* Hover effect */
.navbar-mini:hover {
  background-color: var(--secondary_background_color);
}

/* Navigation link styling */
.nav-link {
  text-decoration: none;
  color: var(--link_color);
  font-size: 20px;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: var(--secondary_text_color);
}

/* Icon styling */
.route-icon {
  font-size: 24px;
  margin-right: 10px;
}

.transparent {
  background-color: transparent;
}
</style>
