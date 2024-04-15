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
    <p>Phonetics: {{ wordEntry[0].word }} </p>
    <ul>
      <li v-for="phonetic in wordEntry[0].phonetics" :key="phonetic.id">
        <div>{{ phonetic.text }}</div>
      </li>
    </ul>
    <p>Meaning</p>
    <ul>
      <li v-for="meaning in wordEntry[0].meanings" :key="meaning.id">
        <div>{{ meaning.partOfSpeech }}</div>
        <div>{{ meaning.definitions[0].definition }}</div>
        <div>{{ meaning.definitions[0].example }}</div>
      </li>
    </ul>
  </div>
</template>

<style scoped>

</style>