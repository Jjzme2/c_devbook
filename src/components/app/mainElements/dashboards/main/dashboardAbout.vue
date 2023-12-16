<template>
  <div class="dashboard-page">
    <div class="dashboard-header">
      <h3>This is an about page</h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboardAbout",
  components: {},
  setup() {},
};
</script>

<style scoped>
.dashboard-main {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: 1rem;
}

.dashboard-slides {
  grid-column: 1 / 3;
}

.dashboard-header {
  grid-column: 1 / 3;
}

#dashboard-title {
  margin-bottom: 1rem;
}

#gratitude-input {
  background-color: var(--secondary_background_color);
  border-radius: 15px;
  border: 1px solid #ccc;
  box-shadow: var(--secondary_accent_color) 0px 0px 10px 0px inset;
  color: var(--primary_text_color);
  padding: 1rem;
  text-align: center;
  width: 60%;
}
</style>
