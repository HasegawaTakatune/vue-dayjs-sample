<script setup lang="ts">
import { ref, reactive, onMounted } from "vue";

import myDayjs from "../components/ts/myDayjs";

const TZ_ASIA_TOKYO = "Asia/Tokyo";
const TZ_AMERIZA_LOS_ANGELES = "America/Los_Angeles";
const TZ_EUROPE_LONDON = "Europe/London";
const DAY_FORMAT = "YYYY-MM-DD HH:mm:SSS";

const date = ref(new Date());

const timezone = reactive<any>({
  tokyoDate: "",
  losDate: "",
  londonDate: "",
});

onMounted(() => {
  date.value = new Date();

  myDayjs.tz.setDefault(TZ_ASIA_TOKYO);
  timezone.tokyoDate = myDayjs.tz(date.value).format();

  myDayjs.tz.setDefault(TZ_AMERIZA_LOS_ANGELES);
  timezone.losDate = myDayjs.tz(date.value).format();

  myDayjs.tz.setDefault(TZ_EUROPE_LONDON);
  timezone.londonDate = myDayjs.tz(date.value).format();

  setInterval(() => {
    date.value = new Date();

    myDayjs.tz.setDefault(TZ_ASIA_TOKYO);
    timezone.tokyoDate = myDayjs.tz(date.value).format();

    myDayjs.tz.setDefault(TZ_AMERIZA_LOS_ANGELES);
    timezone.losDate = myDayjs.tz(date.value).format();

    myDayjs.tz.setDefault(TZ_EUROPE_LONDON);
    timezone.londonDate = myDayjs.tz(date.value).format();
  });
});
</script>

<template>
  <main>
    <div class="result-wrapper">
      <span>{{ TZ_ASIA_TOKYO }}</span>
      <span class="result-date">
        {{ timezone.tokyoDate }}
      </span>
    </div>
    <hr />

    <div class="result-wrapper">
      <span>{{ TZ_AMERIZA_LOS_ANGELES }}</span>
      <span class="result-date">
        {{ timezone.losDate }}
      </span>
    </div>
    <hr />

    <div class="result-wrapper">
      <span>{{ TZ_EUROPE_LONDON }}</span>
      <span class="result-date">
        {{ timezone.londonDate }}
      </span>
    </div>
    <hr />
  </main>
</template>
