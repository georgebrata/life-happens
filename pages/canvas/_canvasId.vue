<template>
  <div class="container-fluid" style="padding-top: 8px;">
    <a-row :gutter="16">
      <a-col :span="12" v-for="card in activeCards" :key="card.id">
        <tally-card :card="card" @newLog="newLog" v-if="card.type==='tally'"></tally-card>
        <progress-card :card="card" @newLog="newLog" v-if="card.type==='progress'"></progress-card>
        <countdown-card :card="card" @newLog="newLog" v-if="card.type==='countdown'"></countdown-card>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import TallyCard from "~/components/cards/TallyCard.vue";
import ProgressCard from "~/components/cards/ProgressCard.vue";
import CountdownCard from "~/components/cards/CountdownCard.vue";

export default {
  layout: "canvas",
  components: {
    Logo,
    TallyCard,
    ProgressCard,
    CountdownCard
  },
  methods: {
    newLog: function(cardId, newLog) {
      let index = this.cards.findIndex(c => c.id === cardId);
      if (index > -1) {
        this.cards[index].data.logs.push(newLog);
        this.cards[index].lastUpdate = newLog.data;
      } else {
        console.error("No card with this ID.");
      }
    }
  },
  computed: {
    activeCards: function() {
      return this.allCards.filter(card =>
        card.categories.includes(this.activeCategory)
      );
    },
    allCards: function() {
      return this.$store.getters.allCards
    }
  },
  watch: {
    $route(to, from) {
      this.activeCategory = to.hash.substring(1);
    }
  },
  data() {
    return {
      activeCategory: window.location.hash.substring(1)
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
