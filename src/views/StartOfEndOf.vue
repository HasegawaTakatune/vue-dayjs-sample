<script setup lang="ts">
import { ref, onMounted } from "vue";

import myDayjs from "../components/ts/myDayjs";

const FORMAT = "YYYY-MM-DD HH:mm:SSS";
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
        {{ myDayjs(date).startOf("year").format(FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of year</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("year").format(FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Start of month</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("month").format(FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of month</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("month").format(FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Start of week</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("week").format(FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of week</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("week").format(FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Start of day</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("day").format(FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of day</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("day").format(FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Start of hour</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("hour").format(FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of hour</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("hour").format(FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Start of minute</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("minute").format(FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of minute</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("minute").format(FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Start of second</span>
      <span class="result-date">
        {{ myDayjs(date).startOf("second").format(FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>End of second</span>
      <span class="result-date">
        {{ myDayjs(date).endOf("second").format(FORMAT) }}
      </span>
    </div>
  </main>
</template>
