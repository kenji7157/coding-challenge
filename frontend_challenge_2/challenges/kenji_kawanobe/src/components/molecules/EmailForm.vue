<template>
  <div>
    <b-label :is-required="true"></b-label>
    <b-input v-model="simulationData.email" :disabled="disabled"></b-input>
    <b-error-message v-if="isError">
      <template v-slot:message
        >メールアドレスを正しく入力してください。</template
      >
    </b-error-message>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from "vue-property-decorator";
import BLabel from "@/components/atoms/BLabel.vue";
import BInput from "@/components/atoms/BInput.vue";
import BErrorMessage from "@/components/atoms/BErrorMessage.vue";
import { isValidEmail as isValidEmailUtil } from "@/util/validationUtil";
import { ISimulation } from "@/types";

@Component({
  components: {
    BLabel,
    BInput,
    BErrorMessage,
  },
})
export default class EmailForm extends Vue {
  @Prop({ type: Object }) simulationData!: ISimulation;
  @Prop({ type: Boolean, default: false }) disabled!: boolean;

  isError = false;

  @Watch("simulationData.email")
  check(): void {
    this.isError = !isValidEmailUtil(this.simulationData.email);
  }
}
</script>
