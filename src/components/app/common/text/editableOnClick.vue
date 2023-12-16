<template>
  <div>
    <div v-if="!editing" @click="startEditing">{{ text }}</div>
    <input
      v-if="editing"
      v-model="editedText"
      @keyup.enter="saveText"
      @blur="cancelEditing"
      ref="textInput"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      editing: false,
      editedText: "",
    };
  },
  props: {
    text: String,
  },
  methods: {
    startEditing() {
      this.editing = true;
      this.editedText = this.text;

      // Focus on the input field after it's rendered
      this.$nextTick(() => {
        this.$refs.textInput.focus();
      });
    },
    saveText() {
      this.editing = false;
      // Emit an event to notify the parent component about the edited text
      this.$emit("text-updated", this.editedText);
    },
    cancelEditing() {
      this.editing = false;
    },
  },
};
</script>

<style scoped>
/* Add your styling here if needed */
</style>
