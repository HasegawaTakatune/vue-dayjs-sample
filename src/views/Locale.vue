<script setup lang="ts">
import ja from "dayjs/locale/ja";
import en from "dayjs/locale/en";

import myDayjs from "../components/ts/myDayjs";

const localeJa = myDayjs(new Date()).locale(ja);
const localeEn = myDayjs(new Date()).locale(en);
</script>

<template>
  <main>
    <div class="result-wrapper">
      <span>Locale ja</span>
    </div>
    <div class="result-wrapper">
      <span>M</span>
      <span class="result-date">
        {{ localeJa.format("M") }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>MM</span>
      <span class="result-date">
        {{ localeJa.format("MM") }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>MMM</span>
      <span class="result-date">
        {{ localeJa.format("MMM") }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>MMMM</span>
      <span class="result-date">
        {{ localeJa.format("MMMM") }}
      </span>
    </div>

    <div class="result-wrapper">
      <span>d</span>
      <span class="result-date">
        {{ localeJa.format("d") }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>dd</span>
      <span class="result-date">
        {{ localeJa.format("dd") }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>ddd</span>
      <span class="result-date">
        {{ localeJa.format("ddd") }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>dddd</span>
      <span class="result-date">
        {{ localeJa.format("dddd") }}
      </span>
    </div>

    <hr />
    <div class="result-wrapper">
      <span>Locale en</span>
    </div>
    <div class="result-wrapper">
      <span>M</span>
      <span class="result-date">
        {{ localeEn.format("M") }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>MM</span>
      <span class="result-date">
        {{ localeEn.format("MM") }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>MMM</span>
      <span class="result-date">
        {{ localeEn.format("MMM") }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>MMMM</span>
      <span class="result-date">
        {{ localeEn.format("MMMM") }}
      </span>
    </div>

    <div class="result-wrapper">
      <span>d</span>
      <span class="result-date">
        {{ localeEn.format("d") }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>dd</span>
      <span class="result-date">
        {{ localeEn.format("dd") }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>ddd</span>
      <span class="result-date">
        {{ localeEn.format("ddd") }}
      </span>
    </div>
    <div class="result-wrapper">
      <span>dddd</span>
      <span class="result-date">
        {{ localeEn.format("dddd") }}
      </span>
    </div>
    <hr />
  </main>
</template>
