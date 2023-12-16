<template>
  <BaseView :includeHeader="false">
    <div class="goal-form-main" v-if="goal.id">
      <div class="input-area" v-if="this.$route.params.goalId == 0">
        <!-- <label for="goalName">Goal:</label> -->
        <input
          id="goalName"
          type="text"
          placeholder="Goal Title"
          v-model="goal.name"
        />
      </div>
      <editTextOnClick
        id="goalDescription"
        :text="goal.description"
        @text-updated="goal.description = $event"
      ></editTextOnClick>

      <!-- Dropdown for status options -->
      <div class="input-area">
        <label for="goalStatus">Status:</label>
        <select id="goalStatus" v-model="goal.status">
          <option value="0">Not Started</option>
          <option value="1">In Progress</option>
          <option value="2">Completed</option>
        </select>
      </div>

      <!-- Dropdown for Motivation options -->

      <div class="input-area">
        <label for="goalMotivation">Motivation:</label>
        <select id="goalMotivation" v-model="goal.motivation">
          <option value="0">Not Motivated</option>
          <option value="1">Motivated</option>
          <option value="2">Very Motivated</option>
        </select>
      </div>

      <!-- Separate the primary info from the secondary info cleanly. CSS stuff. -->

      <div class="goal-form-dates">
        <p>
          Created:
          {{ this.$stringUtils.convertToReadableDateTime(goal.createdOn) }}
        </p>

        <p>
          Updated:
          {{ this.$stringUtils.convertToReadableDateTime(goal.modifiedOn) }}
        </p>
      </div>

      <div class="goal-form-section">
        <h1>Notes:</h1>
        <button class="send-button" @click="addNote">📝</button>

        <div class="goal-form-list" v-if="goal.notes.length">
          <div
            class="goal-form-card"
            v-for="note in JSON.parse(goal.notes)"
            :key="note"
          >
            <unfoldForm
              :prompt="note.name"
              antiPrompt="Close"
              formPosition="above"
              :showSend="false"
            >
              <editTextOnClick :modelStart="note.detail"></editTextOnClick>
            </unfoldForm>
          </div>

          <!--
          <div
            class="goal-form-card"
            v-for="note in JSON.parse(goal.notes)"
            :key="note"
          >
            Name: {{ note.name }} <br />
            Detail: {{ note.detail }}
          </div> -->
        </div>
      </div>

      <div class="goal-form-section">
        <h1>Tasks:</h1>
        <button class="send-button" @click="addTask">📝</button>

        <div class="goal-form-list" v-if="goal.tasks.length">
          <div
            class="goal-form-card"
            v-for="task in JSON.parse(goal.tasks)"
            :key="task"
          >
            Name: {{ task.name }} <br />
            Detail: {{ task.detail }} <br />
            Completed: {{ task.completed ? "👍" : "👎" }} <br />
            Follow Up Notes:
            {{
              task.followUpNotes
                ? task.followUpNotes
                : task.completed
                ? "No Follow Up Notes"
                : "Not Completed"
            }}
          </div>
        </div>
      </div>
      <button @click="save" class="send-button">Save</button>
    </div>

    <div v-else>
      <h1>Goal Not Found</h1>
    </div>
  </BaseView>
</template>

<script>
import BaseView from "@/views/main/BaseView.vue";
import unfoldForm from "@/components/app/common/unfolds/UnfoldForm.vue";
import editTextOnClick from "@/components/app/common/text/editableOnClick.vue";

export default {
  name: "GoalForm",
  components: {
    BaseView,
    unfoldForm,
    editTextOnClick,
  },

  beforeMount() {
    this.$store.dispatch("goals/fetchAll");
    this.$store.dispatch("goals/getEmpty");
  },
  computed: {
    goalId() {
      return this.$route.params.goalId;
    },
    goal() {
      return this.$store.getters["goals/getById"](this.goalId);
    },
  },
  methods: {
    save() {
      this.$store.dispatch("goals/createNew", this.goal);
      //       this.$emit("clicked", {
      //     id: this.id,
      //     name: this.goal.name,
      //     description: this.goal.description,
      //     status: this.goal.status,
      //     created_on: this.goal.created_on,
      //     updated_on: this.goal.updated_on,
      //     notes: this.goal.notes,
      //     tasks: this.goal.tasks,
      //   });
    },
    addNote() {
      console.log("Add Note");
    },
    addTask() {
      console.log("Add Task");
    },
  },
};
</script>
