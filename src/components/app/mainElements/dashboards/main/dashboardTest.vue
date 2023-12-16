<template>
  <div class="dashboard-page">
    <div class="dashboard-header">
      <h4>Testing Dashboard:</h4>

      <div class="component-selection">
        <selectorTool
          @selectionMade="(e) => setComponent(e)"
          label="Select a component to test"
          themes="comfy column"
          :selectionOptions="selectionOptions"
        ></selectorTool>
      </div>

      <!-- Display the selected component -->
      <div class="selection-display">
        <component :is="selected"></component>
      </div>
    </div>
  </div>
</template>

<script>
import selectorTool from "@/components/app/base/TheSelector.vue";

// !Test Components
import quoteList from "@/components/app/mainElements/QuoteList.vue"; // Example

export default {
  name: "dashboardTest",
  components: {
    selectorTool,

    // !Test Components
    quoteList, // Example
  },
  data() {
    return {
      selected: "",
      selectionOptions: {
        defaultMessage: "--- Select an option ---",
        options: [
          {
            value: quoteList,
            message: "Quote List",
          }, // Example
        ],
      },
    };
  },
  methods: {
    setComponent(e) {
      this.selected = e;
    },
  },
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
</style>
