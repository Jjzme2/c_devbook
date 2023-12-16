<template>
  <div class="select-form" :class="themes">
    <label v-if="label" for="customSelectMenu">{{ label }}</label>

    <select id="customSelectMenu" v-model="selected" @change="emitSelection">
      <option :value="0" disabled>
        {{ selectionOptions.defaultMessage }}
      </option>

      <option
        v-for="option in selectionOptions.options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.message }}
      </option>
    </select>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  name: "TheSelector",
  props: {
    selectionOptions: {
      type: Object,
      default: () => ({
        defaultMessage: "---Select an option---",
        options: [
          { value: "1", message: "One" },
          { value: "2", message: "Two" },
        ],
      }),
    },
    label: String,
    themes: String,
  },
  setup(props, { emit }) {
    const selected = ref("0");

    const emitSelection = () => {
      console.log("Emitting selection:", selected.value);
      emit("selectionMade", selected.value);
    };

    return {
      selected,
      emitSelection,
    };
  },
};
</script>
