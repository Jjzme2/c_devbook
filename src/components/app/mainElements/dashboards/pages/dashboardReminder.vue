<template>
  <div class="dashboard-page">
    <h1>Reminders</h1>
    <div class="reminder-display">
      <div v-for="reminder in storeData" :key="reminder.id">
        <ReminderCard
          :id="reminder.id"
          @clicked="reminderClicked"
        ></ReminderCard>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";

import ReminderCard from "@/components/app/mainElements/cards/reminderCard.vue";

export default {
  name: "dashboardReminder",
  components: {
    ReminderCard,
  },
  data() {
    return {
      someData: "",
    };
  },
  setup() {
    const store = useStore();
    const getterString = "reminders/getAll";
    const dispatchString = "reminders/fetchAll";

    const storeData = computed(() => store.getters[getterString]);

    // Fetch on component mount
    onMounted(async () => {
      await store.dispatch(dispatchString);
    });

    return { storeData };
  },
  methods: {
    reminderClicked(reminder) {
      // Open Reminder form?
      var message = `Reminder card clicked | Data: ${JSON.stringify(reminder)}`;
      console.log(message);
    },
  },
};
</script>
