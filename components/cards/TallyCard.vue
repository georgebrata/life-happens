<template>
  <a-card :title="card.title" hoverable :loading="state.isLoading" class="tally-card">
    <a href="#" slot="extra">
      <nuxt-link :to="'/card/' + card.id">
        <a-icon type="edit" style="padding: 0 5px;" />
      </nuxt-link>
    </a>
    <h1>{{currentValue}}</h1>
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
//import useState from '@/composables/useState'

import { createComponent, computed, reactive, ref } from "@vue/composition-api";
import { format } from "timeago.js";

export default createComponent({
  name: "TallyCard",
  props: {
    card: Object
  },
  setup({ card }, { root, emit }) {
    let state = reactive({
      newLogMode: false,
      value: card.data.defaultStep || null,
      isLoading: false,
      allCards: root.$store.getters.allCards
    });
/*
    console.log("all cards", state.allCards);
    function newCard() {
      root.$store.dispatch("ADD_CARD", {
        id: "1f571945-0b19-48d4-87ca-138c70b99974",
        xOffset: 696,
        yOffset: 796,
        width: 317,
        height: 490,
        type: "tally",
        categories: ["personal"],
        title: "ADDED",
        description: "Huber",
        createdAt: "Mon Nov 23 2015 06:45:26 GMT+0000",
        lastUpdate: "Sun Sep 23 2018 22:10:57 GMT+0000",
        data: {
          defaultStep: 1,
          logs: [
            {
              label: "enim",
              date: "Sun May 01 2016 16:42:59 GMT+0000",
              value: 333,
            }
          ]
        }
      })
    }*/

    const currentValue = computed(
      () => card.data.logs[card.data.logs.length - 1].value
    );
    const creationDate = computed(() => format(card.createdAt));

    let currentLabel = computed(
      () => card.data.logs[card.data.logs.length - 1].label
    );

    let displayLabel = computed(() => currentLabel.value);

    let lastUpdateDate = computed(() => format(card.lastUpdate));

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
      emit("newLog", card.id, newLog);
    }

    function decrementValue() {
      let newLog = {
        value: card.data.logs[card.data.logs.length - 1].value - state.value,
        date: new Date(),
        total: card.data.logs[card.data.logs.length - 1].total,
        label: card.data.logs[card.data.logs.length - 1].label
      };
      toggleNewLogMode();
      emit("newLog", card.id, newLog);
    }

    return {
      state,
      currentValue,
      creationDate,
      currentLabel,
      displayLabel,
      lastUpdateDate,
      onChange,
      incrementValue,
      decrementValue,
      toggleNewLogMode      
    };
  }
});
</script>
<style>
.tally-card .ant-input-number-input {
  text-align: center !important;
}
.tally-card .ant-input-number.ant-input-number-lg {
  width: 100%;
}
.tally-card .ant-card-actions li {
  margin: 5px 0px;
}
.tally-card .ant-input-number {
  border: 0;
  background: #fafafa;
}
.tally-card .last-update-label {
  width: 100%;
  padding: 30px 5px 0px 5px;
  opacity: 0.75;
}
</style>