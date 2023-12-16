<template>
  <div class="data-list-item">
    <!-- Render each property of the item -->
    <div v-for="(value, key) in item" :key="key" class="data-list-property">
      <template v-if="!shouldHide(key)">
        <strong>{{ showLabels ? key + ":" : "" }}</strong>
        <p>{{ value }}</p>
      </template>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

/**
 * @name DataListItem
 * @description A Vue component for displaying a JSON object within a list.
 * @props {Object} item - The JSON object to display.
 * @props {Array} hideKeys - An array of keys to hide in the displayed JSON object.
 */
export default defineComponent({
  name: "DataListItem",
  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({}),
    },
    hideKeys: {
      type: Array,
      default: () => [],
    },
    showLabels: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    shouldHide(key) {
      return this.hideKeys.includes(key);
    },
  },
});
</script>

<style scoped>
.data-list-item {
  border: var(--primary-border);
  padding: 10px;
  margin-bottom: 10px;
}

.data-list-property {
  margin-bottom: 5px;
}
</style>
