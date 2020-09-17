"use strict";

require("core-js/modules/web.dom-collections.iterator");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _private = new WeakMap();

var Ukelele = /*#__PURE__*/function () {
  function Ukelele(tipo, cuerdas, trastes) {
    _classCallCheck(this, Ukelele);

    var atributosPrivados = {
      _tipo: tipo,
      _cuerdas: cuerdas,
      _trastes: trastes
    };

    _private.set(this, {
      atributosPrivados: atributosPrivados
    });
    /*  console.log(_private.get(this).atributosPrivados) */

  }

  _createClass(Ukelele, [{
    key: "tocarGuitarra",
    value: function tocarGuitarra() {
      return "Tocando la guitarra ".concat(this.tipo, " de ").concat(this.cuerdas, " cuerdas y ").concat(this.trastes, " trastes");
    }
  }, {
    key: "cuerdas",
    get: function get() {
      return _private.get(this).atributosPrivados._cuerdas;
    },
    set: function set(nueva_cuerda) {
      _private.get(this).atributosPrivados._cuerdas = nueva_cuerda;
    }
  }, {
    key: "tipo",
    get: function get() {
      return _private.get(this).atributosPrivados._tipo;
    },
    set: function set(nueva_tipo) {
      _private.get(this).atributosPrivados._tipo = nueva_tipo;
    }
  }, {
    key: "trastes",
    get: function get() {
      return _private.get(this).atributosPrivados._trastes;
    },
    set: function set(nueva_trastes) {
      _private.get(this).atributosPrivados._trastes = nueva_trastes;
    }
  }]);

  return Ukelele;
}();

var u1 = Object.freeze(new Ukelele('Electrica', 7, 24));
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