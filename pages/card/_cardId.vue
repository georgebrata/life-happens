<template>
  <div class="container-fluid" style="padding-top: 8px;">
    <a-row :gutter="16">
      <a-col :span="24">
        <h1>{{cards[0].title}}</h1>
      </a-col>
      <a-col :span="24">
        <a-tabs>
          <a-tab-pane tab="Settings" key="1">
            <edit-card-form :card="cards[0]"></edit-card-form>
          </a-tab-pane>
          <a-tab-pane tab="Data" key="2">
            <edit-card-data :card="cards[0]" @newLog="newLog"></edit-card-data>
          </a-tab-pane>
          <a-tab-pane tab="Card Theme" key="3">
            <edit-card-theme :card="cards[0]"></edit-card-theme>
          </a-tab-pane>
          <a-tab-pane tab="Visualization" key="4">
            <card-visualization :card="cards[0]"></card-visualization>
          </a-tab-pane>
          <a-button type="danger" slot="tabBarExtraContent">Delete card</a-button>
        </a-tabs>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import EditCardForm from "~/components/cards/EditCardForm.vue";
import EditCardData from "~/components/cards/EditCardData.vue";
import EditCardTheme from "~/components/cards/EditCardTheme.vue";
import CardVisualization from "~/components/cards/CardVisualization.vue";
import { Chart } from "highcharts-vue";

export default {
  layout: "canvas",
  components: {
    Logo,
    EditCardForm,
    EditCardData,
    EditCardTheme,
    CardVisualization,
    highcharts: Chart
  },
  methods: {
    newLog: function(newLog) {
      //check card type and call appropiate method
      this.cards[0].data.logs.push(newLog);
      console.log("NEW LOG: ", this.cards[0].data.logs);
    }
  },
  data() {
    return {
      cards: [
        {
          id: "dad2f381-f380-4e2f-9414-63ab9277ad47",
          xOffset: 124,
          yOffset: 208,
          width: 349,
          height: 382,
          type: "tally",
          category: "personal",
          title: "1st tally card",
          description: "Kirk",
          createdAt: "Fri Aug 28 2015 06:47:30 GMT+0000",
          data: {
            logs: [
              {
                label: "amet",
                date: "Sun Apr 19 2015 11:34:51 GMT+0000",
                value: 0
              },
              {
                label: "amet",
                date: "Thu Jun 15 2016 10:21:26 GMT+0000",
                value: 4
              },
              {
                label: "amet",
                date: "Sun Jan 03 2017 13:13:12 GMT+0000",
                value: 5
              }
            ]
          }
        },

        {
          id: "bb3cba68-2b5a-42ea-b59b-8b2c1b336689",
          xOffset: 62,
          yOffset: 443,
          width: 432,
          height: 332,
          type: "progress",
          category: "personal",
          title: "Janie",
          description: "Stephens",
          createdAt: "Sat Apr 05 2014 10:15:46 GMT+0000",
          data: {
            logs: [
              {
                label: "est",
                date: "Sat Jun 02 2018 00:31:59 GMT+0000",
                value: 606,
                total: 527
              },
              {
                label: "ipsum",
                date: "Sun Jun 12 2016 10:22:34 GMT+0000",
                value: 401,
                total: 840
              },
              {
                label: "qui",
                date: "Thu Jun 21 2018 11:40:23 GMT+0000",
                value: 72,
                total: 549
              }
            ]
          }
        },
        {
          id: "1581bbbe-2d67-474a-aec5-4f764c543758",
          xOffset: 143,
          yOffset: 977,
          width: 461,
          height: 444,
          type: "progress",
          category: "work",
          title: "Hinton",
          description: "Dickerson",
          createdAt: "Mon Jun 06 2016 09:42:46 GMT+0000",
          data: {
            logs: [
              {
                label: "nulla",
                date: "Mon May 09 2016 17:02:14 GMT+0000",
                value: 463,
                total: 605
              },
              {
                label: "veniam",
                date: "Fri Nov 01 2019 00:47:27 GMT+0000",
                value: 292,
                total: 898
              },
              {
                label: "id",
                date: "Mon Jun 10 2019 03:31:49 GMT+0000",
                value: 660,
                total: 590
              }
            ]
          }
        },
        {
          id: "c349d649-3ad8-4121-a57b-ea94a01760ae",
          xOffset: 3,
          yOffset: 101,
          width: 408,
          height: 336,
          type: "progress",
          category: "personal",
          title: "Hendricks",
          description: "Molina",
          createdAt: "Fri Jul 31 2015 04:15:50 GMT+0000",
          data: {
            logs: [
              {
                label: "ut",
                date: "Mon Dec 05 2016 14:26:16 GMT+0000",
                value: 638,
                total: 668
              },
              {
                label: "deserunt",
                date: "Tue Sep 17 2019 06:59:11 GMT+0000",
                value: 316,
                total: 799
              },
              {
                label: "et",
                date: "Tue Dec 23 2014 23:52:26 GMT+0000",
                value: 771,
                total: 878
              }
            ]
          }
        },
        {
          id: "542f1fee-a2ae-400e-b279-c7f911fc9703",
          xOffset: 710,
          yOffset: 754,
          width: 302,
          height: 414,
          type: "tally",
          category: "work",
          title: "Page",
          description: "Kaufman",
          createdAt: "Fri Oct 28 2016 05:57:49 GMT+0000",
          data: {
            logs: [
              {
                label: "fugiat",
                date: "Thu Sep 21 2017 12:34:05 GMT+0000",
                value: 481,
                total: 622
              },
              {
                label: "quis",
                date: "Tue Oct 15 2019 04:11:43 GMT+0000",
                value: 442,
                total: 790
              },
              {
                label: "deserunt",
                date: "Sat Sep 26 2015 14:23:31 GMT+0000",
                value: 708,
                total: 683
              }
            ]
          }
        }
      ],
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
  text-align: center;
}
.ant-card-body {
  text-align: center;
}
</style>
