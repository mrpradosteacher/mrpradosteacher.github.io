<template>
  <div class="flex flex-wrap -m-2">
      <div class="p-2" v-for="(user, key) in users" :key="key">
        <router-link :to="{ name: 'rescue-view',  params: { id: user.id } }">
        <div class="w-96 h-32 bg-white rounded-md shadow flex items-center hover:bg-purple-50 hover:shadow-md cursor-pointer">
          <div class="px-4 flex-none">
            <img :src="user.avatar" class="h-20 w-20 rounded-full object-cover border-2 border-purple-400 shadow" />
          </div>
          <div class="flex flex-col justify-between content-between h-full py-8 pr-6 w-full">
              <div class="text-xl font-bold">{{ user.name }}</div>

              <div class="flex items-center">
                <div class="overflow-hidden h-2 text-xs flex rounded bg-purple-200 w-full mr-4">
                  <div :style="'width:'+ getProgress(user.rescue) +'%'" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-purple-500"></div>
                </div>
                <span class="text-xs font-semibold inline-block text-purple-500">
                  {{ getProgress(user.rescue) }}%
                </span>
              </div>
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
  methods: {
    getProgress(progress) {
      const total = progress.reduce(function(a,b) {
        return a.concat(b);
      }).reduce((a, b) => a + b, 0)
      return parseInt((total * 100) / 18);
    }
  }
}
</script>
