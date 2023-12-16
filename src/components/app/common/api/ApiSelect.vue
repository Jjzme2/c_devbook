<template>
  <div class="api-select">
    <select v-model="selectedApi" @change="handleApiChange">
      <option :value="defaultValue">{{ defaultText }}</option>
      <option v-for="api in apis" :key="api.id" :value="api.id">
        {{ getDisplayValue(api) }}
      </option>
    </select>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, ref, onMounted } from "vue";

/**
 * ApiSelect component to display and select APIs.
 * @component
 * @prop {String} getterString - String to access Vuex getter.
 * @prop {String} dispatchString - String to dispatch Vuex action.
 * @prop {String} [optionTextColumn="name"] - The column to use for the option text.
 * @prop {String} [defaultValue=""] - Default value for the select input.
 * @prop {String} [defaultText="Select an item"] - Default text for the select input.
 * @emits {Event} changed - Emitted when the selected API changes.
 *
 * @example
 * 	<ApiSelect
 *		:getterString="getter"
 *		:dispatchString="dispatch"
 *		:optionTextColumn="displayName"
 *		@changed="handleApiChange"
 *	></ApiSelect>
 */
export default {
  name: "ApiSelect",
  props: {
    getterString: {
      type: String,
      required: true,
    },
    dispatchString: {
      type: String,
      required: true,
    },
    optionTextColumn: {
      type: String,
      required: false,
      default: "name",
    },
    defaultValue: {
      type: String,
      required: false,
      default: "",
    },
    defaultText: {
      type: String,
      required: false,
      default: "Select an item",
    },
  },
  setup(props, { emit }) {
    const store = useStore();
    const apis = computed(() => store.getters[props.getterString]);
    const selectedApi = ref(props.defaultValue);

    onMounted(async () => {
      await store.dispatch(props.dispatchString, selectedApi.value);
    });

    /**
     * Handle the change of the selected API.
     * @param {Event} event - The change event.
     */
    const handleApiChange = (event) => {
      const selectedValue = event.target.value;
      selectedApi.value = selectedValue;
      // Emit the change event with the selected API
      emit("changed", {
        id: selectedValue,
        displayedText: event.target.selectedOptions[0].text,
        event: event,
      });
    };

    /**
     * Get the display value for the API.
     * @param {Object} api - The API object.
     * @returns {String} The display value for the API.
     */
    const getDisplayValue = (api) => {
      return api[props.optionTextColumn];
    };

    return { apis, selectedApi, handleApiChange, getDisplayValue };
  },
};
</script>
