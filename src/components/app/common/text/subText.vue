<template>
  <p :style="style">
    <slot></slot>
  </p>
</template>

<script>
export default {
  name: "SubText",
  props: {
    customColor: {
      type: String,
      default: "red",
    },
    fontSize: {
      type: String,
      default: ".65rem",
    },
    margin: {
      type: String,
      default: ".8rem auto",
    },
    hilight: {
      type: String,
      default: "transparent",
    },
  },
  computed: {
    style() {
      return {
        color: this.customColor,
        fontSize: this.fontSize,
        margin: this.margin,
        backgroundColor: this.hilight,
        width: "fit-content",
      };
    },
  },
};
</script>
