<script setup lang="ts">
import { ref, onMounted } from "vue";

import myDayjs from "../components/ts/myDayjs";

const DAY_FORMAT = "YYYY-MM-DD HH:mm:SSS";
const date = ref(new Date());

onMounted(() => {
  setInterval(() => {
    date.value = new Date();
  });
});
</script>

<template>
  <main>
    <div class="result-wrapper">
      <span>Start of year</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("year").format(DAY_FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of year</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("year").format(DAY_FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Start of month</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("month").format(DAY_FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of month</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("month").format(DAY_FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Start of week</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("week").format(DAY_FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of week</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("week").format(DAY_FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Start of day</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("day").format(DAY_FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of day</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("day").format(DAY_FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Start of hour</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("hour").format(DAY_FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of hour</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("hour").format(DAY_FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Start of minute</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("minute").format(DAY_FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of minute</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("minute").format(DAY_FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Start of second</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("second").format(DAY_FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of second</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("second").format(DAY_FORMAT) }}
      </span>
    </div>
  </main>
</template>
