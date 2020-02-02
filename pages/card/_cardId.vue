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
    let index = this.allCards.findIndex(c => c.id === cardId);
    if (index > -1) {
      this.card = this.allCards[index];
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
  computed: {
    allCards: function() {
      return JSON.parse(JSON.stringify(this.$store.getters.allCards));
    }
  },
  data() {
    return {
      cardId: null,
      activeCategory: "personal",
      card: { data: { logs: [] } }
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
