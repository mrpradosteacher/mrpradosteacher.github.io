<template>
  <div class="flex flex-wrap -m-2">
      <div class="p-2" v-for="(user, key) in users" :key="key">
        <router-link :to="{ name: 'rescue-view',  params: { id: user.id } }">
        <div class="w-96 h-32 bg-white rounded-md shadow flex items-center hover:bg-purple-50 cursor-pointer">
          <div class="px-4">
            <img :src="user.avatar" class="h-20 w-20 rounded-full object-cover border-2 border-purple-400 shadow" />
          </div>
          <div class="text-xl font-bold">
            {{ user.name }}
          </div>
        </div>
        </router-link>
      </div>
    </div>
</template>

<script>

export default {
  name: 'RescueList',
  data() {
    return {
      baseUrl: process.env.VUE_APP_BASE_URL,
      users: this.$store.state.users,
    }
  },
}
</script>
