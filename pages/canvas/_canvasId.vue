<template>
  <div class="container-fluid" style="padding-top: 8px;">
    <a-row :gutter="16">
      <!-- <a-col :span="8">
        <a-card title="Card title" :bordered="false">
          <p>card content</p>
          <highcharts :options="chartOptions"></highcharts>
        </a-card>
      </a-col> -->
      <a-col :span="12">
        <tally-card :card="cards[0]" @newLog="newTallyLog"></tally-card>
      </a-col>
      <a-col :span="12">
        <progress-card :card="cards[1]" @newLog="newProgressLog"></progress-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import TallyCard from "~/components/cards/TallyCard.vue";
import ProgressCard from "~/components/cards/ProgressCard.vue";

export default {
  layout: "canvas",
  components: {
    Logo,
    TallyCard,
    ProgressCard,
    highcharts: Chart
  },
  methods: {
    newProgressLog: function(newLog) {
      this.cards[1].data.logs.push(newLog);
      console.log("NEW PROGRESS LOG: ", this.cards[1].data.logs)
    },
    newTallyLog: function(newLog) {
      this.cards[0].data.logs.push(newLog);
      console.log("NEW TALLY LOG: ", this.cards[0].data.logs)
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
                value: 0,
              },
              {
                label: "amet",
                date: "Thu Jun 15 2016 10:21:26 GMT+0000",
                value: 4,
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
          id: "04059f84-6e5d-456c-a54d-a2e88b0b0e05",
          xOffset: 136,
          yOffset: 759,
          width: 414,
          height: 403,
          type: "progress",
          category: "personal",
          title: "1st progress",
          description: "Hays",
          createdAt: "Sun Mar 31 2013 22:19:09 GMT+0000",
          data: {
            logs: [
              {
                label: "aliquip",
                date: "Thu Jan 30 2018 02:09:48 GMT+0000",
                value: 100,
                total: 500
              },
              {
                label: "aliquip",
                date: "Mon Nov 21 2018 15:03:31 GMT+0000",
                value: 200,
                total: 500
              },
              {
                label: "aliquip",
                date: "Wed Dec 12 2019 13:20:28 GMT+0000",
                value: 300,
                total: 500
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
          id: "1f4a238f-d353-40c6-be28-92128cb7edeb",
          xOffset: 364,
          yOffset: 526,
          width: 433,
          height: 460,
          type: "days-until",
          category: "personal",
          title: "Irene",
          description: "James",
          createdAt: "Tue Dec 04 2018 04:39:16 GMT+0000",
          data: {
            logs: [
              {
                label: "ex",
                date: "Sat Nov 09 2019 08:37:07 GMT+0000",
                value: 476,
                total: 825
              },
              {
                label: "in",
                date: "Mon Mar 11 2019 02:28:53 GMT+0000",
                value: 467,
                total: 600
              },
              {
                label: "exercitation",
                date: "Wed Jun 22 2016 03:33:18 GMT+0000",
                value: 199,
                total: 539
              }
            ]
          }
        },
        {
          id: "97c1e462-3139-48b8-9a02-4714990f23a2",
          xOffset: 473,
          yOffset: 217,
          width: 329,
          height: 483,
          type: "days-until",
          category: "personal",
          title: "Wendi",
          description: "Nguyen",
          createdAt: "Sat May 09 2015 11:08:45 GMT+0000",
          data: {
            logs: [
              {
                label: "cillum",
                date: "Tue May 02 2017 10:29:14 GMT+0000",
                value: 458,
                total: 540
              },
              {
                label: "proident",
                date: "Fri Jul 20 2018 10:14:57 GMT+0000",
                value: 667,
                total: 668
              },
              {
                label: "ut",
                date: "Wed Dec 18 2019 14:55:08 GMT+0000",
                value: 557,
                total: 537
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
          id: "d7dc6d0c-9be0-4af1-a319-4a7a5aed6a3c",
          xOffset: 216,
          yOffset: 50,
          width: 349,
          height: 321,
          type: "days-until",
          category: "personal",
          title: "Barber",
          description: "Montoya",
          createdAt: "Wed Sep 16 2015 16:52:25 GMT+0000",
          data: {
            logs: [
              {
                label: "enim",
                date: "Mon Jul 06 2015 13:12:12 GMT+0000",
                value: 356,
                total: 740
              },
              {
                label: "laborum",
                date: "Thu Oct 26 2017 01:58:07 GMT+0000",
                value: 730,
                total: 548
              },
              {
                label: "nostrud",
                date: "Tue May 12 2015 11:12:10 GMT+0000",
                value: 139,
                total: 804
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
      ]
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
