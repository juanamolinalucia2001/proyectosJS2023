const personas = [
    new Persona('Juan','Lopez'),
    new Persona('Francisco','Vera')
];

function cargarPersonas(){
    let texto='';
    for(persona of personas){
        texto+=`<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById('personas').innerHTML=texto;
}

function agregarPersona(){
    const formulario= document.forms['formulario'];
    let nombre =formulario['nombre'];
    let apellido =formulario['apellido'];
    if(nombre.value !='' && apellido !=''){
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        cargarPersonas();
    }
    else{
        alert('No se encontro información que agregar')
    }
    
}