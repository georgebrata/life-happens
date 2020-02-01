<template>
  <a-card :title="card.title" hoverable :loading="state.isLoading">
    <a href="#" slot="extra">
      <a-icon type="edit" title="Edit card" style="padding: 0 5px;" class="hover-visible" />
      <a-icon type="copy" title="Copy to clipboard" style="padding: 0 5px;" class="hover-visible" />
      <a-icon type="info-circle" style="padding: 0 5px;" />
    </a>
    <a-progress type="circle" :percent="percent" class="mb2" />
    <template class="ant-card-actions" slot="actions">
      <a-icon v-if="state.newLogMode" type="minus" class="m2" @click="decrementValue" />
      <a-input-number
        placeholder="how much?"
        v-if="state.newLogMode"
        size="large"
        :min="1"
        :max="10000"
        v-model="state.value"
      />
      <a-icon v-if="state.newLogMode" type="plus" class="m2" @click="incrementValue" />
      <div v-else class="m2" @click="toggleNewLogMode">NEW LOG</div>
    </template>
    <a-card-meta :title="displayLabel"></a-card-meta>
    <div class="last-update-label">Created {{creationDate}}, last updated {{lastUpdateDate}}</div>
  </a-card>
</template>

<script>
import { createComponent, computed, reactive, ref } from "@vue/composition-api";
import { format } from "timeago.js";

export default createComponent({
  name: "ProgressCard",
  props: {
    card: Object
  },
  setup({ card }, { emit }) {
    let state = reactive({ newLogMode: false, value: null, isLoading: false });

    const currentValue = computed(
      () => card.data.logs[card.data.logs.length - 1].value
    );
    const creationDate = computed(() => format(card.createdAt));

    let currentLabel = computed(
      () => card.data.logs[card.data.logs.length - 1].label
    );

    let currentTotal = computed(() =>
      parseInt(card.data.logs[card.data.logs.length - 1].total)
    );

    let displayLabel = computed(
      () =>
        currentValue.value +
        " " +
        currentLabel.value +
        " out of " +
        currentTotal.value
    );

    let lastUpdateDate = computed(() =>
      format(card.data.logs[card.data.logs.length - 1].date)
    );
    const percent = computed(() =>
      parseInt((currentValue.value * 100) / currentTotal.value)
    );

    function toggleNewLogMode() {
      state.newLogMode = !state.newLogMode;
    }

    function onChange(e) {
      state.value = e;
    }

    function incrementValue() {
      let newLog = {
        value: card.data.logs[card.data.logs.length - 1].value + state.value,
        date: new Date(),
        total: card.data.logs[card.data.logs.length - 1].total,
        label: card.data.logs[card.data.logs.length - 1].label
      };
      toggleNewLogMode();
      emit("newLog", newLog);
    }

    function decrementValue() {
      let newLog = {
        value: card.data.logs[card.data.logs.length - 1].value - state.value,
        date: new Date(),
        total: card.data.logs[card.data.logs.length - 1].total,
        label: card.data.logs[card.data.logs.length - 1].label
      };
      toggleNewLogMode();
      emit("newLog", newLog);
    }

    return {
      state,
      currentValue,
      creationDate,
      currentLabel,
      currentTotal,
      displayLabel,
      lastUpdateDate,
      percent,
      onChange,
      incrementValue,
      decrementValue,
      toggleNewLogMode
    };
  }
});
</script>
<style scoped>
.ant-input-number-input {
  text-align: center !important;
}
.ant-input-number.ant-input-number-lg {
  width: 100%;
}
.ant-card-actions li {
  margin: 5px 0px;
}

.ant-input-number {
  border: 0;
  background: #fafafa;
}
.last-update-label {
  width: 100%;
  padding: 30px 5px 0px 5px;
  opacity: 0.75;
}
</style>