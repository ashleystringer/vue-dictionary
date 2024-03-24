<script setup>
import { ref, watch } from "vue";
import { useFetch } from "../composables/fetch.js";

const wordEntry = ref(null);
    const { data } = useFetch("https://api.dictionaryapi.dev/api/v2/entries/en/hello");

    watch(data, () => {
      console.log(data.value);
      wordEntry.value = data.value;
      console.log(wordEntry.value[0].word);
    });


</script>

<template>
  <div v-if="wordEntry">
    <p>Word: {{ wordEntry[0].word }} </p>
    <p>Phonetic: {{ wordEntry[0].phonetic }} </p>
    <p>Phonetics: {{ wordEntry[0].word }} </p>
    <p>Origin: {{ wordEntry[0].origin }} </p>
    <p>Meanings: {{ wordEntry[0].word }} </p>
    <p>Part of speech: {{ wordEntry[0].word }} </p>
  
  </div>
</template>

<style scoped>

</style>