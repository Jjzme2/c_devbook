<template>
  <div class="dropdown" v-if="editable">
    <select v-model="selected" @change="change">
      <option :value="selected" disabled>
        {{
          options.find((option) => option.id == $props.defaultValue)?.name ||
          "Select an option"
        }}
      </option>

      <hr />

      <option v-for="option in options" :key="option.id" :value="option.id">
        <p>{{ option.name }}</p>
        <sub v-if="showDescription"> -- {{ option.description }}</sub>
      </option>
    </select>
  </div>
  <div v-else>
    <p>
      {{
        options.find((option) => option.id == $props.defaultValue)?.name ||
        "Select an option"
      }}
    </p>
  </div>
</template>

<script>
export default {
  name: "commonDataDropdown",
  data() {
    return {
      selected: "",
    };
  },
  props: {
    apiName: {
      type: String,
      required: true,
    },
    defaultValue: {
      type: String,
      default: "",
    },
    showDescription: {
      type: Boolean,
      default: false,
    },
    editable: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.$store.dispatch(`${this.apiName}/fetchAll`);
  },
  computed: {
    options() {
      return this.$store.getters[`${this.apiName}/getAll`];
    },
  },
  methods: {
    change() {
      this.$emit("changed", this.selected);
    },
  },
};
</script>
