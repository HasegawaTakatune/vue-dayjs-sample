<script setup lang="ts">
import { ref, onMounted } from "vue";

import myDayjs from "../components/ts/myDayjs";

const FORMAT = "YYYY-MM-DD HH:mm:ss";
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
      <span>Add year(+2)</span>
      <span class="result-date">
        {{ myDayjs(date).add(2, "y").format(FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>Add month(+2)</span>
      <span class="result-date">
        {{ myDayjs(date).add(2, "M").format(FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>Add week(+2)</span>
      <span class="result-date">
        {{ myDayjs(date).add(2, "w").format(FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>Add date(+2)</span>
      <span class="result-date">
        {{ myDayjs(date).add(2, "d").format(FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>Add hour(+2)</span>
      <span class="result-date">
        {{ myDayjs(date).add(2, "h").format(FORMAT) }}</span
      >
    </div>
    <div class="result-wrapper">
      <span>Add minute(+2)</span>
      <span class="result-date"
        >{{ myDayjs(date).add(2, "m").format(FORMAT) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>Add secpmd(+2)</span>
      <span class="result-date">
        {{ myDayjs(date).add(2, "s").format(FORMAT) }}
      </span>
    </div>
    <hr />
    <div class="result-wrapper">
      <span>subtract year(-2)</span>
      <span class="result-date">
        {{ myDayjs(date).subtract(2, "y").format(FORMAT) }}
      </span>
    </div>
  </main>
</template>
