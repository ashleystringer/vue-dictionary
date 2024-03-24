<script setup>
import { ref, watch } from "vue";

const wordInput = ref(null);

const emit = defineEmits(["search"]);


</script>

<template>
    <input v-model="wordInput" type="text" placeholder="Search for a word" />
</template>

<style scoped>

</style>