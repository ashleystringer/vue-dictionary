// fetch.js
import { ref, watchEffect, toValue } from 'vue'

export function useFetch(url) {
  const data = ref(null)
  const error = ref(null)

  const fetchData = () => {
    // reset state before fetching..
    data.value = null
    error.value = null

    fetch(toValue(url))
      .then((res) => res.json())
      .then((json) => (data.value = json))
      .catch((err) => (error.value = err))
  }

  watchEffect(() => {
    fetchData()
  })

  return { data, error }
}

/*export function useFetch() {
  const fetch = async (url, options = {}) => {
    const response = await window.fetch(url, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json();
  };

  return { fetch };
}*/