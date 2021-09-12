<template>
  <div class="flex min-h-full">
    <div class="mt-10 bg-white shadow-md z-30 w-56">
      <router-link 
        v-for="route in routes"
        :key="route.name"
        class="px-6 py-3 inline-block w-full hover:bg-purple-50"
        active-class="border-r-4 border-purple-500 font-bold bg-purple-50"
        :to="{name: route.name }" 
      >
        {{ route.label }}
      </router-link>
    </div>
    <div class="bg-gray-50 w-full p-8">
      <router-view />
    </div>
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      routes: [
        {
          name: 'rescate',
          label: 'Rescate'
        },
        {
          name: 'about',
          label: 'Próximamente'
        }
      ],
    }
  },
}
</script>

<style>
html, body {
  margin: 0;
  height: 100%;
  min-height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  min-height: 100%;
}
</style>
