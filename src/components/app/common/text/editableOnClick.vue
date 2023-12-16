<template>
  <div>
    <div v-if="!editing && !restrictEdit" @click="startEditing">{{ text }}</div>
    <div v-else-if="!editing && restrictEdit">
      <p>{{ text }}</p>
    </div>
    <div v-else>
      <input
        v-if="editing"
        v-model="editedText"
        @keyup.enter="saveText"
        @blur="cancelEditing"
        ref="textInput"
      />
      <br />
      <subText hilight="yellow"
        >You will need to press the `Enter/Return` key to save.</subText
      >
    </div>
  </div>
</template>

<script>
import subText from "@/components/app/common/text/subText.vue";
export default {
  name: "editableOnClick",
  components: {
    subText,
  },
  data() {
    return {
      editing: false,
      editedText: "",
    };
  },
  props: {
    text: String,
    restrictEdit: {
      type: Boolean,
      default: false,
    },
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
