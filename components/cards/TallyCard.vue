<template>
  <a-card :title="card.title" hoverable :loading="isLoading">
    <a href="#" slot="extra">
      <a-icon type="edit" title="Edit card" style="padding: 0 5px;" class="hover-visible" />
      <a-icon type="copy" title="Copy to clipboard" style="padding: 0 5px;" class="hover-visible" />
      <a-icon type="info-circle" style="padding: 0 5px;" />
    </a>
    <h1>{{tallyValue}}</h1>
    <template class="ant-card-actions" slot="actions">
      <a-icon type="minus" class="m2" @click="decrementValue" />
      <a-input-number size="large" :min="1" :max="10000" :defaultValue="value" @change="onChange" />
      <a-icon type="plus" class="m2" @click="incrementValue" />
    </template>
    <a-card-meta :title="tallyLabel"></a-card-meta>
    <div class="last-update-label">Last updated on {{tallyLastUpdateDate}}</div>
  </a-card>
</template>

<script lang="ts">
import { createComponent, computed, reactive, ref } from "@vue/composition-api";

export default createComponent({
  name: "TallyCard",
  props: {
    card: Object
  },
  setup({ card }, { emit }) {
    let value = 1;
    let isLoading = false;
    const tallyValue = computed(
      () => card.data.logs[card.data.logs.length - 1].value
    );
    const tallyLabel = computed(
      () => card.data.logs[card.data.logs.length - 1].label
    );
    const tallyLastUpdateDate = computed(() => card.data.logs[card.data.logs.length - 1].date);

    function onChange(e) {
      value = e;
    }

    function incrementValue() {
      let newLog = {
        value: card.data.logs[card.data.logs.length - 1].value + value,
        date: new Date(),
        label: card.data.logs[card.data.logs.length - 1].label
      };
      emit("newLog", newLog);
    }

    function decrementValue() {
      let newLog = {
        value: card.data.logs[card.data.logs.length - 1].value - value,
        date: new Date(),
        label: card.data.logs[card.data.logs.length - 1].label
      };
      emit("newLog", newLog);
    }

    return {
      isLoading,
      value,
      tallyValue,
      tallyLabel,
      tallyLastUpdateDate,
      onChange,
      incrementValue,
      decrementValue
    };
  }
});
</script>
<style>
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