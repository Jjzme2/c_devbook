<template>
  <button :class="classes" :disabled="disabled" @click="onClick">
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: {
    text: {
      type: String,
      default: "Continue",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    classes: {
      type: String,
      default: "center",
    },
  },
  methods: {
    onClick() {
      this.$emit("clicked");
    },
  },
};
</script>
