var _private = new WeakMap();

function Ukelele(tipo, n_cuerdas, n_trastes){

    var atributosPrivados = {
        _tipo : tipo,
        _n_cuerdas : n_cuerdas,
        _n_trastes : n_trastes,
    }

    // a la variable global se le asigna el metodo set
    _private.set(this,{atributosPrivados});

    /* console.log(_private.get(this).atributosPrivados);
    console.log(_private.get(this).atributosPrivados['_tipo']);
    console.log(_private.get(this).atributosPrivados._n_cuerdas); */
}

Ukelele.prototype.getAtributos = function(){
   return _private.get(this).atributosPrivados
}

Ukelele.prototype.getTipo = function(){
    return _private.get(this).atributosPrivados._tipo
}

Ukelele.prototype.setTipo = function(nuevo_tipo){
    _private.get(this).atributosPrivados._tipo = nuevo_tipo;
}

var u1 =  new Ukelele('Acustico',4,12);
console.log(u1);
console.log(u1.n_trastes);
console.log(u1.getAtributos());
console.log(u1.getAtributos()._n_cuerdas);
console.log(u1.getAtributos()['_tipo']);
u1.setTipo('Roca');
console.log(u1.getTipo());

// MALO
/* u1.tipo = 'Electrica';
u1._tipo = 'Electroacutica';
console.log(u1.tipo);
console.log(u1._tipo);
console.log(u1); */

//Bloquear para que no se agreguen propiedades
var u2 = Object.freeze(new Ukelele('Acustico',4,12));

u2.tipo = 'Electrica';
u2._tipo = 'Electroacutica';
console.log(u2.tipo);
console.log(u2._tipo);
console.log(u2);