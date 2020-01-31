<template>
  <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
    <highcharts :options="chartOptions"></highcharts>
  </a-layout-content>
</template>
<script>
import { Chart } from "highcharts-vue";

export default {
  props: {
    card: Object,
    highcharts: Chart
  },
  data() {
    console.log(this.card.data.logs.map(x => x.value))
    return {
      chartOptions: {
        chart: {
          type: "spline"
        },
        title: {
          text: this.card.title
        },
        series: [
          {
            data: this.card.data.logs.map(x => parseInt(x.value))
            color: "#6fcd98"
          }
        ]
      }
    };
  }
};
</script>
