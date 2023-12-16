<template>
  <div>
    <h1>API Items</h1>
    <div v-if="items.length">
      <div v-for="item in items" :key="item.id">
        ---
        <p>{{ item }}</p>
        ---
      </div>
    </div>
    <div v-else>
      <p>Unable to find any items that meet the specified criteria.</p>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, onMounted } from "vue";
const data = "questions";
const otherDataToPass = "approved";

export default {
  name: "ApiList",
  setup() {
    const store = useStore();

    onMounted(() => {
      store.dispatch(`${data}/getConditional`, otherDataToPass);
    });

    const items = computed(() => store.getters[`${data}/getAll`]);

    return { items };
  },
};
</script>

<style scoped></style>
