<template>
  <div class="hilight" :class="color">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "highlightText",
  props: {
    color: {
      type: String,
      default: "yellow",
    },
  },
};
</script>

<style scoped>
.hilight {
  width: fit-content;
  display: inline-block;
}

.yellow {
  background-color: yellow;
  color: black;
}

.green {
  background-color: green;
  color: white;
}

.red {
  background-color: red;
  color: white;
}

.blue {
  background-color: blue;
  color: white;
}

.purple {
  background-color: purple;
  color: black;
}

.orange {
  background-color: orange;
  color: white;
}

.pink {
  background-color: pink;
  color: black;
}

.brown {
  background-color: brown;
  color: white;
}
</style>
