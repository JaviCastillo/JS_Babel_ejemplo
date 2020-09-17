var _private = new WeakMap();

class Ukelele{
    constructor(tipo, cuerdas, trastes){
       var atributosPrivados = {
        _tipo : tipo,
        _cuerdas : cuerdas,
        _trastes : trastes
       }
        
       _private.set(this,{atributosPrivados})
      /*  console.log(_private.get(this).atributosPrivados) */
    }

    get cuerdas(){
        return _private.get(this).atributosPrivados._cuerdas
    }

    set cuerdas(nueva_cuerda){
        _private.get(this).atributosPrivados._cuerdas = nueva_cuerda
    }

    get tipo(){
        return _private.get(this).atributosPrivados._tipo
    }

    set tipo(nueva_tipo){
        _private.get(this).atributosPrivados._tipo = nueva_tipo
    }

    get trastes(){
        return _private.get(this).atributosPrivados._trastes
    }

    set trastes(nueva_trastes){
        _private.get(this).atributosPrivados._trastes = nueva_trastes
    }

    tocarGuitarra(){
        return `Tocando la guitarra ${this.tipo} de ${this.cuerdas} cuerdas y ${this.trastes} trastes`
    }
}

let u1 = Object.freeze(new Ukelele('Electrica', 7 , 24));

console.log(u1);
console.log(u1.cuerdas);
u1.cuerdas = 9;
console.log(u1.cuerdas);
console.log(u1);
console.log(u1.tocarGuitarra());
u1.tipo = 'Acustica';
console.log(u1.tocarGuitarra());
u1.trastes = 22;
console.log(u1.trastes);
console.log(u1.tocarGuitarra());
console.log(u1);