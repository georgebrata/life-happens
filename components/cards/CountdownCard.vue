<template>
  <a-card :title="card.title" hoverable :loading="state.isLoading">
    <a href="#" slot="extra">
      <a-icon
        type="edit"
        title="Edit card"
        style="padding: 0 5px;"
        class="hover-visible"
        @click="window.location = '/card/123'"
      ></a-icon>
      <a-icon type="copy" title="Copy to clipboard" style="padding: 0 5px;" class="hover-visible" />
      <a-icon type="info-circle" style="padding: 0 5px;" />
    </a>
    <h1>{{displayValue}}</h1>
    <h3>{{currentLabel}}</h3>
    <div class="last-update-label">Created {{createdDate}}</div>
  </a-card>
</template>

<script>
import { createComponent, computed, reactive, ref } from "@vue/composition-api";
import { format } from "timeago.js";

export default createComponent({
  name: "CountdownCard",
  props: {
    card: Object
  },
  setup({ card }, { emit }) {
    let state = reactive({ newLogMode: false, value: null, isLoading: false });

    // a and b are javascript Date objects
    function dateDiff(a, b, divider) {
      // Discard the time and time-zone information.
      const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
      const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

      return Math.floor((utc2 - utc1) / divider);
    }

    let currentLabel = computed(() => card.data.label);

    let displayValue = computed(() => {
      let diff = dateDiff(new Date(), new Date(card.data.date), 1000 * 60); //minutes
      let label = diff === 1 ? "minute" : "minutes";
      if (diff > 59) {
        diff = dateDiff(new Date(), new Date(card.data.date), 1000 * 60 * 60); //hours
        label = diff === 1 ? "hour" : "hours";
        if (diff > 23) {
          diff = dateDiff(new Date(), new Date(card.data.date), 1000 * 60 * 60 * 24); //days
          label = diff === 1 ? "day" : "days";
        }
      }

      return diff + " " + label;
    });

    let createdDate = computed(() => format(card.createdAt));

    return {
      state,
      currentLabel,
      displayValue,
      createdDate,
      dateDiff
    };
  }
});
</script>