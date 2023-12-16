<template>
  <div class="test-component">
    <h3>You can see the content of your API call below:</h3>
    <p>{{ APIContent }}</p>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { onMounted, computed } from "vue";

/**
 * APITester
 * @description A Vue component for testing API calls.
 * @prop {String} getterString - The VUEX getter string that will be used to fetch the data.
 * @prop {String} dispatchCall - The VUEX dispatch call that will be made to fetch the data.
 * @prop {Object} dataToPass - The data that will be passed to the dispatch call.
 */

export default {
  name: "ApiTester",
  props: {
    getterString: {
      type: String,
      default: "quotes/getAll",
      //Helper message: This is the VUEX getter string that will be used to fetch the data
    },
    dispatchCall: {
      type: String,
      default: "quotes/fetchAll",
      //Helper message: This is the VUEX dispatch call that will be made to fetch the data
    },
    dataToPass: {
      type: Object,
      default: () => ({}),
      //Helper message: This is the data that will be passed to the dispatch call
    },
  },
  setup(props) {
    // Get store
    const store = useStore();
    // Define reactive data
    const APIContent = computed(() => store.getters[props.getterString]);

    // Fetch and update data on component mount
    onMounted(async () => {
      await store.dispatch(
        props.dispatchCall,
        props.dataToPass ? props.dataToPass : {}
      );
    });

    return { APIContent };
  },
};
</script>

<style scoped>
.test-component {
  background-color: var(--primary-background-color);
  border-radius: 8px;
  padding: 20px;
  text-align: center;
  box-shadow: var(--primary-shadow);
  margin: 0 auto; /* Center the component horizontally within its parent */
}

h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}
</style>
