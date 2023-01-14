<script setup lang="ts">
import { ref, onMounted } from "vue";

import myDayjs from "../components/ts/myDayjs";

const dateFrom = ref(myDayjs(new Date()).add(3, "y"));
const dateTo = ref(myDayjs(new Date()));

onMounted(() => {
  setInterval(() => {
    dateTo.value = myDayjs(new Date());
  });
});
</script>

<template>
  <main>
    <div class="result-wrapper">
      <span>Diff</span>
      <span class="result-date">
        {{ dateFrom.diff(dateTo) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Diff year</span>
      <span class="result-date">
        {{ dateFrom.diff(dateTo, "year") }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Diff month</span>
      <span class="result-date">
        {{ dateFrom.diff(dateTo, "month") }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Diff week</span>
      <span class="result-date">
        {{ dateFrom.diff(dateTo, "week") }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Diff day</span>
      <span class="result-date">
        {{ dateFrom.diff(dateTo, "day") }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Diff hour</span>
      <span class="result-date">
        {{ dateFrom.diff(dateTo, "hour") }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Diff minute</span>
      <span class="result-date">
        {{ dateFrom.diff(dateTo, "minute") }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Diff second</span>
      <span class="result-date">
        {{ dateFrom.diff(dateTo, "second") }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>Diff</span>
      <span class="result-date">
        {{ dateFrom.diff(dateTo, "day", true) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>Diff</span>
      <span class="result-date">
        {{ dateFrom.diff(dateTo, "day", false) }}
      </span>
    </div>
  </main>
</template>
