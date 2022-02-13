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
          <div class="absolute top-1 left-1 w-full h-full min-h-full z-50">
            <div v-if="user.rescue[0][0] === 0" class="absolute top-0 left-0"><span class="bubble" :class="bubbleKey" v-for="(bubbleNum, bubbleKey) in bubblesType[user.template][0][0]" :key="'row_' + rowKey + 'col_' + colKey + bubbleKey">{{ bubbleNum }}</span></div>
            <div v-if="user.rescue[0][1] === 0" class="absolute top-0 left-1/3"><span class="bubble" :class="bubbleKey" v-for="(bubbleNum, bubbleKey) in bubblesType[user.template][0][1]" :key="'row_' + rowKey + 'col_' + colKey + bubbleKey">{{ bubbleNum }}</span></div>
            <div v-if="user.rescue[0][2] === 0" class="absolute top-0 left-2/3"><span class="bubble" :class="bubbleKey" v-for="(bubbleNum, bubbleKey) in bubblesType[user.template][0][2]" :key="'row_' + rowKey + 'col_' + colKey + bubbleKey">{{ bubbleNum }}</span></div>

            <div v-if="user.rescue[1][0] === 0" class="absolute top-1/3 left-0"><span class="bubble" :class="bubbleKey" v-for="(bubbleNum, bubbleKey) in bubblesType[user.template][1][0]" :key="'row_' + rowKey + 'col_' + colKey + bubbleKey">{{ bubbleNum }}</span></div>
            <div v-if="user.rescue[1][1] === 0" class="absolute top-1/3 left-1/3"><span class="bubble" :class="bubbleKey" v-for="(bubbleNum, bubbleKey) in bubblesType[user.template][1][1]" :key="'row_' + rowKey + 'col_' + colKey + bubbleKey">{{ bubbleNum }}</span></div>
            <div v-if="user.rescue[1][2] === 0" class="absolute top-1/3 left-2/3"><span class="bubble" :class="bubbleKey" v-for="(bubbleNum, bubbleKey) in bubblesType[user.template][1][2]" :key="'row_' + rowKey + 'col_' + colKey + bubbleKey">{{ bubbleNum }}</span></div>
 
            <div v-if="user.rescue[2][0] === 0" class="absolute top-2/3 left-0"><span class="bubble" :class="bubbleKey" v-for="(bubbleNum, bubbleKey) in bubblesType[user.template][2][0]" :key="'row_' + rowKey + 'col_' + colKey + bubbleKey">{{ bubbleNum }}</span></div>
            <div v-if="user.rescue[2][1] === 0" class="absolute top-2/3 left-1/3"><span class="bubble" :class="bubbleKey" v-for="(bubbleNum, bubbleKey) in bubblesType[user.template][2][1]" :key="'row_' + rowKey + 'col_' + colKey + bubbleKey">{{ bubbleNum }}</span></div>
            <div v-if="user.rescue[2][2] === 0" class="absolute top-2/3 left-2/3"><span class="bubble" :class="bubbleKey" v-for="(bubbleNum, bubbleKey) in bubblesType[user.template][2][2]" :key="'row_' + rowKey + 'col_' + colKey + bubbleKey">{{ bubbleNum }}</span></div>
          </div> 
            <img 
              src="/images/model-02.png" 
              class="object-contain filter pointer-events-none" 
              :class="{ 'brightness-0': col === 0, 'grayscale' : col === 1 }">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'RescueView',
  data() {
    return {
      bubblesType: [[
        [{arts: 3, castellano: 5, matematicas: 1}, {naturales: 5, valenciano: 5, ingles: 5}, {valores: 1, sociales: 1, valenciano: 2}],
        [{matematicas: 2, castellano: 3}, {arts: 4, valenciano: 2, sociales: 3}, {arts: 1, ingles: 1, naturales: 2}],
        [{sociales: 2, matematicas: 3, castellano: 1}, {ingles: 3, naturales: 3}, {valenciano: 5, valores: 5, matematicas: 5}]
      ], [], [], [], []],
    }
  },
  computed: {
    user() {
      return this.$store.state.users.filter(u => u.id === parseInt(this.$route.params.id) )[0];
    }
  },
}
</script>

<style scoped>

  .bubble {
    display: inline-block;
    height: 40px;
    width: 40px;
    padding-top: 6px;
    padding-left: 13px;
    background-size: contain;
    background-repeat: no-repeat;
    -webkit-text-stroke: .2px white;
    @apply font-bold text-xl;
  }

  .bubble.arts {
    background-image: url('/images/bubbles/arts-empty.png');
  }

  .bubble.castellano {
    background-image: url('/images/bubbles/castellano-empty.png');
  }

  .bubble.ingles {
    background-image: url('/images/bubbles/ingles-empty.png');
  }

  .bubble.matematicas {
    background-image: url('/images/bubbles/matematicas-empty.png');
  }

  .bubble.naturales {
    background-image: url('/images/bubbles/naturales-empty.png');
  }

  .bubble.sociales {
    background-image: url('/images/bubbles/sociales-empty.png');
  }

  .bubble.valenciano {
    background-image: url('/images/bubbles/valenciano-empty.png');
  }

  .bubble.valores {
    background-image: url('/images/bubbles/valores-empty.png');
  }

</style>
