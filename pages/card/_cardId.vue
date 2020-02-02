<template>
  <div class="container-fluid" style="padding-top: 8px;">
    <a-row :gutter="16">
      <a-col :span="24">
        <a-breadcrumb class="mt1 mb1">
          <nuxt-link to="/">
            <a-breadcrumb-item href>
              <a-icon type="home" />
            </a-breadcrumb-item>
          </nuxt-link>
          <nuxt-link to="/canvas#personal" v-if="activeCategory === 'personal'">
            <a-breadcrumb-item href>
              <a-icon type="user" />
              <span>{{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}} Cards</span>
            </a-breadcrumb-item>
          </nuxt-link>
          <nuxt-link to="/canvas#work" v-if="activeCategory === 'work'">
            <a-breadcrumb-item href>
              <a-icon type="desktop" />
              <span>{{activeCategory.charAt(0).toUpperCase() + activeCategory.slice(1)}} Cards</span>
            </a-breadcrumb-item>
          </nuxt-link>
          <a-breadcrumb-item>{{card.title}}</a-breadcrumb-item>
        </a-breadcrumb>
      </a-col>
      <a-col :span="24">
        <h1>{{card.title}}</h1>
      </a-col>
      <a-col :span="24">
        <a-tabs>
          <a-tab-pane tab="Settings" key="1">
            <edit-card-form :card="card" @updateCard="updateCard"></edit-card-form>
          </a-tab-pane>
          <a-tab-pane tab="Data" key="2" v-if="card.type !== 'countdown'">
            <edit-card-data :card="card" @newLog="newLog"></edit-card-data>
          </a-tab-pane>
          <a-tab-pane
            tab="Visualization"
            key="3"
            :forceRender="true"
            v-if="card.type !== 'countdown'"
          >
            <card-visualization :card="card"></card-visualization>
          </a-tab-pane>
          <a-button type="danger" slot="tabBarExtraContent" @click="handleDeleteCard">Delete card</a-button>
        </a-tabs>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import EditCardForm from "~/components/cards/EditCardForm.vue";
import EditCardData from "~/components/cards/EditCardData.vue";
import CardVisualization from "~/components/cards/CardVisualization.vue";
import { Chart } from "highcharts-vue";

export default {
  layout: "canvas",
  components: {
    Logo,
    EditCardForm,
    EditCardData,
    CardVisualization,
    highcharts: Chart
  },
  methods: {
    newLog: function(newLog) {
      //check card type and call appropiate method
      //this.cards[0].data.logs.push(newLog);
      console.log("NEW LOG: ", this.cards[0].data.logs);
    },
    handleDeleteCard: function(card) {
      console.log("delete Card: ", card);
    },
    updateCard: function(card) {
      console.log("update Card: ", card);
    }
  },
  created() {
    let cardId = this.$route.params.cardId;
    let index = this.cards.findIndex(c => c.id === cardId);
    if (index > -1) {
      this.card = this.cards[index];
    }
    console.log(cardId, index);
  },
  mounted: function() {
    if (window.location.hash) {
      this.activeCategory = window.location.hash.substring(1);
    }
    console.log(this.activeCategory);
  },
  watch: {
    $route(to, from) {
      this.activeCategory = to.hash.substring(1);
    }
  },
  data() {
    return {
      cardId: null,
      activeCategory: "personal",
      card: { data: { logs: [] } },
      cards: [
        {
          id: "206931f5-88a5-46be-aa83-5c1ad3f99260",
          xOffset: 774,
          yOffset: 677,
          width: 402,
          height: 472,
          type: "tally",
          categories: ["personal"],
          title: "Kathie",
          description: "Roth",
          createdAt: "Sun Aug 18 2019 18:15:54 GMT+0000",
          lastUpdate: "Sat Jan 11 2020 01:07:49 GMT+0000",
          data: {
            defaultStep: 3,
            logs: [
              {
                label: "reprehenderit",
                date: "Tue Mar 03 2015 12:00:20 GMT+0000",
                value: 665,
                total: 755
              },
              {
                label: "incididunt",
                date: "Thu Jun 02 2016 14:05:37 GMT+0000",
                value: 478,
                total: 767
              },
              {
                label: "aute",
                date: "Tue Oct 11 2016 16:20:06 GMT+0000",
                value: 764,
                total: 687
              }
            ]
          }
        },
        {
          id: "4532a4cf-b121-4d99-a524-34e788819459",
          xOffset: 255,
          yOffset: 793,
          width: 392,
          height: 389,
          type: "progress",
          categories: ["personal", "work"],
          title: "Progress card",
          description: "1st progress card",
          createdAt: "Thu Jan 23 2018 04:25:55 GMT+0000",
          lastUpdate: "Thu Jun 21 2019 21:06:32 GMT+0000",
          data: {
            defaultStep: 10,
            logs: [
              {
                label: "enim",
                date: "Fri Apr 10 2015 11:25:35 GMT+0000",
                value: 191,
                total: 1000
              },
              {
                label: "id",
                date: "Thu Sep 01 2016 04:43:37 GMT+0000",
                value: 144,
                total: 1000
              },
              {
                label: "nulla",
                date: "Tue Jan 08 2019 23:24:44 GMT+0000",
                value: 749,
                total: 1000
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
.anticon span {
  text-transform: capitalize;
}
</style>
