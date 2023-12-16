<template>
  <div class="dashboard-page">
    <h1>Goals</h1>
    <div class="dashboard-page__actions">
      <button class="btn btn--primary" @click="goToCreateGoal">Add Goal</button>
    </div>
    <div class="goal-display">
      <div v-for="goal in storeData" :key="goal.id">
        <GoalCard :id="goal.id" @clicked="goalClicked"></GoalCard>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import GoalCard from "@/components/app/mainElements/cards/goalCard.vue";

export default {
  name: "dashboardGoal",
  components: {
    GoalCard,
  },
  data() {
    return {
      someData: "",
    };
  },
  setup() {
    const store = useStore();
    const getterString = "goals/getAll";
    const dispatchString = "goals/fetchAll";

    const storeData = computed(() => store.getters[getterString]);

    // Fetch on component mount
    onMounted(async () => {
      await store.dispatch(dispatchString);
      //   Initialize Empty Object
      await store.dispatch("goals/getEmpty");
    });

    return { storeData };
  },
  methods: {
    goalClicked(goal) {
      // Open Goal form?
      console.log(goal);
    },
    goToCreateGoal() {
      //   alert("This needs to be added. Check out the dashBoardGoal.vue file.");
      this.$router.push({ name: "formsGoal", params: { goalId: "0" } });
    },
  },
};
</script>
