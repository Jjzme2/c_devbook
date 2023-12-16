<template>
  <div class="goal-card" @click="emitData">
    <div class="goal-header">
      <h1>{{ goal.name }}</h1>
      <sub>{{ goal.motivation }}</sub>
      <hr />
      <p>Due: {{ goal.dueDate }}</p>
      <p class="goal-status">Status: {{ goal.status }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "dashboardCard",
  data() {
    return {
      goal: {
        name: "",
        description: "",
        status: "",
        createdOn: "",
        updatedOn: "",
        notes: {
          notes: [],
        },
      },
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.$store.dispatch("goals/fetchAll");
    this.goal = this.$store.getters["goals/getById"](this.id);
  },
  methods: {
    emitData() {
      this.$emit("clicked", {
        id: this.id,
        name: this.goal.name,
        description: this.goal.description,
        status: this.goal.status,
        created_on: this.goal.created_on,
        updated_on: this.goal.updated_on,
        notes: this.goal.notes,
      });

      this.$router.push({ name: "formsGoal", params: { goalId: this.id } });
    },
    setComplete(event) {
      const isChecked = event.target.checked;
      console.log(isChecked);
    },
  },
};
</script>
