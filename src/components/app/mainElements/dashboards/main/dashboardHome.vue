<template>
  <div class="dashboard-page">
    <div class="dashboard-greeting">
      <h1>
        <hilighter color="yellow">Good {{ timeOfDay }}</hilighter
        ><br />
        Wise words to consider today:
      </h1>
      <QuoteDisplay />
    </div>

    <div class="dashboard-main">
      <div v-for="item in dashboardCards" :key="item.route">
        <router-link :to="item.route">
          <DashboardCard :title="item.title" :icon="item.icon" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import QuoteDisplay from "@/components/app/mainElements/dataRepresentations/quoteDisplay.vue";
import DashboardCard from "@/components/app/common/cards/dashboard/dashboardCard.vue";

import hilighter from "@/components/app/common/text/highlightText.vue";

export default {
  name: "dashboardHome",
  components: { QuoteDisplay, DashboardCard, hilighter },
  data() {
    return {
      dashboardCards: {
        Goals: {
          title: "Goals",
          icon: "bi bi-book",
          route: "/goals",
        },
        Reminders: {
          title: "Reminders",
          icon: "bi bi-alarm",
          route: "/reminders",
        },
        Suggestions: {
          title: "Suggestions",
          icon: "bi bi-lightbulb",
          route: "/suggestions",
        },
      },
    };
  },
  setup() {
    const timeOfDay = ref("");
    const currentTime = new Date().getHours();

    const getTimeOfDay = () => {
      if (currentTime >= 5 && currentTime < 12) {
        return "morning";
      } else if (currentTime >= 12 && currentTime < 17) {
        return "afternoon";
      } else if (currentTime >= 17 && currentTime < 21) {
        return "evening";
      } else {
        return "night";
      }
    };

    timeOfDay.value = getTimeOfDay();

    return {
      timeOfDay,
    };
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
