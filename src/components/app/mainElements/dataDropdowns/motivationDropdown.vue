<template>
  <div class="dropdown">
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
</template>

<script>
export default {
  name: "motivationDropdown",
  data() {
    return {
      selected: "",
      apiName: "motivations",
    };
  },
  props: {
    defaultValue: {
      type: String,
      default: "",
    },
    showDescription: {
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
