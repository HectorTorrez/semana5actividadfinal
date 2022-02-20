<template>
  <div id="root">

    <div class="row">

      <!-- MASA -->
      <div class="col-sm-6">
<div class="card">
  <div class="card-header text-center">
    Masa
  </div>
  <div class="card-body">
    <h5 class="card-title text-left">Kg a lbs</h5>
    <input type="number" class="" v-model="cantidad" id="cantidad" placeholder="Ingrese los kg">
 <span class="ms-3">{{total}} lb/s</span>
  </div>
  <div class="">
    <a href="#" v-on:click="convertirpeso" class="btn btn-primary ms-3 px-3">Convertir</a>
  </div>
</div>
      </div>

<!-- MONEDA -->
<div class="col-sm-6">
<div class="card">
  <div class="card-header text-center">
    Moneda
  </div>
  <div class="card-body">
    <h5 class="card-title text-left">Dolar a euro</h5>
    <input type="number" class="" v-model="cantidadmoneda" id="cantidad" placeholder="Ingrese los dolares">
 <span class="ms-3">{{totalmoneda}} euro/s</span>
  </div>
  <div class="">
    <a href="#" v-on:click="convertirmoneda" class="btn btn-primary ms-3 px-3">Convertir</a>
  </div>
</div>
      </div>
          

          <!-- LONGITUD -->

          <div class="col-sm-6">
<div class="card">
  <div class="card-header text-center">
    Longitud
  </div>
  <div class="card-body">
    <h5 class="card-title text-left">Kilometro a millas</h5>
    <input type="number" class="" v-model="cantidadkilometros" id="cantidad" placeholder="Ingrese los kilometros">
 <span class="ms-3">{{totalkilometro}} milla/s</span>
  </div>
  <div class="">
    <a href="#" v-on:click="convertirkilometros" class="btn btn-primary ms-3 px-3">Convertir</a>
  </div>
</div>
      </div>

<!-- TIEMPO -->

      <div class="col-sm-6">
<div class="card">
  <div class="card-header text-center">
    Tiempo
  </div>
  <div class="card-body">
    <h5 class="card-title text-left">Dias a horas</h5>
    <input type="number" class="" v-model="cantidadtiempo" id="cantidad" placeholder="Ingrese los dias">
 <span class="ms-3">{{totaltiempo}} hora/s</span>
  </div>
  <div class="">
    <a href="#" v-on:click="convertirtiempo" class="btn btn-primary ms-3 px-3">Convertir</a>
  </div>
</div>
      </div>

      <!-- Almacenamiento -->

<div class="col-sm-6">
<div class="card">
  <div class="card-header text-center">
    Almacenamiento
  </div>
  <div class="card-body">
    <h5 class="card-title text-left">Gigabytes a megas</h5>
    <input type="number" class="" v-model="cantidadalmacenamiento" id="cantidad" placeholder="Ingrese los Gigabytes">
 <span class="ms-3">{{totalalmacenamiento}} mega/s </span>
  </div>
  <div class="">
    <a href="#" v-on:click="convertiralmacenamiento" class="btn btn-primary ms-3 px-3">Convertir</a>
  </div>
</div>
      </div>

      

    </div>
    





  </div>

  

  
</template>


<script>

export default {
    name: 'Convertidor',
  data() {
    return {
      
      total:0,
      cantidad:'',

      cantidadmoneda:'',
      totalmoneda:0,

      cantidadkilometros:'',
      totalkilometro:0,

      cantidadtiempo:'',
      totaltiempo:0,

      cantidadalmacenamiento:'',
      totalalmacenamiento:0
      
    }
  },
  methods: {
    convertirpeso(){
      this.total =  this.cantidad * 2.205;
    },

    convertirmoneda(){
      this.totalmoneda = this.cantidadmoneda * 0.88
    },

    convertirkilometros(){
      this.totalkilometro = this.cantidadkilometros * 0.62
    },

  
      convertirtiempo(){
      this.totaltiempo = this.cantidadtiempo * 24 
    },

    convertiralmacenamiento(){
      this.totalalmacenamiento = this.cantidadalmacenamiento * 1000
    }
    
  },
  
}

</script>