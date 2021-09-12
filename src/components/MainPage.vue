<template>
  <div class="bg-blue-500">
    {{baseUrl}}
  </div>
  <div>v.0.2</div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'MainPage',
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
    }
  },
  created(){
      axios.get(this.baseUrl + 'data/users.json').then(response => {
        console.log(response);
     })
  }
}
</script>
