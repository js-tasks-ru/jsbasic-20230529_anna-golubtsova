let calculator = {
  a: +prompt('a?', 0),
  b: +prompt('b?', 0),

  sum: function() {
    return this.a + this.b;
  },

  mul: function() {
    return this.a * this.b;
  },

  read: function(a, b) {
    this.a = a;
    this.b = b;
  }
};


// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
