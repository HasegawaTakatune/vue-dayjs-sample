<script setup lang="ts">
import { ref } from "vue";

import myDayjs from "../components/ts/myDayjs";

const FORMAT = "YYYY-MM-DD";

const date1 = ref(myDayjs(new Date()));
const date2 = ref(myDayjs(new Date()).add(-100, "w"));
const date3 = ref(myDayjs(new Date()).add(100, "w"));
</script>

<template>
  <main>
    <div class="result-wrapper">
      <span>Is after</span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date2.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isAfter(date2) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date1.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isAfter(date1) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date3.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isAfter(date3) }}
      </span>
    </div>
    <hr />

    <div class="result-wrapper">
      <span>Is same or after</span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date2.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isSameOrAfter(date2) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date1.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isSameOrAfter(date1) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date3.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isSameOrAfter(date3) }}
      </span>
    </div>
    <hr />

    <div class="result-wrapper">
      <span>Is before</span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date2.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isBefore(date2) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date1.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isBefore(date1) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date3.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isBefore(date3) }}
      </span>
    </div>
    <hr />

    <div class="result-wrapper">
      <span>Is same or before</span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date2.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isSameOrBefore(date2) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date1.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isSameOrBefore(date1) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date3.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isSameOrBefore(date3) }}
      </span>
    </div>
    <hr />

    <div class="result-wrapper">
      <span>Is same</span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date2.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isSame(date2) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date1.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isSame(date1) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span> {{ date1.format(FORMAT) }} : {{ date3.format(FORMAT) }} </span>
      <span class="result-date">
        {{ date1.isSame(date3) }}
      </span>
    </div>
    <hr />

    <div class="result-wrapper">
      <span>Is between</span>
    </div>
    <div class="result-wrapper">
      <span>
        {{ date2.format(FORMAT) }} ＜ {{ date1.format(FORMAT) }} ＜
        {{ date3.format(FORMAT) }}
      </span>
      <span class="result-date">
        {{ date1.isBetween(date2, date3) }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>
        {{ date1.format(FORMAT) }} ＜ {{ date2.format(FORMAT) }} ＜
        {{ date3.format(FORMAT) }}
      </span>
      <span class="result-date">
        {{ date2.isBetween(date1, date3) }}
      </span>
    </div>

    <hr />
  </main>
</template>
