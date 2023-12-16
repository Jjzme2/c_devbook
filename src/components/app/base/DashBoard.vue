<template>
  <div class="dashboard-view">
    <dashboardApp></dashboardApp>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

import dashboardApp from "@/components/mainElements/app/dashboards/dashboardApp.vue";

export default {
  name: "DashBoard",
  components: {
    dashboardApp,
  },
  setup() {
    const store = useStore();

    return {
      errors: computed(() => store.getters["appState/getErrors"]),
    };
  },
};
</script>

<style scoped>
.dashboard-view {
  background-color: var(--primary-background-color);
  display: flex;
  flex-direction: row;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  padding: 1rem 0.85rem;
  width: 85%;
}
</style>
