<template>
  <div class="reminder-card" @click="emitData">
    <div v-if="editable">
      <input type="text" v-model="reminder.name" />
    </div>
    <div v-else>
      <h1 class="reminder-title">{{ reminder.name }}</h1>
    </div>
    <hr />
    <div v-if="editable">
      <textarea v-model="reminder.description" rows="10" cols="50"></textarea>
    </div>
    <div v-else>
      <p class="reminder-description">
        Details: <br />{{ reminder.description }}
      </p>
    </div>

    <button @click="toggleEditable" class="send-button">
      {{ !editable ? "Edit" : "Close" }}
    </button>
    <button v-if="editable" @click="sendUpdatedInfo" class="send-button">
      Send
    </button>
  </div>
</template>

<script>
export default {
  name: "dashboardCard",
  components: {},
  data() {
    return {
      reminder: {
        name: "",
        description: "",
        createdOn: "",
        modifiedOn: "",
      },
      editable: false,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.$store.dispatch("reminders/fetchAll");
    this.reminder = this.$store.getters["reminders/getById"](this.id);
  },
  methods: {
    toggleEditable() {
      this.editable = !this.editable;
    },
    emitData() {
      this.$emit("clicked", {
        id: this.id,
        name: this.reminder.name,
        description: this.reminder.description,
        created_on: this.reminder.createdOn,
        modified_on: this.reminder.modifiedOn,
      });
    },
    sendUpdatedInfo() {
      //   this.$store.dispatch("reminders/update", this.reminder);
      console.log(this.reminder);
      this.editable = false;
    },
  },
};
</script>
