<template>
  <div class="dashboard-page">
    <h1>Suggestions</h1>
    <div class="suggestion-display">
      <div v-for="suggestion in storeData" :key="suggestion.id">
        <SuggestionCard
          :id="suggestion.id"
          @clicked="suggestionClicked"
        ></SuggestionCard>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import SuggestionCard from "@/components/app/mainElements/cards/suggestionCard.vue";

export default {
  name: "dashboardSuggestion",
  components: {
    SuggestionCard,
  },
  data() {
    return {
      someData: "",
    };
  },
  setup() {
    const store = useStore();
    const getterString = "suggestions/getAll";
    const dispatchString = "suggestions/fetchAll";

    const storeData = computed(() => store.getters[getterString]);

    // Fetch on component mount
    onMounted(async () => {
      await store.dispatch(dispatchString);
    });

    return { storeData };
  },
  methods: {
    suggestionClicked(suggestion) {
      // Open Suggestion form?
      var message = `Suggestion card clicked | Data: ${JSON.stringify(
        suggestion
      )}`;
      console.log(message);
    },
  },
};
</script>
