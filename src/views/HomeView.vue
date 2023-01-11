<script setup lang="ts">
import { ref, onMounted } from "vue";
import TheWelcome from "../components/TheWelcome.vue";
import myDayjs from "../components/ts/myDayjs";

const timer = ref("");

onMounted(() => {
  setInterval(() => {
    timer.value = myDayjs(new Date()).format("YYYY-MM-DD HH:mm:ss");
  });
});
</script>

<template>
  <main>
    <TheWelcome />
    {{ timer }}
  </main>
</template>
