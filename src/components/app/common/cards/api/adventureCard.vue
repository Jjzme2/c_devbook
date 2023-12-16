<template>
  <div class="card card-adventure">
    <h1>{{ item.name }}</h1>
    <p class="subtle small">By: {{ item.pseudonym }}</p>
    <p class="subtle large">{{ item.description }}</p>
  </div>
</template>

<script>
export default {
  name: "adventureCard",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>
