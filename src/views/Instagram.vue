<template>
<div> 
  <div @click="downloadImage">Descargar</div>
  <div id="prueba" class="post relative bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
    <div class="text-xl font-bold p-4 bg-white">Texto numero 1</div>
    <div class="absolute bg-white rounded-md text-sm" style="top: 300px; left: 60px; height: 80px">
        <span class=" px-4 align-text-top leading-none">Instagram</span>
    </div>
  </div>
  <div id="mostrar" class="mt-8"></div>
</div>
 
</template>

<script>

  import html2canvas from 'html2canvas';

  export default {
    name: 'Instagram',
    methods: {
      downloadImage() {
        window.scrollTo(0, 0);

         const input = document.getElementById('prueba');
  
      // This row fixed problem
      input.parentNode.style.overflow = 'visible';

        html2canvas(input).then(function(canvas) {
          document.getElementById("mostrar").appendChild(canvas);
      });
      }
    }
  }
</script>

<style scoped>

.post {
  width: 520px;
  height: 520px;
  overflow: hidden;
}
</style>