<template>
  <div class="container-fluid" style="padding-top: 8px;">
    <a-row :gutter="16">
      <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
          <highcharts :options="chartOptions"></highcharts>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card hoverable>
          <a href="#" slot="extra">
            <a-icon type="edit" title="Edit card" style="padding: 0 5px;" class="hover-visible" />
            <a-icon
              type="copy"
              title="Copy to clipboard"
              style="padding: 0 5px;"
              class="hover-visible"
            />
            <a-icon type="info-circle" style="padding: 0 5px;" />
          </a>
          <a-progress :percent="100" size="small" slot="cover" />
          <a-progress :percent="100" size="small" type="circle" slot="cover" />

          <template class="ant-card-actions" slot="actions">
            <a-icon type="minus" />
            <a-icon type="plus" />
          </template>
          <a-card-meta title="Card title" description="This is the description" justify="center"></a-card-meta>
        </a-card>
      </a-col>
      <a-col :span="8">
        <a-card :loading="true" title="Card title" :bordered="false">
          <p>card content</p>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import { Chart } from "highcharts-vue";

export default {
  layout: "canvas",
  components: {
    Logo,
    highcharts: Chart
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: "spline"
        },
        title: {
          text: "Sin chart"
        },
        series: [
          {
            data: [10, 0, 8, 2, 6, 4, 5, 5],
            color: "#6fcd98"
          }
        ]
      }
    };
  }
};
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

.hover-visible {
  opacity: 0;
  transition: opacity 0.5s;
}
.ant-card-extra:hover .hover-visible {
  opacity: 1;
}
.ant-card-cover {
  padding: 10px 20px;
}
</style>
