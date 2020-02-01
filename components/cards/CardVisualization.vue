<template>
  <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
    <highcharts :options="chartOptions"></highcharts>
  </a-layout-content>
</template>

<script>
import { createComponent, computed, reactive, ref } from "@vue/composition-api";
import { format } from "timeago.js";
import { Chart } from "highcharts-vue";


export default createComponent({
  name: "CountdownCard",
  props: {
    card: Object,
    highcharts: Chart
  },
  setup({ card }, { emit }) {
    let chartOptions = reactive({
        chart: {
          type: "spline"
        },
        title: {
          text: card.title
        },
        series: [
          {
            data: card.data.logs && card.data.logs.map(x => parseInt(x.value)),
            color: "#6fcd98"
          }
        ]
      });


    let createdDate = computed(() => format(card.createdAt));

    return {
      chartOptions,
      createdDate
    };
  }
});
</script>
