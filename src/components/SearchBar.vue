<script setup>
import { ref, watch } from "vue";
import { useFetch } from "../composables/fetch.js";
import { debounce } from "lodash";

const wordInput = ref(null);

//debounce function for key up events
// lodash.js


function onInput(e){
    //fetch object from dictionary api using e.target.value
    console.log(e.target.value);
    
    if (e.target.value === ""){
        wordInput.value = null;
        return;
    }

    const { data } = useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${e.target.value}`);
    
    /*
    const fetchWord = debounce(async (word) => {
        const { data } = useFetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        wordInput.value = data.value;  
    }, 400);
    */
    
    watch(data, () => {
        console.log(data.value);
        wordInput.value = data.value;
        console.log(wordInput.value[0].word);
    });
}

</script>

<template>
    <input v-on:keyup="onInput" type="text" placeholder="Search for a word" />

    <br/>

    <div v-if="wordInput">
        wordInput exists

        <div>
            Word: {{ wordInput[0].word }}
        </div>
    </div>
</template>

<style scoped>

</style>