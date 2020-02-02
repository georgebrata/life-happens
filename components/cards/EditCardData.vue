<template>
  <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
    <a-list
      class="comment-list"
      :header="`${card.data.logs.length} logs`"
      itemLayout="horizontal"
      :dataSource="card.data && card.data.logs"
    >
      <a-list-item slot="renderItem" slot-scope="item">
        <a-comment>
          <p slot="content">{{item && item.value}} {{item && item.label}}</p>
          <a-tooltip slot="datetime" :title="item.date">
            <span>{{getFormatedDate(item.date)}}</span>
          </a-tooltip>
        </a-comment>
      </a-list-item>
    </a-list>
    <hr class="m4">
    <h2 class="m2"><a-icon type="plus" class="mr2"></a-icon>Add new log</h2>
    <a-comment>
      <div slot="content">
        <a-form-item>
          <a-input :rows="4" @change="handleChange" :value="value" :addonAfter="getLabel"></a-input>
        </a-form-item>
        <a-form-item>
          <a-button
            htmlType="submit"
            :loading="submitting"
            @click="handleSubmit"
            type="primary"
          >Add new log</a-button>
        </a-form-item>
      </div>
    </a-comment>
  </a-layout-content>
</template>
<script>
import moment from "moment";
import { format } from "timeago.js";

export default {
  props: {
    card: Object
  },
  computed: {
    getLabel: function() {
      if(this.card.data.logs.length > 0) {
        return this.card.data.logs[this.card.data.logs.length-1].label
      } else {
        return '-'
      }
    }
  },
  methods: {
    getFormatedDate: function(date) {
      console.log(this)
      return format(date);
    },
    handleSubmit() {
      if (!this.value) {
        return;
      }
      this.submitting = true;
      const newLog = {
        value: this.value,
        date: new Date(),
        label: getLabel
      }

      setTimeout(() => {
        this.submitting = false;
        this.$emit('newLog', newLog)
      }, 1000);
    },
    handleChange(e) {
      this.value = e.target.value;
    }
  },
  data() {
    return {
      comments: [],
      submitting: false,
      value: "",
      moment,
      data: [
        {
          actions: ["Reply to"],
          author: "Han Solo",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
          datetime: moment().subtract(1, "days")
        },
        {
          actions: ["Reply to"],
          author: "Han Solo",
          avatar:
            "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
          content:
            "We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
          datetime: moment().subtract(2, "days")
        }
      ]
    };
  }
};
</script>
<style>
.ant-list-header {
  font-size: 20px;
  font-weight: 600;
  text-align: center;
}
.ant-list-item {
  padding: 0;
}
.ant-list-item-content-single {
  justify-content: center;
}
</style>