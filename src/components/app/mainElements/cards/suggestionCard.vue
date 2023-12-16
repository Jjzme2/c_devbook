<template>
  <div class="suggestion-card" @click="emitData">
    <div v-if="editable">
      <input type="text" v-model="suggestion.name" />
    </div>
    <div v-else>
      <h1 class="suggestion-title">{{ suggestion.name }}</h1>
    </div>
    <hr />
    <div v-if="editable">
      <textarea v-model="suggestion.description" rows="10" cols="50"></textarea>
    </div>
    <div v-else>
      <p class="suggestion-description">
        Details: <br />{{ suggestion.description }}
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
      suggestion: {
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
    this.$store.dispatch("suggestions/fetchAll");
    this.suggestion = this.$store.getters["suggestions/getById"](this.id);
  },
  methods: {
    toggleEditable() {
      this.editable = !this.editable;
    },
    emitData() {
      this.$emit("clicked", {
        id: this.id,
        name: this.suggestion.name,
        description: this.suggestion.description,
        created_on: this.suggestion.createdOn,
        modified_on: this.suggestion.modifiedOn,
      });
    },
    sendUpdatedInfo() {
      //   this.$store.dispatch("suggestions/update", this.suggestion);
      console.log(this.suggestion);
      this.editable = false;
    },
  },
};
</script>
