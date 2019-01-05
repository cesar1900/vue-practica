/* global swal */

const app = new Vue({
    el: '#app',
    data: {
        pacientes: [],
        nuevo_NHC: '',
        nuevo_nombre: '', nuevo_apellido1: '',nuevo_apellido2: '',
        nuevo_genero: '', nuevo_fecha_nacimiento: '', nuevo_identificacion: '',
        nuevo_direccion: '', nuevo_barrio: '', nuevo_ciudad: '',
        nuevo_departamento: '', nuevo_nombre_aseguradora: '',
        nuevo_tipo_aseguradora: '', nuevo_numero_tarjeta: '',
        paciente: true
    },
    methods:{
       agregar_paciente(){
           this.pacientes.push(
                   {
                       NHC: this.nuevo_NHC, 
                       nombre: this.nuevo_nombre,
                       apellido1: this.nuevo_apellido1,
                       apellido2: this.nuevo_apellido2,
                       genero: this.nuevo_genero,
                       fecha_nacimiento: this.nuevo_fecha_nacimiento,
                       identificacion: this.nuevo_identificacion,
                       direccion: this.nuevo_direccion,
                       barrio: this.nuevo_barrio,
                       ciudad: this.nuevo_ciudad,
                       departamento: this.nuevo_departamento,
                       nombre_aseguradora: this.nuevo_nombre_aseguradora,
                       tipo_aseguradora: this.nuevo_tipo_aseguradora,
                       numero_tarjeta: this.nuevo_numero_tarjeta
                   }
                    );
           if(this.nuevo_NHC===''){
               swal('Falta el NHC','Es un dato obligatorio','warning');
           } else if(this.nuevo_nombre===''){
                swal('Falta el nombre','Es un dato obligatorio','warning');
           }else if(this.nuevo_apellido1===''){
               swal('Falta el 1er apellido','Es un dato obligatorio','warning');
           }else{
                       this.nuevo_NHC = '';
                       this.nuevo_nombre = '';
                       this.nuevo_apellido1 = '';
                       this.nuevo_apellido2 = '';
                       this.nuevo_genero = '';
                       this.nuevo_fecha_nacimiento = '';
                       this.nuevo_identificacion = '';
                       this.nuevo_direccion = '';
                       this.nuevo_barrio = '';
                       this.nuevo_ciudad = '';
                       this.nuevo_departamento = '';
                       this.nuevo_nombre_aseguradora = '';
                       this.nuevo_tipo_aseguradora = '';
                       this.nuevo_numero_tarjeta = '';
                       localStorage.setItem('usuarios-vue', JSON.stringify(this.pacientes));
                       swal('Guardado','los datos del paciente se guardaron','success');
           }
            
       },
       eliminar_paciente(index){
           var del =this.pacientes.indexOf(index);
           swal({
               title: "Estas seguro",
               text: "Los datos del paciente se eliminaran",
               icon: "error",
               buttons: true,
               dangerMode:true
              
           }).then((willDelete) =>{
               if(willDelete){
                    this.pacientes.splice(del,1);
                     localStorage.setItem('usuarios-vue', JSON.stringify(this.pacientes));
               } 
           }
                   );
          
       },
       editar_paciente(index,NHC){
           console.log(index,NHC);
       },
       ver_paciente(index,NHC, nombre, apellido1, apellido2){
            console.log(index,NHC, nombre, apellido1, apellido2);
       }
    },
    created:function(){
     let datosDB = JSON.parse(localStorage.getItem('usuarios-vue')); 
     if(datosDB === null)
     {
         this.pacientes =[];
     }else{
         this.pacientes =datosDB;
     }
    }
});
 