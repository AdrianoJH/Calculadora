export default {
    name: 'Calculadora',
    data() {
      return {
        numeroAnterior: null,
        valorCorrente: '',
        operador: null,
        operadorClicado: false,
      };
    },
  
    methods: {
      limpar() {
        this.valorCorrente = '';
      },
  
      sinal() {
        this.valorCorrente = this.valorCorrente.charAt(0) === '-'
          ? this.valorCorrente.slice(1)
          : `-${this.valorCorrente}`;
      },
  
      porcentagem() {
        this.valorCorrente = `${parseFloat(this.valorCorrente) / 100}`;
      },
  
      juntarNumeros(numero) {
        if (this.operadorClicado) {
          this.valorCorrente = '';
          this.operadorClicado = false;
        }
        this.valorCorrente = `${this.valorCorrente}${numero}`;
      },
  
      ponto() {
        if (this.valorCorrente.indexOf('.') === -1) {
          this.juntarNumeros('.');
        }
      },
  
      setarValor() {
        this.numeroAnterior = this.valorCorrente;
        this.operadorClicado = true;
      },
  
      dividir() {
        this.operador = (a, b) => a / b;
        this.setarValor();
      },
  
      multiplicar() {
        this.operador = (a, b) => a * b;
        this.setarValor();
      },
  
      diminuir() {
        this.operador = (a, b) => a - b;
        this.setarValor();
      },
  
      somar() {
        this.operador = (a, b) => a + b;
        this.setarValor();
      },
  
     
      resultado() {
        this.valorCorrente = `${this.operador(
          parseFloat(this.numeroAnterior),
          parseFloat(this.valorCorrente),
        )}`;
        this.numeroAnterior = null;
      },
    },
  };