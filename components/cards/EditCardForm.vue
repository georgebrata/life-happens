<template>
  <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
    <a-form>
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Card name">
        <a-input v-model="card.title" placeholder="please enter a cool name" />
      </a-form-item>
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Card name">
        <a-textarea v-model="card.description" placeholder="please enter a cool description" />
      </a-form-item>
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Categories" has-feedback>
        <a-checkbox-group style="width: 100%;" v-model="card.categories">
          <a-row class="pt2">
            <a-col :span="8">
              <a-checkbox value="personal">Personal</a-checkbox>
            </a-col>
            <a-col :span="8">
              <a-checkbox value="work">Work</a-checkbox>
            </a-col>
          </a-row>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Type" has-feedback>
        <a-radio-group v-model="card.type" :defaultValue="card.type" buttonStyle="solid">
          <a-radio-button value="countdown">Countdown</a-radio-button>
          <a-radio-button value="tally">Tally</a-radio-button>
          <a-radio-button value="progress">Progress</a-radio-button>
        </a-radio-group>
      </a-form-item>
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="." has-feedback>
        <span>Created {{createdDate}}</span>
      </a-form-item>
    </a-form>

    <a-form v-if="card.type=='countdown'">
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Last tick date">
        <a-date-picker style="width: 100%" v-model="countdownDate" />
      </a-form-item>
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Last tick hour">
        <a-time-picker style="width: 100%" v-model="countdownDate" />
      </a-form-item>
    </a-form>

    <a-form v-if="card.type=='tally'">
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Default step">
        <a-input-number v-model="card.data.defaultStep" placeholder="don't do 1" />
      </a-form-item>
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Label">
        <a-input
          v-model="card.data.logs[card.data.logs.length-1].label"
          placeholder="please use a cool label"
        />
      </a-form-item>
    </a-form>

    <a-form v-if="card.type==='progress'">
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Default step">
        <a-input-number v-model="card.data.defaultStep" placeholder="don't do 1" />
      </a-form-item>
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Label">
        <a-input
          v-model="card.data.logs[card.data.logs.length-1].label"
          placeholder="please use a cool label"
        />
      </a-form-item>
      <a-form-item :label-col="labelCol" :wrapper-col="wrapperCol" label="Total">
        <a-input-number
          v-model="card.data.logs[card.data.logs.length-1].total"
          placeholder="DREAM BIG!"
        />
      </a-form-item>
    </a-form>
    <a-form>
      <a-form-item :wrapper-col="{ span: 12, offset: 5 }">
        <a-button :loading="state.isLoading" type="primary" block icon="check" @click="handleSaveChanges">Save changes</a-button>
      </a-form-item>
    </a-form>
  </a-layout-content>
</template>

<script>
import { createComponent, computed, reactive, ref } from "@vue/composition-api";
import { format } from "timeago.js";
import moment from "moment";

export default createComponent({
  name: "CountdownCard",
  props: {
    card: Object
  },
  setup({ card }, { emit }) {
    let state = reactive({ newLogMode: false, value: null, isLoading: false });
    let labelCol = reactive({
      xs: { span: 24 },
      sm: { span: 5 }
    });
    let wrapperCol = reactive({
      xs: { span: 24 },
      sm: { span: 12 }
    });

    let currentLabel = computed(() => card.data.label);
    let createdDate = computed(() => format(card.createdAt));
    let countdownDate = computed(() => moment(card.data.date));

    function handleSaveChanges() {
      console.log("SAVE CHANGES: ")
      emit('updateCard', {})
    }

    return {
      state,
      labelCol,
      wrapperCol,
      currentLabel,
      createdDate,
      countdownDate,
      handleSaveChanges
    };
  }
});
</script>
