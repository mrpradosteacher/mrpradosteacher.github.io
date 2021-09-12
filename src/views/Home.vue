<template>
  <div class="flex flex-wrap">
      <div class="p-2" v-for="(user, key) in users" :key="key">
        <div class="w-96 h-32 bg-white rounded-md shadow flex items-center hover:bg-purple-50 cursor-pointer">
          <div class="px-4">
            <img :src="user.avatar" class="h-20 w-20 rounded-full object-cover border-2 border-purple-400 shadow" />
          </div>
          <div class="text-xl font-bold">
            {{ user.nombre }}
          </div>
        </div>
        
      </div>
    </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      users: [],
    }
  },
  created(){
      axios.get(this.baseUrl + 'data/users.json').then(response => {
        this.users =  response.data;
     })
  }
}
</script>
