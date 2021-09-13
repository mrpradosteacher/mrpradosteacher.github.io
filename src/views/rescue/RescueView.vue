<template>
  <div class="w-full h-20 bg-white rounded-md shadow flex items-center">
    <div class="px-4">
      <img :src="user?.avatar" class="h-10 w-10 rounded-full object-cover border-2 border-purple-400 shadow" />
    </div>
    <div class="text-xl font-bold">
      {{ user?.name }}
    </div>
  </div>
  
  <div class="bg-white p-10 m-10 rounded-md shadow w-min mx-auto">
    <div class="divide-y-4 divide-purple-500 divide-dashed" style="width: 600px; height: 600px">
      <div class="flex divide-x-4 divide-purple-500 divide-dashed w-full h-1/3" v-for="(row, rowKey) in user.rescue" :key="'row_' + rowKey">
        <div class="relative overflow-hidden w-1/3 h-full" v-for="(col, colKey) in row" :key="'row_' + rowKey + 'col_' + colKey">
          <div class="absolute transform" style="width: 600px; height: 600px" :class="'-translate-x-'+colKey+'/3 -translate-y-'+rowKey+'/3'">
            <img src="https://dinojitos.com/wp-content/uploads/2020/06/tricer-web.png" class="object-contain filter" :class="{ 'brightness-0': col === 0, 'grayscale' : col === 1 }">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'RescueView',
  computed: {
    user() {
      return this.$store.state.users.filter(u => u.id === parseInt(this.$route.params.id) )[0];
    }
  },
}
</script>
