const container=document.querySelector(".app");

const myApp=[
              { 
               type:":: VOGAIS :: INICIAIS",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"A",options:['ESTRELA.jpg','IGLU.jpg','ABACAXI.jpg','OVOS.jpg'],key:2},

                           {question:"Á",options:['ARVORE.jpg','OVELHA.jpg','IGREJA.jpg','UVA.jpg'],key:0},

                           {question:"Ô",options:['UNICORNIO.jpg','ESQUILO.jpg','ONIBUS.jpg','ABOBORA.jpg'],key:2},
                        
                           {question:"E",options:['ILHA.jpg','UVA.jpg','OVELHA.jpg','ESPELHO.jpg'],key:3},                      
                           
                           {question:"A",options:['ARANHA.jpg','OURO.jpg','IGREJA.jpg','INVERNO.jpg'],key:0},

                           {question:"A",options:['INVERNO.jpg','ILHA.jpg','IORGUTE.jpg','ARARA.jpg'],key:3},
                           
                           {question:"I",options:['OLHO.jpg','ORELHA.jpg','ARARA.jpg','INVERNO.jpg'],key:3},                       

                           {question:"A",options:['OLHO.jpg','ELEFANTE.jpg','ASTRONAUTA.jpg','ILHA.jpg'],key:2},

                           {question:"A",options:['OURO.jpg','INDIO.jpg','ARMARIO.jpg','UVA.jpg'],key:2},

                           {question:"I",options:['ESPAGUETE.jpg','IORGUTE.jpg','UNICORNIO.jpg','ABACATE.jpg'],key:1},

                           {question:"I",options:['INCENDIO.jpg','OVELHA.jpg','ABACAXI.jpg','UIVO.jpg'],key:0},

                           {question:"A",options:['ORELHA.jpg','URNA.jpg','ABACATE.jpg','OITO.jpg'],key:2},

                           {question:"I",options:['ESPAGUETE.jpg','ESCOVA.jpg','ILHA.jpg','ELEFANTE.jpg'],key:2},

                           {question:"I",options:['AVIAO.jpg','IMA.jpg','ESPELHO.jpg','ESCADA.jpg'],key:1},

                           {question:"I",options:['IGLU.jpg','ESPADA.jpg','ESQUILO.jpg','ARMARIO.jpg'],key:0},

                           {question:"A",options:['IORGUTE.jpg','AVIAO.jpg','INJECAO.jpg','ONDA.jpg'],key:1},       
                                              
                           {question:"I",options:['ARMARIO.jpg','IOIO.jpg','ABOBORA.jpg','ESTRELA.jpg'],key:1},
                           
                           {question:"Í",options:['ESPADA.jpg','UVA.jpg','ESCADA.jpg','INDIO.jpg'],key:3},

                           {question:"E",options:['ESTRELA.jpg','IOIO.jpg','IMA.jpg','IGREJA.jpg'],key:0},                       
                          
                           {question:"U",options:['UVA.jpg','OVOS.jpg','ORELHA.jpg','OSSO.jpg'],key:0},
                           
                           {question:"U",options:['OURO.jpg','OSSO.jpg','OITO.jpg','UM.jpg'],key:3},

                           {question:"O",options:['UIVO.jpg','URNA.jpg','OLHO.jpg','UNIVERSO.jpg'],key:2},
                           
                           {question:"U",options:['OSSO.jpg','ONCA.jpg','URNA.jpg','OVOS.jpg'],key:2},

                           {question:"U",options:['UIVO.jpg','ESQUILO.jpg','OSSO.jpg','OCULOS.jpg'],key:0},

                           {question:"E",options:['OSSO.jpg','UNICORNIO.jpg','ESPAGUETE.jpg','ILHA.jpg'],key:2},                           

                           {question:"A",options:['ABELHA.jpg','ESPADA.jpg','URSO.jpg','EGITO.jpg'],key:0},

                           {question:"E",options:['IOIO.jpg','IGREJA.jpg','IGLU.jpg','ESPANTALHO.jpg'],key:3},

                           {question:"E",options:['IGREJA.jpg','ELEFANTE.jpg','IOIO.jpg','IORGUTE.jpg'],key:1},

                           {question:"O",options:['UVA.jpg','UNIFORME.jpg','UIVO.jpg','ONDA.jpg'],key:3},

                           {question:"A",options:['ELEFANTE.jpg','ABOBORA.jpg','ESQUILO.jpg','ESPADA.jpg'],key:1},

                           {question:"E",options:['ESQUILO.jpg','IMA.jpg','IOIO.jpg','ILHA.jpg'],key:0},

                           {question:"E",options:['IMA.jpg','IOIO.jpg','ESPELHO.jpg','IORGUTE.jpg'],key:2},

                           {question:"I",options:['ESPELHO.jpg','ESTRELA.jpg','INVERNO.jpg','ELEFANTE.jpg'],key:2},
                              
                           {question:"U",options:['OLHO.jpg','OVOS.jpg','OITO.jpg','UNICORNIO.jpg'],key:3},
                              
                           {question:"E",options:['IGREJA.jpg','IORGUTE.jpg','IOIO.jpg','ESPADA.jpg'],key:3},

                           {question:"E",options:['ILHA.jpg','ESCADA.jpg','IOIO.jpg','IMA.jpg'],key:1},

                           {question:"O",options: ['OITO.jpg','UNIVERSO.jpg','UVA.jpg','UNIFORME.jpg'],key:0},

                           {question:"O",options:['UNHAS.jpg','URSO.jpg','ORELHA.jpg','UNICORNIO.jpg'],key:2},
      
                           {question:"O",options:['UNICORNIO.jpg','OSSO.jpg','URNA.jpg','UVA.jpg'],key:1},

                           {question:"Ó",options:['OCULOS.jpg','UNICORNIO.jpg','UVA.jpg','UNIFORME.jpg'],key:0},

                           {question:"O",options:['UNIFORME.jpg','UVA.jpg','ONCA.jpg','URNA.jpg'],key:2},

                           {question:"U",options:['OURO.jpg','OSSO.jpg','ORELHA.jpg','UNHAS.jpg' ],key:3},

                           {question:"O",options:['URNA.jpg','UNICORNIO.jpg','OURO.jpg','UNIFORME.jpg'],key:2},

                           {question:"U",options:['OITO.jpg','OURO.jpg','UNIVERSO.jpg','OVELHA.jpg'],key:2},

                           {question:"U",options:['OCULOS.jpg','UNIFORME.jpg','OSSO.jpg','OVELHA.jpg'],key:1},

                           {question:"O",options:['OVELHA.jpg','UNIVERSO.jpg','URSO.jpg','UVA.jpg'],key:0},

                           {question:"U",options:['ORELHA.jpg','OURO.jpg','URSO.jpg','OVELHA.jpg'],key:2},

                           {question:"I",options:['IGREJA.jpg','ESQUILO.jpg','ESCADA.jpg','EGITO.jpg'],key:0},

                           {question:"U",options:['OVOS.jpg','ORELHA.jpg','OSSO.jpg','URUBU.jpg'],key:3},
    
                           {question:"E",options:['ESCORREGADOR.jpg','ILHA.jpg','IMA.jpg','IOIO.jpg'],key:0}

                          ]
              },

              { 
                   type:":: VOGAIS :: PALAVRAS",
                   msg:" ",
                   path:"images/vogais",
                   structure:[
                               {question:"ESTRELA",options:['ESTRELA.jpg','IGLU.jpg','ABACAXI.jpg','OVOS.jpg'],key:0},

                               {question:"OVELHA",options:['ARVORE.jpg','OVELHA.jpg','IGREJA.jpg','UVA.jpg'],key:1},

                               {question:"ABÓBORA",options:['UNICORNIO.jpg','ESQUILO.jpg','ONIBUS.jpg','ABOBORA.jpg'],key:3},
                        
                               {question:"ILHA",options:['ILHA.jpg','UVA.jpg','OVELHA.jpg' ,'ELEFANTE.jpg'],key:0},                      
                           
                               {question:"ARANHA",options:['INVERNO.jpg','OURO.jpg','IGREJA.jpg','ARANHA.jpg'],key:3},

                               {question:"INVERNO",options:['INVERNO.jpg','ILHA.jpg','IORGUTE.jpg','ARARA.jpg'],key:0},
                           
                               {question:"ORELHA",options:['OLHO.jpg','ORELHA.jpg','ESCADA.jpg','ESTRELA.jpg'],key:1},                       

                               {question:"ASTRONAUTA",options:['OLHO.jpg','ELEFANTE.jpg','ASTRONAUTA.jpg','ILHA.jpg'],key:2},

                               {question:"UVA",options:['OURO.jpg','INDIO.jpg','ARMARIO.jpg','UVA.jpg'],key:3},

                               {question:"IOGURTE",options:['ESPAGUETE.jpg','IORGUTE.jpg','UNICORNIO.jpg','ABACATE.jpg'],key:1},

                               {question:"UIVO",options:['INCENDIO.jpg','OVELHA.jpg','ABACAXI.jpg','UIVO.jpg'],key:3},

                               {question:"ABACATE",options:['ORELHA.jpg','URNA.jpg','ABACATE.jpg','OITO.jpg'],key:2},

                               {question:"INCÊNDIO",options:['INCENDIO.jpg','ESCOVA.jpg','ESPAGUETE.jpg','ELEFANTE.jpg'],key:0},

                               {question:"EGITO",options:['AVIAO.jpg','EGITO.jpg','IMA.jpg','ESCADA.jpg'],key:1},

                               {question:"IGLU",options:['ESQUILO.jpg','ESPADA.jpg','IGLU.jpg','ARMARIO.jpg'],key:2},

                               {question:"AVIÃO",options:['IORGUTE.jpg','AVIAO.jpg','ARARA.jpg','ONDA.jpg'],key:1},       
                                              
                               {question:"IOIÔ",options:['ARMARIO.jpg','ESTRELA.jpg','ABOBORA.jpg','IOIO.jpg'],key:3},
                           
                               {question:"ÍNDIO",options:['ESPADA.jpg','INDIO.jpg','ESCADA.jpg','UVA.jpg'],key:1},

                               {question:"ESPELHO",options:['ILHA.jpg','IOIO.jpg','IORGUTE.jpg','ESPELHO.jpg'],key:3},                       
                          
                               {question:"UVA",options:['ORELHA.jpg','OVOS.jpg','UVA.jpg','OSSO.jpg'],key:2},
                           
                               {question:"UM",options:['OURO.jpg','OSSO.jpg','OITO.jpg','UM.jpg'],key:3},

                               {question:"OLHO",options:['UIVO.jpg','URNA.jpg','OLHO.jpg','UNIVERSO.jpg'],key:2},
                           
                               {question:"URNA",options:['OSSO.jpg','ONCA.jpg','URNA.jpg','ORELHA.jpg'],key:2},

                               {question:"UIVO",options:['UIVO.jpg','ESQUILO.jpg','OSSO.jpg','OCULOS.jpg'],key:0},

                               {question:"ESPAGUETE",options:['OSSO.jpg','UNICORNIO.jpg','ESPAGUETE.jpg','ILHA.jpg'],key:2},                           

                               {question:"ABELHA",options:['ABELHA.jpg','ESPADA.jpg','URSO.jpg','EGITO.jpg'],key:0},

                               {question:"ESPANTALHO",options:['IOIO.jpg','IGREJA.jpg','IGLU.jpg','ESPANTALHO.jpg'],key:3},

                               {question:"ELEFANTE",options:['IGREJA.jpg','ELEFANTE.jpg','IOIO.jpg','IORGUTE.jpg'],key:1},

                               {question:"ONDA",options:['UVA.jpg','UNIFORME.jpg','UIVO.jpg','ONDA.jpg'],key:3},

                               {question:"ARARA",options:['ELEFANTE.jpg','ARARA.jpg','ESQUILO.jpg','ESPADA.jpg'],key:1},

                               {question:"ESQUILO",options:['ESQUILO.jpg','IMA.jpg','IOIO.jpg','ILHA.jpg'],key:0},

                               {question:"EGITO",options:['IMA.jpg','IOIO.jpg','EGITO.jpg','IORGUTE.jpg'],key:2},

                               {question:"INJEÇÃO",options:['ESPELHO.jpg','ESTRELA.jpg','INJECAO.jpg','IORGUTE.jpg'],key:2},
                              
                               {question:"UNICÓRNIO",options:['OLHO.jpg','OVOS.jpg','OITO.jpg','UNICORNIO.jpg'],key:3},
                              
                               {question:"ESPADA",options:['IGREJA.jpg','IORGUTE.jpg','IOIO.jpg','ESPADA.jpg'],key:3},

                               {question:"ESCADA",options:['ILHA.jpg','ESCADA.jpg','IOIO.jpg','IMA.jpg'],key:1},

                               {question:"OITO",options: ['OITO.jpg','UNIVERSO.jpg','UVA.jpg','UNIFORME.jpg'],key:0},

                               {question:"ORELHA",options:['UNHAS.jpg','URSO.jpg','ORELHA.jpg','UNICORNIO.jpg'],key:2},
      
                               {question:"OSSO",options:['UNICORNIO.jpg','OSSO.jpg','URNA.jpg','UVA.jpg'],key:1},

                               {question:"ÓCULOS",options:['UVA.jpg','UNICORNIO.jpg','OCULOS.jpg','UNIFORME.jpg'],key:2},

                               {question:"ONÇA",options:['UNIFORME.jpg','UVA.jpg','URNA.jpg','ONCA.jpg'],key:3},

                               {question:"UNHAS",options:['UNHAS.jpg','OSSO.jpg','ORELHA.jpg','OURO.jpg'],key:0},

                               {question:"OURO",options:['URNA.jpg','OURO.jpg','UNICORNIO.jpg','UNIFORME.jpg'],key:1},

                               {question:"UNIVERSO",options:['OITO.jpg','OURO.jpg','OVELHA.jpg','UNIVERSO.jpg'],key:3},

                               {question:"UNIFORME",options:['OCULOS.jpg','OSSO.jpg','UNIFORME.jpg','OVELHA.jpg'],key:2},

                               {question:"OVOS",options:['UVA.jpg','UNIVERSO.jpg','OVOS.jpg','URSO.jpg'],key:2},

                               {question:"URSO",options:['URSO.jpg','OURO.jpg','ORELHA.jpg','OVELHA.jpg'],key:0},

                               {question:"IGREJA",options:['EGITO.jpg','ESQUILO.jpg','ESCADA.jpg','IGREJA.jpg'],key:3},

                               {question:"URUBU",options:['OVOS.jpg','URUBU.jpg','OSSO.jpg','ORELHA.jpg'],key:1},
    
                               {question:"ESCORREGADOR",options:['IMA.jpg','ILHA.jpg','ESCORREGADOR.jpg','IOIO.jpg'],key:2}

                          ]
              },
         { 
               type:":: B :: INICIAIS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                               {question:"BA",options:['BULE.jpg','BALDE.jpg','BONECA.jpg','BOLICHE.jpg'],key:1},

                               {question:"BA",options:['BATATA.jpg','BURRO.jpg','BOLA.jpg','BETERRABA.jpg'],key:0},

                               {question:"BA",options:['BUQUE.jpg','BELICHE.jpg','BERINJELA.jpg','BALA.jpg'],key:3},
                        
                               {question:"BA",options:['BOMBOM.jpg','BARATA.jpg','BOTAO.jpg','BISCOITO.jpg'],key:1},                      
                           
                               {question:"BA",options:['BICICLETA.jpg','BERMUDA.jpg','BARBEIRO.jpg','BOMBEIRO.jpg'],key:2},

                               {question:"BA",options:['BANANA.jpg','BEBE.jpg','BINOCULO.jpg','BEIJAFLOR.jpg'],key:0},
                           
                               {question:"BA",options:['BURRITO.jpg','BUDA.jpg','BIFE.jpg','BARCO.jpg'],key:3},                       

                               {question:"BA",options:['BULMERANGUE.jpg','BIBLIOTECA.jpg','BALEIA.jpg','BICICLETA.jpg'],key:2},

                               {question:"BA",options:['BOCA.jpg','BALANCO.jpg','BOMBOM.jpg','BESOURO.jpg'],key:1},

                               {question:"BA",options:['BARRIL.jpg','BOLSA.jpg','BUQUE.jpg','BICO.jpg'],key:0},

                               {question:"BA",options:['BERINJELA.jpg','BOTAO.jpg','BASQUETE.jpg','BULE.jpg'],key:2},

                               {question:"BA",options:['BOMBOM.jpg','BOTAO.jpg','BUDA.jpg','BARRACA.jpg'],key:3},

                               {question:"BE",options:['BIFE.jpg','BESOURO.jpg','BASQUETE.jpg','BALA.jpg'],key:1},

                               {question:"BE",options:['BERINJELA.jpg','BALANCO.jpg','BICO.jpg','BATERIA.jpg'],key:0},

                               {question:"BE",options:['BOLA.jpg','BOLACHA.jpg','BEXIGAS.jpg','BINOCULO.jpg'],key:2},

                               {question:"BE",options:['BISCOITO.jpg','BOLO.jpg','BURRITO.jpg','BETERRABA.jpg'],key:3},       
                                              
                               {question:"BA",options:['BOLSA.jpg','BANCO.jpg','BETERRABA.jpg','BULE.jpg'],key:1},
                           
                               {question:"BE",options:['BEIJAFLOR.jpg','BURRO.jpg','BANCO.jpg','BARATA.jpg'],key:0},

                               {question:"BE",options:['BORRACHA.jpg','BOTAO.jpg','BELICHE.jpg','BATEDEIRA.jpg'],key:2},                       
                          
                               {question:"BE",options:['BOCA.jpg','BARRACA.jpg','BIBLIOTECA.jpg','BERMUDA.jpg'],key:3},
                           
                               {question:"BI",options:['BOTA.jpg','BINOCULO.jpg','BOLACHA.jpg','BAILARINA.jpg'],key:1},

                               {question:"BA",options:['BATEDEIRA.jpg','BESOURO.jpg','BERMUDA.jpg','BIFE.jpg'],key:0},
                           
                               {question:"BO",options:['BARBEIRO.jpg','BUQUE.jpg','BOXE.jpg','BEBE.jpg'],key:2},

                               {question:"BE",options:['BURRO.jpg','BOLSA.jpg','BOCA.jpg','BEBE.jpg'],key:3},

                               {question:"BI",options:['BOLO.jpg','BISCOITO.jpg','BALA.jpg','BOLACHA.jpg'],key:1},                           

                               {question:"BI",options:['BIFE.jpg','BETERRABA.jpg','BATATA.jpg','BOLSA.jpg'],key:0},

                               {question:"BI",options:['BERMUDA.jpg','BANCO.jpg','BIGODE.jpg','BOTAO.jpg'],key:2},

                               {question:"BU",options:['BINOCULO.jpg','BELICHE.jpg','BICICLETA.jpg','BULMERANGUE.jpg'],key:3},

                               {question:"BI",options:['BASQUETE.jpg','BICICLETA.jpg','BOLA.jpg','BOLICHE.jpg'],key:1},

                               {question:"BI",options:['BARATA.jpg','BORRACHA.jpg','BESOURO.jpg','BIBLIOTECA.jpg'],key:3},

                               {question:"BU",options:['BULE.jpg','BERINJELA.jpg','BOLO.jpg','BALA.jpg'],key:0},

                               {question:"BO",options:['BEBE.jpg','BIBLIOTECA.jpg','BOLSA.jpg','BATERIA.jpg'],key:2},
                              
                               {question:"BU",options:['BORBOLETA.jpg','BURRO.jpg','BOTAO.jpg','BOMBEIRO.jpg'],key:1},
                              
                               {question:"BO",options:['BEXIGAS.jpg','BURRO.jpg','BARATA.jpg','BORBOLETA.jpg'],key:3},

                               {question:"BO",options:['BOCA.jpg','BELICHE.jpg','BAILARINA.jpg','BARCO.jpg'],key:0},

                               {question:"BO",options: ['BARCO.jpg','BEIJAFLOR.jpg','BOTA.jpg','BUDA.jpg'],key:2},

                               {question:"BO",options:['BUDA.jpg','BOTAO.jpg','BURRITO.jpg','BATERIA.jpg'],key:1},
      
                               {question:"BO",options:['BUQUE.jpg','BARCO.jpg','BIFE.jpg','BOLICHE.jpg'],key:3},

                               {question:"BI",options:['BICO.jpg','BEBE.jpg','BORRACHA.jpg','BALANCO.jpg'],key:0},

                               {question:"BU",options:['BIBLIOTECA.jpg','BAILARINA.jpg','BUDA.jpg','BASQUETE.jpg'],key:2},

                               {question:"BU",options:['BIFE.jpg','BURRITO.jpg','BOLO.jpg','BOMBOM.jpg'],key:1},

                               {question:"BO",options:['BARRACA.jpg','BINOCULO.jpg','BURRO.jpg','BOLA.jpg'],key:3},

                               {question:"BO",options:['BOLACHA.jpg','BIFE.jpg','BALA.jpg','BATATA.jpg'],key:0},

                               {question:"BO",options:['BERMUDA.jpg','BICICLETA.jpg','BOTAO.jpg','BEXIGAS.jpg'],key:2},

                               {question:"BO",options:['BEXIGAS.jpg','BORRACHA.jpg','BESOURO.jpg','BARATA.jpg'],key:1},

                               {question:"BO",options:['BISCOITO.jpg','BURRITO.jpg','BALA.jpg','BOLO.jpg'],key:3},

                               {question:"BO",options:['BOMBEIRO.jpg','BAILARINA.jpg','BASQUETE.jpg','BARBEIRO.jpg'],key:0},

                               {question:"BO",options:['BISCOITO.jpg','BOMBOM.jpg','BALA.jpg','BETERRABA.jpg'],key:1},

                               {question:"BU",options:['BORBOLETA.jpg','BIGODE.jpg','BUQUE.jpg','BOLA.jpg'],key:2},
    
                               {question:"BO",options:['BULMERANGUE.jpg','BAILARINA.jpg','BASQUETE.jpg','BONECA.jpg'],key:3}

                        ]
              },

             { 

                   type:":: B :: PALAVRAS  ",
                   msg:" ",
                   path:"images/vogais",
                   structure:[
                               {question:"BALDE",options:['BULE.jpg','BONECA.jpg','BALDE.jpg','BOLICHE.jpg'],key:2},

                               {question:"BATATA",options:['BETERRABA.jpg','BURRO.jpg','BOLA.jpg','BATATA.jpg'],key:3},

                               {question:"BALA",options:['BALA.jpg','BELICHE.jpg','BERINJELA.jpg','BUQUE.jpg'],key:0},
                        
                               {question:"BARATA",options:['BOMBOM.jpg','BOTAO.jpg','BARATA.jpg','BISCOITO.jpg'],key:2},                      
                           
                               {question:"BARBEIRO",options:['BARBEIRO.jpg','BERMUDA.jpg','BOXE.jpg','BOMBEIRO.jpg'],key:0},

                               {question:"BANANA",options:['BEBE.jpg','BANANA.jpg','BINOCULO.jpg','BEIJAFLOR.jpg'],key:1},
                           
                               {question:"BARCO",options:['BURRITO.jpg','BUDA.jpg','BIFE.jpg','BARCO.jpg'],key:3},                       

                               {question:"BALEIA",options:['BALEIA.jpg','BIBLIOTECA.jpg','BULMERANGUE.jpg','BICICLETA.jpg'],key:0},

                               {question:"BALANÇO",options:['BOCA.jpg','BOMBOM.jpg','BALANCO.jpg','BESOURO.jpg'],key:2},

                               {question:"BARRIL",options:['BOLSA.jpg','BARRIL.jpg','BUQUE.jpg','BICO.jpg'],key:1},

                               {question:"BASQUETE",options:['BERINJELA.jpg','BOTAO.jpg','BULE.jpg','BASQUETE.jpg'],key:3},

                               {question:"BARRACA",options:['BARRACA.jpg','BOTAO.jpg','BUDA.jpg','BOMBOM.jpg'],key:0},

                               {question:"BESOURO",options:['BIFE.jpg','BASQUETE.jpg','BESOURO.jpg','BALA.jpg'],key:2},

                               {question:"BERINJELA",options:['BALANCO.jpg','BERINJELA.jpg','BICO.jpg','BATERIA.jpg'],key:1},

                               {question:"BEXIGAS",options:['BEXIGAS.jpg','BOLACHA.jpg','BOLA.jpg','BINOCULO.jpg'],key:0},

                               {question:"BETERRABA",options:['BISCOITO.jpg','BOLO.jpg','BETERRABA.jpg','BURRITO.jpg'],key:2},       
                                              
                               {question:"BANCO",options:['BANCO.jpg','BOLSA.jpg','BETERRABA.jpg','BULE.jpg'],key:0},
                           
                               {question:"BEIJA-FLOR",options:['BARATA.jpg','BURRO.jpg','BANCO.jpg','BEIJAFLOR.jpg'],key:3},

                               {question:"BELICHE",options:['BORRACHA.jpg','BELICHE.jpg','BOTAO.jpg','BATEDEIRA.jpg'],key:1},                       
                          
                               {question:"BERMUDA",options:['BARRACA.jpg','BOCA.jpg','BERMUDA.jpg','BIBLIOTECA.jpg'],key:2},
                           
                               {question:"BINÓCULO",options:['BINOCULO.jpg','BOTA.jpg','BOLACHA.jpg','BAILARINA.jpg'],key:0},

                               {question:"BATEDEIRA",options:['BESOURO.jpg','BATEDEIRA.jpg','BERMUDA.jpg','BIFE.jpg'],key:1},
                           
                               {question:"BOXE",options:['BARBEIRO.jpg','BUQUE.jpg','BEBE.jpg','BOXE.jpg'],key:3},

                               {question:"BEBÊ",options:['BEBE.jpg','BOLSA.jpg','BOCA.jpg','BURRO.jpg'],key:0},

                               {question:"BISCOITO",options:['BOLO.jpg','BISCOITO.jpg','BALA.jpg','BOLACHA.jpg'],key:1},                           

                               {question:"BIFE",options:['BOLSA.jpg','BETERRABA.jpg','BATATA.jpg','BIFE.jpg'],key:3},

                               {question:"BIGODE",options:['BANCO.jpg','BERMUDA.jpg','BIGODE.jpg','BOTAO.jpg'],key:2},

                               {question:"BUMERANGUE",options:['BULMERANGUE.jpg','BELICHE.jpg','BICICLETA.jpg','BINOCULO.jpg'],key:0},

                               {question:"BICICLETA",options:['BASQUETE.jpg','BICICLETA.jpg','BOLA.jpg','BOLICHE.jpg'],key:1},

                               {question:"BIBLIOTECA",options:['BARATA.jpg','BORRACHA.jpg','BESOURO.jpg','BIBLIOTECA.jpg'],key:3},

                               {question:"BULE",options:['BERINJELA.jpg','BULE.jpg','BOLO.jpg','BALA.jpg'],key:1},

                               {question:"BOLSA",options:['BEBE.jpg','BIBLIOTECA.jpg','BOLSA.jpg','BATERIA.jpg'],key:2},
                              
                               {question:"BURRO",options:['BURRO.jpg','BORBOLETA.jpg','BOTAO.jpg','BOMBEIRO.jpg'],key:0},
                              
                               {question:"BORBOLETA",options:['BEXIGAS.jpg','BURRO.jpg','BARATA.jpg','BORBOLETA.jpg'],key:3},

                               {question:"BOCA",options:['BELICHE.jpg','BOCA.jpg','BAILARINA.jpg','BARCO.jpg'],key:1},

                               {question:"BOTA",options: ['BARCO.jpg','BEIJAFLOR.jpg','BUDA.jpg','BOTA.jpg'],key:3},

                               {question:"BOTÃO",options:['BOTAO.jpg','BUDA.jpg','BURRITO.jpg','BATERIA.jpg'],key:0},
      
                               {question:"BOLICHE",options:['BUQUE.jpg','BOLICHE.jpg','BIFE.jpg','BARCO.jpg'],key:1},

                               {question:"BICO",options:['BORRACHA.jpg','BEBE.jpg','BICO.jpg','BALANCO.jpg'],key:2},

                               {question:"BUDA",options:['BIBLIOTECA.jpg','BAILARINA.jpg','BASQUETE.jpg','BUDA.jpg'],key:3},

                               {question:"BURRITO",options:['BURRITO.jpg','BIFE.jpg','BOLO.jpg','BARRACA.jpg'],key:0},

                               {question:"BOLA",options:['BARRACA.jpg','BOLA.jpg','BURRO.jpg','BINOCULO.jpg'],key:1},

                               {question:"BOLACHA",options:['BULE.jpg','BIFE.jpg','BALA.jpg','BOLACHA.jpg'],key:3},

                               {question:"BOTÃO",options:['BOTAO.jpg','BICICLETA.jpg','BERMUDA.jpg','BEXIGAS.jpg'],key:0},

                               {question:"BORRACHA",options:['BEXIGAS.jpg','BESOURO.jpg','BORRACHA.jpg','BARATA.jpg'],key:2},

                               {question:"BOLO",options:['BISCOITO.jpg','BOLO.jpg','BALA.jpg','BURRITO.jpg'],key:1},

                               {question:"BOMBEIRO",options:['BOMBEIRO.jpg','BAILARINA.jpg','BASQUETE.jpg','BARBEIRO.jpg'],key:0},

                               {question:"BOMBOM",options:['BISCOITO.jpg','BOMBOM.jpg','BALA.jpg','BETERRABA.jpg'],key:1},

                               {question:"BUQUÊ",options:['BUQUE.jpg','BIGODE.jpg','BORBOLETA.jpg','BOLA.jpg'],key:0},
    
                               {question:"BONECA",options:['BULMERANGUE.jpg','BAILARINA.jpg','BONECA.jpg','BASQUETE.jpg'],key:2}

                          ]
              },

             { 
               type:":: C :: INICIAIS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                              {question:"CA",options:['CAMISETA.jpg','CUPIDO.jpg','CUBO.jpg','CORTINA.jpg'],key:0},

                              {question:"CO",options:['CADERNO.jpg','CUBO.jpg','COCA.jpg','CAMISETA.jpg'],key:2},

                              {question:"CA",options:['CORTINA.jpg','COCA.jpg','CUBO.jpg','CADERNO.jpg'],key:3},
  
                              {question:"CU",options:['CUBO.jpg','CORTINA.jpg','CAMISETA.jpg','CARAMUJO.jpg'],key:0},
                        
                              {question:"CA",options:['CORTINA.jpg','CORACAO.jpg','CEGONHA.jpg','CAMARAO.jpg'],key:3},                                                                           

                              {question:"CU",options:['CUPIDO.jpg','COZINHA.jpg','CABRITO.jpg','CENTOPEIA.jpg'],key:0},

                              {question:"CO",options:['CABANA.jpg','CANOA.jpg','CORTINA.jpg','CAMINHAO.jpg'],key:2},

                              {question:"CA",options:['CONFEITEIRO.jpg','CANOA.jpg','CORACAO.jpg','COLMEIA.jpg'],key:1},

                              {question:"CO",options:['CORACAO.jpg','CAMINHAO.jpg','CARNEIRO.jpg','CATAVENTO.jpg'],key:0},
  
                              {question:"CA",options:['COROA.jpg','CORTINA.jpg','CAMINHAO.jpg','COUVEFLOR.jpg'],key:2},
                        
                              {question:"CO",options:['CAMINHAO.jpg','CASA.jpg','CANOA.jpg','COROA.jpg'],key:3},
                                                                                
                              {question:"CA",options:['CANHAO.jpg','COROA.jpg','COELHO.jpg','CORTINA.jpg'],key:0},

                              {question:"CO",options:['CANGURU.jpg','CENOURA.jpg','COLMEIA.jpg','CEGONHA.jpg'],key:2},

                              {question:"CA",options:['COCO.jpg','CUBO.jpg','COROA.jpg','CANGURU.jpg'],key:3},

                              {question:"CO",options:['COCO.jpg','CABRITO.jpg','CARROSSEL.jpg','CATAVENTO.jpg'],key:0},

                              {question:"CA",options:['CORTINA.jpg','CABRITO.jpg','CIRCO.jpg','CORUJA.jpg'],key:1},

                              {question:"CO",options:['CARROSSEL.jpg','CASA.jpg','COUVEFLOR.jpg','CAMALEAO.jpg'],key:2},       
                                              
                              {question:"CA",options:['CESTA.jpg','CENTOPEIA.jpg','COGUMELOS.jpg','CACHOEIRA.jpg'],key:3},

                              {question:"CO",options:['COELHO.jpg','CENOURA.jpg','CIRCO.jpg','CALCA.jpg'],key:0},
                           
                              {question:"CA",options:['COGUMELOS.jpg','CEREJAS.jpg','CALOR.jpg','CENOURA.jpg'],key:2},                               

                              {question:"CO",options:['CEREJAS.jpg','CORUJA.jpg','CAMALEAO.jpg','CAVALO.jpg'],key:1},                       
                          
                              {question:"CA",options:['CEREAL.jpg','CIRCO.jpg','CIGANA.jpg','CARROSSEL.jpg'],key:3},

                              {question:"CO",options:['CAVALO.jpg','CATAVENTO.jpg','COLAR.jpg','CAMALEAO.jpg'],key:2},
                           
                              {question:"CA",options:['COLAR.jpg','CAMA.jpg','CESTA.jpg','CEBOLA.jpg'],key:1},

                              {question:"CO",options:['COBRA.jpg','CASACO.jpg','CEGONHA.jpg','CARROSSEL.jpg'],key:0}, 

                              {question:"CA",options:['CENTOPEIA.jpg','COGUMELOS.jpg','CORTINA.jpg','CAMALEAO.jpg'],key:3},

                              {question:"CE",options:['CESTA.jpg','CAMISETA.jpg','CORDEIRO.jpg','CADEIRA.jpg'],key:0},

                              {question:"CA",options:['COELHO.jpg','CABANA.jpg','COBRA.jpg','COLAR.jpg'],key:1},

                              {question:"CI",options:['CENTOPEIA.jpg','CATAVENTO.jpg','CIRCO.jpg','COCO.jpg'],key:2},

                              {question:"CA",options:['CESTA.jpg','CASA.jpg','CENTOPEIA.jpg','CORUJA.jpg'],key:1},

                              {question:"CO",options:['CATAVENTO.jpg','CARROSSEL.jpg','CASTELO.jpg','COGUMELOS.jpg'],key:3},
 
                              {question:"CA",options:['CUPIDO.jpg','CORUJA.jpg','CATAVENTO.jpg','CEREJAS.jpg'],key:2},

                              {question:"CI",options:['CIGANA.jpg','CASACO.jpg','CASTELO.jpg','CAMA.jpg'],key:0},

                              {question:"CA",options:['CEREJAS.jpg','CASACO.jpg','CENTOPEIA.jpg','CORDEIRO.jpg'],key:1},

                              {question:"CE",options:['CORUJA.jpg','CACHORRO.jpg','CERCA.jpg','CAMISETA.jpg'],key:2},
                              
                              {question:"CA",options:['CONFEITEIRO.jpg','COLMEIA.jpg','CENTOPEIA.jpg','CASTELO.jpg'],key:3},

                              {question:"CE",options:['CENTOPEIA.jpg','CANGURU.jpg','CAVALO.jpg','CASA.jpg'],key:0},
                              
                              {question:"CA",options:['CEBOLA.jpg','CACHORRO.jpg','CERCA.jpg','CORDEIRO.jpg'],key:1},

                              {question:"CE",options:['CALCA.jpg','CABANA.jpg','CORUJA.jpg','CEREAL.jpg'],key:3},

                              {question:"CA",options:['CALCA.jpg','CEGONHA.jpg','COLAR.jpg','CORACAO.jpg'],key:0},

                              {question:"CO",options:['CENOURA.jpg','COZINHA.jpg','CERCA.jpg','CASA.jpg'],key:1},

                              {question:"CE",options:['CAMISETA.jpg','CASTELO.jpg','CEREJAS.jpg','CAVALO.jpg'],key:2},

                              {question:"CO",options:['CASTELO.jpg','CARANGUEJO.jpg','CARROSSEL.jpg','CORDEIRO.jpg'],key:3},

                              {question:"CE",options: ['CARROSSEL.jpg','CENOURA.jpg','CADEIRA.jpg','CAMISETA.jpg'],key:1},

                              {question:"CA",options:['CIRCO.jpg','CONFEITEIRO.jpg','COCO.jpg','CARANGUEJO.jpg'],key:3},

                              {question:"CE",options:['CORACAO.jpg','CAVALO.jpg','CARANGUEJO.jpg','CEGONHA.jpg'],key:3},
      
                              {question:"CA",options:['CENTOPEIA.jpg','CEGONHA.jpg','CAVALO.jpg','COZINHA.jpg'],key:2},

                              {question:"CE",options:['CAMISETA.jpg','CEBOLA.jpg','CAMA.jpg','CASA.jpg'],key:1},

                              {question:"CA",options:['CADEIRA.jpg','CERCA.jpg','CENTOPEIA.jpg','CEBOLA.jpg'],key:0},

                              {question:"CO",options:['CAMISETA.jpg','CUPIDO.jpg','CONFEITEIRO.jpg','CERCA.jpg'],key:2}
                        
                       ]
                },
              { 

                   type:":: C :: PALAVRAS ",
                   msg:" ",
                   path:"images/vogais",
                   structure:[
                              {question:"CADERNO",options:['COCA.jpg','CADERNO.jpg','CUBO.jpg','CORTINA.jpg'],key:1},

                              {question:"COCA",options:['CADERNO.jpg','CUBO.jpg','CAMISETA.jpg','COCA.jpg'],key:3},

                              {question:"CAMISETA",options:['CUBO.jpg','CAMISETA.jpg','CUPIDO.jpg','CORTINA.jpg'],key:1},  

                              {question:"CUBO",options:['CUBO.jpg','CORTINA.jpg','CAMISETA.jpg','CARAMUJO.jpg'],key:0},
                        
                              {question:"CAMARÃO",options:['CORTINA.jpg','CORACAO.jpg','CEGONHA.jpg','CAMARAO.jpg'],key:3},                                                                           

                              {question:"CUPIDO",options:['CUPIDO.jpg','COZINHA.jpg','CABRITO.jpg','CENTOPEIA.jpg'],key:0},

                              {question:"CORTINA",options:['CABANA.jpg','CANOA.jpg','CORTINA.jpg','CAMINHAO.jpg'],key:2},

                              {question:"CANOA",options:['CONFEITEIRO.jpg','CANOA.jpg','CORACAO.jpg','COLMEIA.jpg'],key:1},

                              {question:"CORAÇÃO",options:['CORACAO.jpg','CAMINHAO.jpg','CARNEIRO.jpg','CATAVENTO.jpg'],key:0},
  
                              {question:"CAMINHÃO",options:['COROA.jpg','CORTINA.jpg','CAMINHAO.jpg','COUVEFLOR.jpg'],key:2},
                        
                              {question:"COROA",options:['CAMINHAO.jpg','CASA.jpg','CANOA.jpg','COROA.jpg'],key:3},
                                                                                
                              {question:"CANHÃO",options:['CANHAO.jpg','COROA.jpg','COELHO.jpg','CORTINA.jpg'],key:0},

                              {question:"COLMÉIA",options:['CANGURU.jpg','CENOURA.jpg','COLMEIA.jpg','CEGONHA.jpg'],key:2},

                              {question:"CANGURU",options:['COCO.jpg','CUBO.jpg','COROA.jpg','CANGURU.jpg'],key:3},

                              {question:"CABANA",options:['COELHO.jpg','CABANA.jpg','COBRA.jpg','COLAR.jpg'],key:1},

                              {question:"COCÔ",options:['COCO.jpg','CABRITO.jpg','CARROSSEL.jpg','CATAVENTO.jpg'],key:0},

                              {question:"CABRITO",options:['CORTINA.jpg','CABRITO.jpg','CIRCO.jpg','CORUJA.jpg'],key:1},

                              {question:"COUVE-FLOR",options:['CARROSSEL.jpg','CASA.jpg','COUVEFLOR.jpg','CAMALEAO.jpg'],key:2},       
                                              
                              {question:"CACHOEIRA",options:['CESTA.jpg','CENTOPEIA.jpg','COGUMELOS.jpg','CACHOEIRA.jpg'],key:3},

                              {question:"COELHO",options:['COELHO.jpg','CENOURA.jpg','CIRCO.jpg','CALCA.jpg'],key:0},
                           
                              {question:"CALOR",options:['COGUMELOS.jpg','CEREJAS.jpg','CALOR.jpg','CENOURA.jpg'],key:2},                               

                              {question:"CORUJA",options:['CEREJAS.jpg','CORUJA.jpg','CAMALEAO.jpg','CAVALO.jpg'],key:1},                       
                          
                              {question:"CARROSSEL",options:['CEREAL.jpg','CIRCO.jpg','CIGANA.jpg','CARROSSEL.jpg'],key:3},

                              {question:"COLAR",options:['CAVALO.jpg','CATAVENTO.jpg','COLAR.jpg','CAMALEAO.jpg'],key:2},
                           
                              {question:"CAMA",options:['COLAR.jpg','CAMA.jpg','CESTA.jpg','CEBOLA.jpg'],key:1},

                              {question:"COBRA",options:['COBRA.jpg','CASACO.jpg','CEGONHA.jpg','CARROSSEL.jpg'],key:0}, 

                              {question:"CAMALEÃO",options:['CENTOPEIA.jpg','COGUMELOS.jpg','CORTINA.jpg','CAMALEAO.jpg'],key:3},

                              {question:"CESTA",options:['CESTA.jpg','CAMISETA.jpg','CORDEIRO.jpg','CADEIRA.jpg'],key:0},

                              {question:"CIRCO",options:['CENTOPEIA.jpg','CATAVENTO.jpg','CIRCO.jpg','COCO.jpg'],key:2},

                              {question:"CASA",options:['CESTA.jpg','CASA.jpg','CENTOPEIA.jpg','CORUJA.jpg'],key:1},

                              {question:"COGUMELOS",options:['CATAVENTO.jpg','CARROSSEL.jpg','CASTELO.jpg','COGUMELOS.jpg'],key:3},
 
                              {question:"CATAVENTO",options:['CUPIDO.jpg','CORUJA.jpg','CATAVENTO.jpg','CEREJAS.jpg'],key:2},

                              {question:"CIGANA",options:['CIGANA.jpg','CASACO.jpg','CASTELO.jpg','CAMA.jpg'],key:0},

                              {question:"CASACO",options:['CEREJAS.jpg','CASACO.jpg','CENTOPEIA.jpg','CORDEIRO.jpg'],key:1},

                              {question:"CERCA",options:['CORUJA.jpg','CACHORRO.jpg','CERCA.jpg','CAMISETA.jpg'],key:2},
                              
                              {question:"CASTELO",options:['CONFEITEIRO.jpg','COLMEIA.jpg','CENTOPEIA.jpg','CASTELO.jpg'],key:3},

                              {question:"CENTOPÉIA",options:['CENTOPEIA.jpg','CANGURU.jpg','CAVALO.jpg','CASA.jpg'],key:0},
                              
                              {question:"CACHORRO",options:['CEBOLA.jpg','CACHORRO.jpg','CERCA.jpg','CORDEIRO.jpg'],key:1},

                              {question:"CEREAL",options:['CALCA.jpg','CABANA.jpg','CORUJA.jpg','CEREAL.jpg'],key:3},

                              {question:"COZINHA",options:['CENOURA.jpg','COZINHA.jpg','CERCA.jpg','CASA.jpg'],key:1},

                              {question:"CEREJAS",options:['CAMISETA.jpg','CASTELO.jpg','CEREJAS.jpg','CAVALO.jpg'],key:2},

                              {question:"CORDEIRO",options:['CASTELO.jpg','CARANGUEJO.jpg','CARROSSEL.jpg','CORDEIRO.jpg'],key:3},

                              {question:"CENOURA",options: ['CARROSSEL.jpg','CENOURA.jpg','CADEIRA.jpg','CAMISETA.jpg'],key:1},

                              {question:"CALÇA",options:['CALCA.jpg','CEGONHA.jpg','COLAR.jpg','CORACAO.jpg'],key:0},

                              {question:"CEGONHA",options:['CORACAO.jpg','CAVALO.jpg','CARANGUEJO.jpg','CEGONHA.jpg'],key:3},
      
                              {question:"CAVALO",options:['CENTOPEIA.jpg','CEGONHA.jpg','CAVALO.jpg','COZINHA.jpg'],key:2},

                              {question:"CEBOLA",options:['CAMISETA.jpg','CEBOLA.jpg','CAMA.jpg','CASA.jpg'],key:1},

                              {question:"CARANGUEJO",options:['CIRCO.jpg','CONFEITEIRO.jpg','COCO.jpg','CARANGUEJO.jpg'],key:3},

                              {question:"CONFEITEIRO",options:['CAMISETA.jpg','CUPIDO.jpg','CONFEITEIRO.jpg','CERCA.jpg'],key:2},
 
                              {question:"CADEIRA",options:['CADEIRA.jpg','CERCA.jpg','CENTOPEIA.jpg','CEBOLA.jpg'],key:0}

                          ]
                },
              { 
               type:":: D :: INICIAIS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                              {question:"DA",options:['DADOS.jpg','DIAMANTES.jpg','DUVIDAS.jpg','DENTADURA.jpg'],key:0},

                              {question:"DE",options:['DARDO.jpg','DENTADURA.jpg','DIA.jpg','DALMATA.jpg'],key:1},
                              
                              {question:"DÁ",options:['DOIS.jpg','DESCANSO.jpg','DALMATA.jpg','DOENTE.jpg'],key:2},

                              {question:"DE",options:['DOCES.jpg','DOMINO.jpg','DAMA.jpg','DEZEMBRO.jpg'],key:3},

                              {question:"DA",options:['DEDOS.jpg','DAMA.jpg','DIGITAL.jpg','DIGITAR.jpg'],key:1},                                                                           
                              
                              {question:"DÚ",options:['DUVIDAS.jpg','DOBRADURA.jpg','DEGRAUS.jpg','DESERTO.jpg'],key:0},
                              
                              {question:"DO",options:['DUENDE.jpg','DANCA.jpg','DOIS.jpg','DESTRUIDA.jpg'],key:2},
                              
                              {question:"DA",options:['DEZ.jpg','DESERTO.jpg','DESENHO.jpg','DANCA.jpg'],key:3},
                              
                              {question:"DE",options:['DESCANSO.jpg','DARDO.jpg','DIA.jpg','DANONE.jpg'],key:0},
                              
                              {question:"DA",options:['DOMADOR.jpg','DANONE.jpg','DOZE.jpg','DIRIGIR.jpg'],key:1},
                              
                              {question:"DO ",options:['DIRIGIR.jpg','DARDO.jpg','DOMINO.jpg','DENTISTA.jpg'],key:2},
                              
                              {question:"DA",options:['DOUTORA.jpg','DENTADURA.jpg','DEPRESSA.jpg','DARDO.jpg'],key:3},
                              
                              {question:"DO",options:['DENTE.jpg','DIPLOMA.jpg','DOCES.jpg','DINHEIRO.jpg'],key:2},
                              
                              {question:"DE",options:['DEDOS.jpg','DINHEIRO.jpg','DOBRADURA.jpg','DOBERMAN.jpg'],key:0},
                              
                              {question:"DO",options:['DESINFETANTE.jpg','DESINTUPIDOR.jpg','DUENDE.jpg','DOBERMAN.jpg'],key:3},
                              
                              {question:"DE",options:['DALMATA.jpg','DESERTO.jpg','DOBERMAN.jpg','DIGITAR.jpg'],key:1},
                              
                              {question:"DO",options:['DURA.jpg','DEZ.jpg','DOENTE.jpg','DEPRESSA.jpg'],key:2},       
                              
                              {question:"DE",options:['DUELO.jpg','DOCES.jpg','DOUTORA.jpg','DESINFETANTE.jpg'],key:3},
                              
                              {question:"DO",options:['DOBRADURA.jpg','DESANIMADA.jpg','DIRIGIR.jpg','DESCER.jpg'],key:0},
                              
                              {question:"DE",options:['DIA.jpg','DIAMANTES.jpg','DESINTUPIDOR.jpg','DOMINO.jpg'],key:2},                               

                              {question:"DO",options:['DESPERDICAR.jpg','DOMADOR.jpg','DUENDE.jpg','DADOS.jpg'],key:1},                       
                              
                              {question:"DE",options:['DALMATA.jpg','DUELO.jpg','DIA.jpg','DESENHO.jpg'],key:3},

                              {question:"DO",options:['DINOSSAURO.jpg','DENTE.jpg','DOUTORA.jpg','DANONE.jpg'],key:2},
                              
                              {question:"DE",options:['DOCES.jpg','DEPRESSA.jpg','DOMINGO.jpg','DIPLOMA.jpg'],key:1},

                              {question:"DI",options:['DIPLOMA.jpg','DEGRAUS.jpg','DENTE.jpg','DETERGENTE.jpg'],key:0}, 
                              
                              {question:"DU",options:['DENTISTA.jpg','DENTE.jpg','DIAMANTES.jpg','DUENDE.jpg'],key:3},
                              
                              {question:"DE",options:['DIAMANTES.jpg','DEGRAUS.jpg','DIRIGIR.jpg','DIGITAL.jpg'],key:1},
                              
                              {question:"DI",options:['DIA.jpg','DENTE.jpg','DOCES.jpg','DESTRUIDA.jpg'],key:0},
                              
                              {question:"DE",options:['DINOSSAURO.jpg','DIGITAR.jpg','DENTISTA.jpg','DINHEIRO.jpg'],key:2},
                              
                              {question:"DI",options:['DOCES.jpg','DIGITAL.jpg','DESANIMADA.jpg','DESERTO.jpg'],key:1},
                              
                              {question:"DO",options:['DETETIVE.jpg','DADOS.jpg','DAMA.jpg','DOMINGO.jpg'],key:3},
                              
                              {question:"DE",options:['DURA.jpg','DINHEIRO.jpg','DESANIMADA.jpg','DIAMANTES.jpg'],key:2},
                              
                              {question:"DI",options:['DIRIGIR.jpg','DALMATA.jpg','DANONE.jpg','DOBRADURA.jpg'],key:0},
                              
                              {question:"DE",options:['DUELO.jpg','DINOSSAURO.jpg','DETERGENTE.jpg','DOCES.jpg'],key:2},
                              
                              {question:"DU",options:['DINHEIRO.jpg','DURA.jpg','DESPERDICAR.jpg','DEPRESSA.jpg'],key:1},
                              
                              {question:"DE",options:['DOUTORA.jpg','DOMADOR.jpg','DETETIVE.jpg','DOENTE.jpg'],key:2},
                              
                              {question:"DI",options:['DANCA.jpg','DADOS.jpg','DESCANSO.jpg','DINHEIRO.jpg'],key:3},
                              
                              {question:"DE",options:['DESPERDICAR.jpg','DOZE.jpg','DOMADOR.jpg','DIGITAL.jpg'],key:0},
                              
                              {question:"DI",options:['DOZE.jpg','DINOSSAURO.jpg','DEZ.jpg','DURA.jpg'],key:1},
                              
                              {question:"DE",options:['DOIS.jpg','DUELO.jpg','DIVERTIDA.jpg','DESTRUIDA.jpg'],key:3},
                              
                              {question:"DI",options:['DIAMANTES.jpg','DESCANSO.jpg','DENTE.jpg','DAMA.jpg'],key:0},
                              
                              {question:"DE",options:['DUVIDAS.jpg','DENTE.jpg','DALMATA.jpg','DUELO.jpg'],key:1},
                              
                              {question:"DI",options:['DESPENSA.jpg','DEGRAUS.jpg','DESTRUIDA.jpg','DIGITAR.jpg'],key:3},
                              
                              {question:"DE",options:['DOCES.jpg','DESPERTADOR.jpg','DIVERTIDA.jpg','DINOSSAURO.jpg'],key:1},
                              
                              {question:"DE",options:['DOUTORA.jpg','DOMINO.jpg','DUVIDAS.jpg','DEZ.jpg'],key:3},
                              
                              {question:"DU",options:['DUELO.jpg','DEVAGAR.jpg','DEPRESSA.jpg','DESINTUPIDOR.jpg'],key:0},
                              
                              {question:"DO",options:['DEZ.jpg','DEDOS.jpg','DOZE.jpg','DADOS.jpg'],key:2},
                              
                              {question:"DE",options:['DADOS.jpg','DEVAGAR.jpg','DINOSSAURO.jpg','DIA.jpg'],key:1},
                              
                              {question:"DI",options:['DIVERTIDA.jpg','DOBERMAN.jpg','DESCANSO.jpg','DESENHO.jpg'],key:0},

                              {question:"DE",options:['DIPLOMA.jpg','DANONE.jpg','DESPENSA.jpg','DOBRADURA.jpg'],key:2}
                   ]
              },
               {

               type:":: D :: PALAVRAS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                              {question:"DIPLOMA",options:['DIPLOMA.jpg','DEGRAUS.jpg','DESPERDICAR.jpg','DETERGENTE.jpg'],key:0}, 
                              
                              {question:"DUENDE",options:['DENTISTA.jpg','DENTE.jpg','DIAMANTES.jpg','DUENDE.jpg'],key:3},
                              
                              {question:"DEGRAUS",options:['DIAMANTES.jpg','DEGRAUS.jpg','DIRIGIR.jpg','DIGITAL.jpg'],key:1},
                              
                              {question:"DIA",options:['DIA.jpg','DENTE.jpg','DOCES.jpg','DESTRUIDA.jpg'],key:0},
                              
                              {question:"DÁLMATA",options:['DOIS.jpg','DESCANSO.jpg','DALMATA.jpg','DOENTE.jpg'],key:2},
                              
                              {question:"DESCANSO",options:['DESCANSO.jpg','DARDO.jpg','DIA.jpg','DANONE.jpg'],key:0},
                              
                              {question:"DEZEMBRO",options:['DOCES.jpg','DOMINO.jpg','DAMA.jpg','DEZEMBRO.jpg'],key:3},
                              
                              {question:"DAMA",options:['DEDOS.jpg','DAMA.jpg','DIGITAL.jpg','DIGITAR.jpg'],key:1},
                              
                              {question:"DADOS",options:['DADOS.jpg','DIAMANTES.jpg','DUVIDAS.jpg','DENTADURA.jpg'],key:0},
                              
                              {question:"DENTADURA",options:['DARDO.jpg','DENTADURA.jpg','DIA.jpg','DALMATA.jpg'],key:1},
                              
                              {question:"DOMINÓ ",options:['DIRIGIR.jpg','DARDO.jpg','DOMINO.jpg','DENTISTA.jpg'],key:2},
                              
                              {question:"DANÇA",options:['DEZ.jpg','DESERTO.jpg','DESENHO.jpg','DANCA.jpg'],key:3},
                              
                              {question:"DOMADOR",options:['DESPERDICAR.jpg','DOMADOR.jpg','DUENDE.jpg','DADOS.jpg'],key:1},                       
                              
                              {question:"DESENHO",options:['DALMATA.jpg','DUELO.jpg','DIA.jpg','DESENHO.jpg'],key:3},
                              
                              {question:"DOUTORA",options:['DENTE.jpg','DESPERDICAR.jpg','DOUTORA.jpg','DANONE.jpg'],key:2},
                              
                              {question:"DEPRESSA",options:['DOCES.jpg','DEPRESSA.jpg','DOMINGO.jpg','DIPLOMA.jpg'],key:1},
                              
                              {question:"DÚVIDAS",options:['DUVIDAS.jpg','DOBRADURA.jpg','DEGRAUS.jpg','DESERTO.jpg'],key:0},
                              
                              {question:"DOIS",options:['DENTE.jpg','DANCA.jpg','DOIS.jpg','DESTRUIDA.jpg'],key:2},
                              
                              {question:"DANONE",options:['DOMADOR.jpg','DANONE.jpg','DOZE.jpg','DIRIGIR.jpg'],key:1},
                              
                              {question:"DARDO",options:['DOUTORA.jpg','DENTADURA.jpg','DEPRESSA.jpg','DARDO.jpg'],key:3},
                              
                              {question:"DOENTE",options:['DURA.jpg','DEZ.jpg','DOENTE.jpg','DEPRESSA.jpg'],key:2},       
                              
                              {question:"DESINFETANTE",options:['DOBRADURA.jpg','DOCES.jpg','DOUTORA.jpg','DESINFETANTE.jpg'],key:3},
                              
                              {question:"DOCES",options:['DENTE.jpg','DIPLOMA.jpg','DOCES.jpg','DINHEIRO.jpg'],key:2},
                              
                              {question:"DEDOS",options:['DEDOS.jpg','DINHEIRO.jpg','DOBRADURA.jpg','DOBERMAN.jpg'],key:0},
                              
                              {question:"DOBERMAN",options:['DESINFETANTE.jpg','DESINTUPIDOR.jpg','DUENDE.jpg','DOBERMAN.jpg'],key:3},
                              
                              {question:"DESERTO",options:['DALMATA.jpg','DESERTO.jpg','DOBERMAN.jpg','DIGITAR.jpg'],key:1},
                              
                              {question:"DOBRADURA",options:['DOBRADURA.jpg','DESANIMADA.jpg','DIRIGIR.jpg','DESCER.jpg'],key:0},
                              
                              {question:"DESINTUPIDOR",options:['DIA.jpg','DIAMANTES.jpg','DESINTUPIDOR.jpg','DOMINO.jpg'],key:2},
                              
                              {question:"DEZ",options:['DETERGENTE.jpg','DOUTORA.jpg','DUVIDAS.jpg','DEZ.jpg'],key:3},
                              
                              {question:"DUELO",options:['DUELO.jpg','DEVAGAR.jpg','DEPRESSA.jpg','DESINTUPIDOR.jpg'],key:0},
                              
                              {question:"DOZE",options:['DEZ.jpg','DEDOS.jpg','DOZE.jpg','DADOS.jpg'],key:2},
                              
                              {question:"DEVAGAR",options:['DESPERTADOR.jpg','DEVAGAR.jpg','DINOSSAURO.jpg','DIA.jpg'],key:1},
                              
                              {question:"DIVERTIDA",options:['DIVERTIDA.jpg','DESPENSA.jpg','DESCANSO.jpg','DESENHO.jpg'],key:0},
                              
                              {question:"DENTISTA",options:['DINOSSAURO.jpg','DIGITAR.jpg','DENTISTA.jpg','DESCER.jpg'],key:2},
                              
                              {question:"DIGITAL",options:['DOCES.jpg','DIGITAL.jpg','DESANIMADA.jpg','DESERTO.jpg'],key:1},
                              
                              {question:"DOMINGO",options:['DETETIVE.jpg','DADOS.jpg','DAMA.jpg','DOMINGO.jpg'],key:3},
                              
                              {question:"DESANIMADA",options:['DURA.jpg','DINHEIRO.jpg','DESANIMADA.jpg','DIAMANTES.jpg'],key:2},
                              
                              {question:"DIRIGIR",options:['DIRIGIR.jpg','DALMATA.jpg','DANONE.jpg','DOBRADURA.jpg'],key:0},
                              
                              {question:"DETERGENTE",options:['DETETIVE.jpg','DEGRAUS.jpg','DETERGENTE.jpg','DOCES.jpg'],key:2},
                              
                              {question:"DURA",options:['DINHEIRO.jpg','DURA.jpg','DESPERDICAR.jpg','DEPRESSA.jpg'],key:1},
                              
                              {question:"DETETIVE",options:['DOUTORA.jpg','DOMADOR.jpg','DETETIVE.jpg','DOENTE.jpg'],key:2},
                              
                              {question:"DINHEIRO",options:['DANCA.jpg','DADOS.jpg','DESCANSO.jpg','DINHEIRO.jpg'],key:3},
                              
                              {question:"DESPERDÍÇAR",options:['DESPERDICAR.jpg','DESENHO.jpg','DOMADOR.jpg','DIGITAL.jpg'],key:0},
                              
                              {question:"DINOSSAURO",options:['DOZE.jpg','DINOSSAURO.jpg','DEZ.jpg','DURA.jpg'],key:1},
                              
                              {question:"DESPENSA",options:['DIPLOMA.jpg','DANONE.jpg','DESPENSA.jpg','DOBRADURA.jpg'],key:2},
                              
                              {question:"DESTRUÍDA",options:['DOIS.jpg','DUELO.jpg','DIVERTIDA.jpg','DESTRUIDA.jpg'],key:3},
                              
                              {question:"DIAMANTES",options:['DIAMANTES.jpg','DESCANSO.jpg','DENTE.jpg','DESINFETANTE.jpg'],key:0},
                              
                              {question:"DENTE",options:['DUVIDAS.jpg','DENTE.jpg','DEZEMBRO.jpg','DESANIMADA.jpg'],key:1},
                              
                              {question:"DIGITAR",options:['DESPENSA.jpg','DEGRAUS.jpg','DIGITAL.jpg','DIGITAR.jpg'],key:3},
                              
                              {question:"DESPERTADOR",options: ['DESANIMADA.jpg','DESPERTADOR.jpg','DIVERTIDA.jpg','DINOSSAURO.jpg'],key:1}                        

                        ]
              },
              { 
               type:":: F :: INICIAIS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                              {question:"FU",options:['FADA.jpg','FENO.jpg','FELINOS.jpg','FUTEBOL.jpg'],key:3},

                              {question:"FA",options:['FOTO.jpg','FUMACA.jpg','FABRICA.jpg','FILA.jpg'],key:2},

                              {question:"FO",options:['FACA.jpg','FORMIGA.jpg','FIVELA.jpg','FUSCA.jpg'],key:1},
  
                              {question:"FI",options:['FILE.jpg','FAMILIA.jpg','FORNO.jpg','FEIJAO.jpg'],key:0},

                              {question:"FA",options:['FILHOTE.jpg','FIGO.jpg','FOSFOROS.jpg','FABULAS.jpg'],key:3},                                                                           

                              {question:"FU",options:['FORTUNA.jpg','FORMATURA.jpg','FUSCA.jpg','FOGUETE.jpg'],key:2},

                              {question:"FA",options:['FANTASMA.jpg','FOLHA.jpg','FOFOCA.jpg','FOCA.jpg'],key:0},

                              {question:"FE",options:['FIGO.jpg','FAZENDA.jpg','FAXINA.jpg','FERRARI.jpg'],key:3},

                              {question:"FO",options:['FEBRE.jpg','FAROL.jpg','FOCA.jpg','FELICIDADE.jpg'],key:2},
  
                              {question:"FI",options:['FESTA.jpg','FIVELA.jpg','FAROFA.jpg','FABRICA.jpg'],key:1},
                        
                              {question:"FE ",options:['FIVELA.jpg','FANTASIA.jpg','FAZENDEIRO.jpg','FERRADURA.jpg'],key:3},
                                                                                
                              {question:"FA",options:['FAROL.jpg','FILHOTE.jpg','FOFOCA.jpg','FESTA.jpg'],key:0},

                              {question:"FO",options:['FUMACA.jpg','FUNIL.jpg','FORMATURA.jpg','FUTEBOL.jpg'],key:2},

                              {question:"FA",options:['FACA.jpg','FERRARI.jpg','FORNO.jpg','FOGUEIRA.jpg'],key:0},

                              {question:"FO",options:['FAMILIA.jpg','FACA.jpg','FORTUNA.jpg','FUMACA.jpg'],key:2},

                              {question:"FU",options:['FANTOCHES.jpg','FUMACA.jpg','FESTA.jpg','FERIMENTO.jpg'],key:1},

                              {question:"FI",options:['FEIJAO.jpg','FEBRE.jpg','FILA.jpg','FOCA.jpg'],key:2},       
                                              
                              {question:"FE",options:['FOFOCA.jpg','FOGAO.jpg','FOLHA.jpg','FELICIDADE.jpg'],key:3},

                              {question:"FO",options:['FOSFOROS.jpg','FAROL.jpg','FELICIDADE.jpg','FUNIL.jpg'],key:0},
                           
                              {question:"FA",options:['FUSCA.jpg','FOSFOROS.jpg','FAMILIA.jpg','FELINOS.jpg'],key:2},                               

                              {question:"FI",options:['FOGUEIRA.jpg','FILHOTE.jpg','FOCA.jpg','FOLHA.jpg'],key:1},                       
                          
                              {question:"FA",options:['FERRARI.jpg','FERIMENTO.jpg','FILE.jpg','FANTOCHES.jpg'],key:3},

                              {question:"FO",options:['FAROFA.jpg','FELICIDADE.jpg','FOTO.jpg','FAMILIA.jpg'],key:2},
                           
                              {question:"FA",options:['FERIAS.jpg','FADA.jpg','FORTUNA.jpg','FUMACA.jpg'],key:1},

                              {question:"FE",options:['FESTA.jpg','FILHOTE.jpg','FOFOCA.jpg','FOGAO.jpg'],key:0}, 

                              {question:"FA",options:['FUNIL.jpg','FERIAS.jpg','FOGAO.jpg','FAZENDA.jpg'],key:3},

                              {question:"FU",options:['FELICIDADE.jpg','FUNIL.jpg','FERIAS.jpg','FILHOTE.jpg'],key:1},

                              {question:"FO",options:['FOGUEIRA.jpg','FANTASIA.jpg','FANTASMA.jpg','FILE.jpg'],key:0},

                              {question:"FI",options:['FANTOCHES.jpg','FOTO.jpg','FIGO.jpg','FACA.jpg'],key:2},

                              {question:"FE",options:['FARINHA.jpg','FERIMENTO.jpg','FADA.jpg','FIVELA.jpg'],key:1},

                              {question:"FÁ",options:['FEIJAO.jpg','FOSFOROS.jpg','FUTEBOL.jpg','FABULAS.jpg'],key:3},
 
                              {question:"FO",options:['FILHOTE.jpg','FAZENDEIRO.jpg','FOGUETE.jpg','FANTASIA.jpg'],key:2},

                              {question:"FE",options:['FEBRE.jpg','FORNO.jpg','FIVELA.jpg','FABULAS.jpg'],key:0},

                              {question:"FO",options:['FAROL.jpg','FILA.jpg','FOGAO.jpg','FERRADURA.jpg'],key:2},

                              {question:"FE",options:['FAXINA.jpg','FEIJAO.jpg','FAMILIA.jpg','FABRICA.jpg'],key:1},

                              {question:"FA",options:['FANTASIA.jpg','FUTEBOL.jpg','FEIRANTE.jpg','FORMIGA.jpg'],key:0},

                              {question:"FO",options:['FUMACA.jpg','FESTA.jpg','FONE.jpg','FILE.jpg'],key:2},
                              
                              {question:"FA",options:['FAROFA.jpg','FEBRE.jpg','FUNIL.jpg','FORTUNA.jpg'],key:0},

                              {question:"FE",options:['FAXINA.jpg','FELINOS.jpg','FAROESTE.jpg','FIGO.jpg'],key:1},

                              {question:"FA",options:['FOSFOROS.jpg','FORTE.jpg','FORMIGA.jpg','FARAO.jpg'],key:3},

                              {question:"FO",options:['FAMILIA.jpg','FACA.jpg','FARINHA.jpg','FORNO.jpg'],key:3},

                              {question:"FA",options:['FENO.jpg','FARINHA.jpg','FORMATURA.jpg','FOGUETE.jpg'],key:1},

                              {question:"FO",options:['FORTE.jpg','FELINOS.jpg','FERIMENTO.jpg','FENO.jpg'],key:0},

                              {question:"FÉ",options:['FOGAO.jpg','FERIAS.jpg','FOSFOROS.jpg','FADA.jpg'],key:1},

                              {question:"FO",options:['FUMACA.jpg','FESTA.jpg','FOCA.jpg','FILE.jpg'],key:2},

                              {question:"FE",options:['FANTASMA.jpg','FARAO.jpg','FILHOTE.jpg','FEIRANTE.jpg'],key:3},

                              {question:"FO",options:['FABULAS.jpg','FAROESTE.jpg','FANTOCHES.jpg','FOLHA.jpg'],key:3},

                              {question:"FA",options:['FAROESTE.jpg','FORMIGA.jpg','FUSCA.jpg','FERRADURA.jpg'],key:0},

                              {question:"FO",options:['FIVELA.jpg','FOFOCA.jpg','FAXINA.jpg','FANTASIA.jpg'],key:1},

                              {question:"FA",options:['FERRARI.jpg','FORTUNA.jpg','FAXINA.jpg','FUMACA.jpg'],key:2}
 
                   ]
               },
               {

               type:":: F :: PALAVRAS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                              {question:"FUTEBOL",options:['FADA.jpg','FENO.jpg','FELINOS.jpg','FUTEBOL.jpg'],key:3},

                              {question:"FÁBRICA",options:['FOTO.jpg','FUMACA.jpg','FABRICA.jpg','FILA.jpg'],key:2},

                              {question:"FORMIGA",options:['FACA.jpg','FORMIGA.jpg','FIVELA.jpg','FUSCA.jpg'],key:1},
  
                              {question:"FILÉ",options:['FILE.jpg','FAMILIA.jpg','FORNO.jpg','FEIJAO.jpg'],key:0},

                              {question:"FÁBULAS",options:['FILHOTE.jpg','FIGO.jpg','FOSFOROS.jpg','FABULAS.jpg'],key:3},                                                                           

                              {question:"FUSCA",options:['FORTUNA.jpg','FORMATURA.jpg','FUSCA.jpg','FOGUETE.jpg'],key:2},

                              {question:"FANTASMA",options:['FANTASMA.jpg','FOLHA.jpg','FOFOCA.jpg','FOCA.jpg'],key:0},

                              {question:"FERRARI",options:['FIGO.jpg','FAZENDA.jpg','FAXINA.jpg','FERRARI.jpg'],key:3},

                              {question:"FUMAÇA",options:['FEBRE.jpg','FOTO.jpg','FUMACA.jpg','FELICIDADE.jpg'],key:2},
  
                              {question:"FIVELA",options:['FESTA.jpg','FIVELA.jpg','FAROFA.jpg','FABRICA.jpg'],key:1},
                        
                              {question:"FERRADURA",options:['FIVELA.jpg','FANTASIA.jpg','FAZENDEIRO.jpg','FERRADURA.jpg'],key:3},
                                                                                
                              {question:"FAROL",options:['FAROL.jpg','FILHOTE.jpg','FELINOS.jpg','FESTA.jpg'],key:0},

                              {question:"FORMATURA",options:['FUMACA.jpg','FUNIL.jpg','FORMATURA.jpg','FUTEBOL.jpg'],key:2},

                              {question:"FACA",options:['FACA.jpg','FERRARI.jpg','FORNO.jpg','FOGUEIRA.jpg'],key:0},

                              {question:"FORTUNA",options:['FAMILIA.jpg','FACA.jpg','FORTUNA.jpg','FUMACA.jpg'],key:2},

                              {question:"FUMAÇA",options:['FANTOCHES.jpg','FUMACA.jpg','FESTA.jpg','FERIMENTO.jpg'],key:1},

                              {question:"FILA",options:['FEIJAO.jpg','FEBRE.jpg','FILA.jpg','FOCA.jpg'],key:2},       
                                              
                              {question:"FELICIDADE",options:['FOFOCA.jpg','FOGAO.jpg','FOLHA.jpg','FELICIDADE.jpg'],key:3},

                              {question:"FÓSFOROS",options:['FOSFOROS.jpg','FAROL.jpg','FELICIDADE.jpg','FUNIL.jpg'],key:0},
                           
                              {question:"FAMÍLIA",options:['FUSCA.jpg','FOSFOROS.jpg','FAMILIA.jpg','FELINOS.jpg'],key:2},                               

                              {question:"FELINOS",options:['FOGUEIRA.jpg','FELINOS.jpg','FOCA.jpg','FOLHA.jpg'],key:1},                       
                          
                              {question:"FANTOCHES",options:['FERRARI.jpg','FERIMENTO.jpg','FILE.jpg','FANTOCHES.jpg'],key:3},

                              {question:"FOTO",options:['FAROFA.jpg','FELICIDADE.jpg','FOTO.jpg','FAMILIA.jpg'],key:2},
                           
                              {question:"FADA",options:['FERIAS.jpg','FADA.jpg','FORTUNA.jpg','FUMACA.jpg'],key:1},

                              {question:"FESTA",options:['FESTA.jpg','FILHOTE.jpg','FOFOCA.jpg','FOGAO.jpg'],key:0}, 

                              {question:"FAZENDA",options:['FUNIL.jpg','FERIAS.jpg','FOGAO.jpg','FAZENDA.jpg'],key:3},

                              {question:"FUNIL",options:['FELICIDADE.jpg','FUNIL.jpg','FERIAS.jpg','FILHOTE.jpg'],key:1},

                              {question:"FOGUEIRA",options:['FOGUEIRA.jpg','FANTASIA.jpg','FANTASMA.jpg','FILE.jpg'],key:0},

                              {question:"FIGO",options:['FANTOCHES.jpg','FOTO.jpg','FIGO.jpg','FACA.jpg'],key:2},

                              {question:"FERIMENTO",options:['FARINHA.jpg','FERIMENTO.jpg','FADA.jpg','FIVELA.jpg'],key:1},

                              {question:"FOCA",options:['FUMACA.jpg','FESTA.jpg','FOCA.jpg','FILE.jpg'],key:2},

                              {question:"FÁBULAS",options:['FEIJAO.jpg','FOSFOROS.jpg','FUTEBOL.jpg','FABULAS.jpg'],key:3},
 
                              {question:"FOGUETE",options:['FELINOS.jpg','FAZENDEIRO.jpg','FOGUETE.jpg','FANTASIA.jpg'],key:2},

                              {question:"FEBRE",options:['FEBRE.jpg','FORNO.jpg','FIVELA.jpg','FABULAS.jpg'],key:0},

                              {question:"FOGÃO",options:['FAROL.jpg','FILA.jpg','FOGAO.jpg','FERRADURA.jpg'],key:2},

                              {question:"FEIJÃO",options:['FAXINA.jpg','FEIJAO.jpg','FAMILIA.jpg','FABRICA.jpg'],key:1},

                              {question:"FANTASIA",options:['FANTASIA.jpg','FUTEBOL.jpg','FEIRANTE.jpg','FORMIGA.jpg'],key:0},

                              {question:"FONE",options:['FUMACA.jpg','FESTA.jpg','FONE.jpg','FILE.jpg'],key:2},
                              
                              {question:"FEIRANTE",options:['FANTASMA.jpg','FARAO.jpg','FILHOTE.jpg','FEIRANTE.jpg'],key:3},

                              {question:"FAROFA",options:['FAROFA.jpg','FEBRE.jpg','FUNIL.jpg','FORTUNA.jpg'],key:0},

                              {question:"FILHOTE",options:['FERRARI.jpg','FILHOTE.jpg','FERIAS.jpg','FOLHA.jpg'],key:1},

                              {question:"FARAÓ",options:['FOSFOROS.jpg','FORTE.jpg','FORMIGA.jpg','FARAO.jpg'],key:3},

                              {question:"FORNO",options:['FAMILIA.jpg','FACA.jpg','FARINHA.jpg','FORNO.jpg'],key:3},

                              {question:"FARINHA",options:['FENO.jpg','FARINHA.jpg','FORMATURA.jpg','FOGUETE.jpg'],key:1},

                              {question:"FORTE",options:['FORTE.jpg','FELINOS.jpg','FERIMENTO.jpg','FENO.jpg'],key:0},

                              {question:"FÉRIAS",options:['FOGAO.jpg','FERIAS.jpg','FOSFOROS.jpg','FADA.jpg'],key:1},

                              {question:"FOLHA",options:['FABULAS.jpg','FAROESTE.jpg','FANTOCHES.jpg','FOLHA.jpg'],key:3},

                              {question:"FAROESTE",options:['FAROESTE.jpg','FORMIGA.jpg','FUSCA.jpg','FERRADURA.jpg'],key:0},

                              {question:"FOFOCA",options: ['FIVELA.jpg','FOFOCA.jpg','FAXINA.jpg','FANTASIA.jpg'],key:1},

                              {question:"FAXINA",options:['FERRARI.jpg','FORTUNA.jpg','FAXINA.jpg','FUMACA.jpg'],key:2}
 
                        ]
              },
              { 
               type:":: G :: INICIAIS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"GA",options:['GULOSEIMAS.jpg','GOLFE.jpg','GIGANTE.jpg','GALINHA.jpg'],key:3},

                           {question:"GA",options:['GIRAFA.jpg','GATO.jpg','GELATINA.jpg' ,'GIRASSOL.jpg'],key:1},

                           {question:"GI",options:['GIZ.jpg','GORILA.jpg','GOTA.jpg','GARFO.jpg'],key:0},
 
                           {question:"GA",options:['GELEIA.jpg','GOLFINHOS.jpg','GALO.jpg','GIGANTE.jpg'],key:2},
                     
                           {question:"GÊ",options:['GOIABA.jpg' ,'GULOSEIMAS.jpg','GARRAFA.jpg','GENIO.jpg'],key:3},

                           {question:"GA",options:['GAVETAS.jpg' ,'GINASTICA.jpg','GEMEAS.jpg','GELADEIRA.jpg'],key:0},
                              
                           {question:"GI",options:['GANGORRA.jpg','GOLA.jpg','GILETE.jpg','GELO.jpg'],key:2},
                              
                           {question:"GA",options:['GINCANA.jpg','GAIVOTA.jpg','GELEIA.jpg','GIRASSOL.jpg'],key:1},
                            
                           {question:"GE",options:['GOLFE.jpg','GAVIAO.jpg','GAVETAS.jpg','GELO.jpg'],key:3},

                           {question:"GA",options:['GARCA.jpg','GORILA.jpg','GOLFINHOS.jpg','GEMEAS.jpg'],key:0},   
                              
                           {question:"GU",options:['GOTA.jpg','GOLEIRO.jpg','GULOSEIMAS.jpg','GOLFE.jpg'],key:2},

                           {question:"GE",options:['GIGANTE.jpg','GELATINA.jpg','GIZ.jpg','GIRAFA.jpg'],key:1},

                           {question:"GA",options:['GELEIA.jpg','GINASTICA.jpg','GELADEIRA.jpg','GAIOLA.jpg'],key:3},
                           
                           {question:"GÊ",options:['GEMEAS.jpg','GARAGEM.jpg','GOLFE.jpg', 'GIRASSOL.jpg',],key:0},

                           {question:"GA",options:['GORILA.jpg','GOLFE.jpg','GARRAFA.jpg','GEMA.jpg'],key:2},

                           {question:"GA",options:['GEMA.jpg','GINCANA.jpg','GIZ.jpg','GALHO.jpg'],key:3},

                           {question:"GO",options:['GOLFE.jpg','GULOSEIMAS.jpg','GIRAFA.jpg','GANGORRA.jpg'],key:0},                           

                           {question:"GA",options:['GELO.jpg','GANSO.jpg','GEMA.jpg','GILETE.jpg'],key:1},
                              
                           {question:"GE",options:['GINCANA.jpg','GAVETAS.jpg','GELEIA.jpg' ,'GOMA.jpg'],key:2},
 
                           {question:"GA",options:['GANGORRA.jpg','GOLFE.jpg','GORILA.jpg','GIRASSOL.jpg'],key:0},

                           {question:"GI",options:['GARAGEM.jpg','GELEIA.jpg','GOLFE.jpg', 'GIRAFA.jpg'],key:3},

                           {question:"GA",options:['GORILA.jpg','GAROTO.jpg','GULOSEIMAS.jpg','GINASTICA.jpg'],key:1},

                           {question:"GO",options:['GAIOLA.jpg','GALO.jpg','GOIABA.jpg','GALINHA.jpg'],key:2},
                              
                           {question:"GI",options:['GINASTICA.jpg','GELADEIRA.jpg','GELATINA.jpg','GELEIA.jpg'],key:0},
                              
                           {question:"GO",options: ['GULOSEIMAS.jpg', 'GORILA.jpg','GARFO.jpg','GARRAFA.jpg'],key:1},

                           {question:"GA",options:['GELADEIRA.jpg','GINCANA.jpg','GIRAFA.jpg','GALOCHA.jpg'],key:3},

                           {question:"GO",options:['GANGORRA.jpg','GILETE.jpg','GOLEIRO.jpg','GEMA.jpg'],key:2},
                               
                           {question:"GA",options:['GAVIAO.jpg','GOLFE.jpg','GOTA.jpg','GULOSEIMAS.jpg'],key:0},
                              
                           {question:"GO",options:['GELATINA.jpg','GOLFINHOS.jpg','GULOSEIMAS.jpg' ,'GELADEIRA.jpg'],key:1},

                           {question:"GA",options:['GOMA.jpg','GIRASSOL.jpg','GARAGEM.jpg','GINCANA.jpg'],key:2},

                           {question:"GI",options:['GOTA.jpg','GAVETAS.jpg','GAVIAO.jpg','GIRASSOL.jpg'],key:3},

                           {question:"GÊ",options:['GENIO.jpg','GIRAFA.jpg','GINCANA.jpg','GALHO.jpg'],key:0},
                             
                           {question:"GO",options:['GALINHA.jpg','GOTA.jpg','GULOSEIMAS.jpg','GEMEAS.jpg'],key:1},

                           {question:"GA",options:['GENIO.jpg','GEMA.jpg','GOLFE.jpg','GAMBA.jpg'],key:3},
                              
                           {question:"GE",options:['GIRASSOL.jpg','GOIABA.jpg','GELADEIRA.jpg','GIGANTE.jpg'],key:2},

                           {question:"GA",options:['GAROTA.jpg','GIGANTE.jpg','GIRASSOL.jpg','GELO.jpg'],key:0},
                           
                           {question:"GI",options:['GIGANTE.jpg','GOMA.jpg','GENIO.jpg','GEMA.jpg'],key:0},

                           {question:"GA",options:['GINCANA.jpg','GEMEAS.jpg','GAFANHOTO.jpg','GOMA.jpg'],key:2},
                             
                           {question:"GO",options:['GOMA.jpg','GULOSEIMAS.jpg','GAVETAS.jpg','GAVIAO.jpg'],key:0},
                             
                           {question:"GA",options:['GELO.jpg','GIRAFA.jpg','GORILA.jpg','GARCONETE.jpg'],key:3},

                           {question:"GO",options:['GANGORRA.jpg','GOLA.jpg','GAROTA.jpg','GAROTO.jpg'],key:1},

                           {question:"GE",options:['GILETE.jpg','GARFO.jpg','GEMA.jpg','GARRAFA.jpg'],key:2},
                              
                           {question:"GI",options:['GINCANA.jpg','GORILA.jpg','GOMA.jpg','GOLA.jpg'],key:0},

                           {question:"GA",options:['GOLA.jpg','GENIO.jpg','GULOSEIMAS.jpg','GARFO.jpg'],key:3}
                          ]
                }, 
               { 
                   type:":: G :: PALAVRAS ",
                   msg:" ",
                   path:"images/vogais",
                   structure:[
                              {question:"GALINHA",options:['GAVETAS.jpg','GALINHA.jpg','GALO.jpg','GARRAFA.jpg'],key:1},

                              {question:"GATO",options:['GATO.jpg','GARRAFA.jpg','GAIOLA.jpg' ,'GALHO.jpg'],key:0},

                              {question:"GIZ",options:['GOTA.jpg','GOLEIRO.jpg','GIZ.jpg','GOLA.jpg'],key:2},
 
                              {question:"GALO",options:['GEMA.jpg','GARAGEM.jpg','GAROTA.jpg','GALO.jpg'],key:3},
                     
                              {question:"GÊNIO",options:['GENIO.jpg' ,'GANGORRA.jpg','GARRAFA.jpg','GALHO.jpg'],key:0},

                              {question:"GAVETAS",options:['GAIVOTA.jpg' ,'GANGORRA.jpg','GAVETAS.jpg','GALHO.jpg'],key:2},
                              
                              {question:"GILETE",options:['GAVIAO.jpg','GILETE.jpg','GANGORRA.jpg','GOLFE.jpg'],key:1},
                              
                              {question:"GAIVOTA",options:['GANGORRA.jpg','GAMBA.jpg','GALO.jpg','GAIVOTA.jpg'],key:3},
                            
                              {question:"GELO",options:['GELO.jpg','GELADEIRA.jpg','GIGANTE.jpg','GIRASSOL.jpg'],key:0},

                              {question:"GARÇA",options:['GALHO.jpg','GIRASSOL.jpg','GIRAFA.jpg','GARCA.jpg'],key:3},   
                              
                              {question:"GULOSEIMAS",options:['GOTA.jpg','GULOSEIMAS.jpg','GARRAFA.jpg','GOLEIRO.jpg'],key:1},

                              {question:"GELATINA",options:['GIRASSOL.jpg','GELEIA.jpg','GELATINA.jpg','GIGANTE.jpg'],key:2},

                              {question:"GAIOLA",options:['GAIOLA.jpg','GOIABA.jpg','GOLFINHOS.jpg','GOLEIRO.jpg'],key:0},
                           
                              {question:"GÊMEAS",options:['GORILA.jpg','GOLFINHOS.jpg','GEMEAS.jpg', 'GIRASSOL.jpg',],key:2},

                              {question:"GARRAFA",options:['GIRASSOL.jpg','GARRAFA.jpg','GIRAFA.jpg','GELADEIRA.jpg'],key:1},

                              {question:"GALHO",options:['GALHO.jpg','GIRASSOL.jpg','GIRAFA.jpg','GOLFINHOS.jpg'],key:0},

                              {question:"GOTA",options:['GANGORRA.jpg','GOTA.jpg','GALOCHA.jpg','GAROTA.jpg'],key:1},                           

                              {question:"GANSO",options:['GALHO.jpg','GIRASSOL.jpg','GANSO.jpg','GOLFINHOS.jpg'],key:2},
                              
                              {question:"GELÉIA",options:['GELEIA.jpg','GANSO.jpg','GALO.jpg' ,'GAIVOTA.jpg'],key:0},
 
                              {question:"GANGORRA",options:['GALHO.jpg','GIRASSOL.jpg','GIRAFA.jpg','GANGORRA.jpg'],key:3},

                              {question:"GIRAFA",options:['GIRAFA.jpg','GANGORRA.jpg','GAROTO.jpg', 'GOIABA.jpg'],key:0},

                              {question:"GAROTO",options:['GOLFINHOS.jpg','GOIABA.jpg','GAROTO.jpg','GIRASSOL.jpg'],key:2},

                              {question:"GOIABA",options:['GOIABA.jpg','GIRASSOL.jpg','GELADEIRA.jpg','GAVETAS.jpg'],key:0},
                              
                              {question:"GINÁSTICA",options:['GALHO.jpg','GINASTICA.jpg','GIRAFA.jpg','GOLFINHOS.jpg'],key:1},
                              
                              {question:"GORILA",options: ['GALHO.jpg', 'GALINHA.jpg','GATO.jpg','GORILA.jpg'],key:3},

                              {question:"GALOCHA",options:['GIRASSOL.jpg','GALOCHA.jpg','GIRAFA.jpg','GORILA.jpg'],key:1},

                              {question:"GOLEIRO",options:['GALOCHA.jpg','GALHO.jpg','GAVIAO.jpg','GOLEIRO.jpg'],key:3},
                               
                              {question:"GAVIÃO",options:['GALHO.jpg','GINCANA.jpg','GAVIAO.jpg','GANGORRA.jpg'],key:2},
                              
                              {question:"GOLFINHOS",options:['GOLFINHOS.jpg','GAIVOTA.jpg','GAVETAS.jpg' ,'GARFO.jpg'],key:0},

                              {question:"GARAGEM",options:['GOLA.jpg','GORILA.jpg','GELADEIRA.jpg','GARAGEM.jpg'],key:3},

                              {question:"GIRASSOL",options:['GELO.jpg','GELEIA.jpg','GIRASSOL.jpg','GARCONETE.jpg'],key:2},

                              {question:"GÊNIO",options:['GAMBA.jpg','GENIO.jpg','GATO.jpg','GAVIAO.jpg'],key:1},
                             
                              {question:"GOLFE",options:['GOLFINHOS.jpg','GOLEIRO.jpg','GOLFE.jpg','GEMA.jpg'],key:2},

                              {question:"GAMBÁ",options:['GELADEIRA.jpg','GAMBA.jpg','GENIO.jpg','GEMEAS.jpg'],key:1},
                              
                              {question:"GELADEIRA",options:['GELADEIRA.jpg','GIRASSOL.jpg','GINCANA.jpg','GULOSEIMAS.jpg'],key:0},

                              {question:"GAROTA",options:['GEMEAS.jpg','GIGANTE.jpg','GOLFINHOS.jpg','GAROTA.jpg'],key:3},
                           
                              {question:"GIGANTE",options:['GANGORRA.jpg','GOTA.jpg','GIGANTE.jpg','GAROTA.jpg'],key:2},

                              {question:"GAFANHOTO",options:['GELADEIRA.jpg','GAFANHOTO.jpg','GELO.jpg','GEMEAS.jpg'],key:1},
                             
                              {question:"GOMA",options:['GULOSEIMAS.jpg','GOLEIRO.jpg','GOTA.jpg','GOMA.jpg'],key:3},
                             
                              {question:"GARÇONETE",options:['GARCONETE.jpg','GIRASSOL.jpg','GEMEAS.jpg','GULOSEIMAS.jpg'],key:0},

                              {question:"GOLA",options:['GARAGEM.jpg','GENIO.jpg','GOLA.jpg','GELEIA.jpg'],key:2},

                              {question:"GEMA",options:['GOLFINHOS.jpg','GOLEIRO.jpg','GOTA.jpg','GEMA.jpg'],key:3},
                              
                              {question:"GINCANA",options:['GIZ.jpg','GINCANA.jpg','GORILA.jpg','GALOCHA.jpg'],key:1},

                              {question:"GARFO",options:['GARFO.jpg','GATO.jpg','GALOCHA.jpg','GAFANHOTO.jpg'],key:0}

               ]

             },   
            { 
               type:":: H :: INICIAIS",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"HI",options:['HOSPITAL.jpg','HARPA.jpg','HAMBURGUE.jpg','HIDRO.jpg'],key:3},

                           {question:"HA",options:['HIDRANTE.jpg','HINO.jpg','HARPA.jpg','HIPOPOTAMO.jpg'],key:2},

                           {question:"HE",options:['HELICOPTERO.jpg','HIDRANTE.jpg','HOTEL.jpg','HARPA.jpg'],key:0},
 
                           {question:"HO",options:['HIGIENE.jpg','HELICOPTERO.jpg','HOSPITAL.jpg','HULK.jpg'],key:2},
                     
                           {question:"HI",options:['HIDRANTE.jpg','HUMANO.jpg','HARPA.jpg','HULK.jpg'],key:0},

                           {question:"HE",options:['HIPOPOTAMO.jpg','HIGIENE.jpg','HARPA.jpg','HEROI.jpg'],key:3},
                              
                           {question:"HI",options:['HOTEL.jpg','HORTA.jpg','HIPOPOTAMO.jpg','HARRY.jpg'],key:2},
                              
                           {question:"HO",options:['HELLO-KITTY.jpg','HEROI.jpg','HULK.jpg','HORARIO.jpg'],key:3},
                            
                           {question:"HO",options:['HAMBURGUE.jpg','HORTA.jpg','HABILIDADE.jpg','HUMANO.jpg'],key:1},

                           {question:"HA",options:['HARRY.jpg','HOMEM-ARANHA.jpg','HORTELA.jpg','HELLO-KITTY.jpg'],key:0},   
                              
                           {question:"HI",options:['HOTEL.jpg','HORTA.jpg','HIGIENE.jpg','HAMESTER.jpg'],key:2},

                           {question:"HO",options:['HORTELA.jpg','HINO.jpg','HULK.jpg','HUMANO.jpg'],key:0},

                           {question:"HA",options:['HORTA.jpg','HORTELA.jpg','HELICOPTERO.jpg','HAMESTER.jpg'],key:3},
                           
                           {question:"HU",options:['HUMANO.jpg','HAMBURGUE.jpg','HELICOPTERO.jpg','HOTEL.jpg'],key:0},

                           {question:"HA",options:['HORARIO.jpg','HEROI.jpg','HAMBURGUE.jpg','HOTEL.jpg'],key:2},

                           {question:"HO ",options:['HEROI.jpg','HIPOPOTAMO.jpg','HULK.jpg','HOMEM-ARANHA.jpg'],key:3},

                           {question:"HE",options:['HEROI.jpg','HAMBURGUE.jpg','HOSPITAL.jpg','HORTA.jpg'],key:0},                           

                           {question:"HE",options:['HARPA.jpg','HERCULES.jpg','HIPOPOTAMO.jpg','HULK.jpg'],key:1},
                              
                           {question:"HA",options:['HERCULES.jpg','HOMEM-ARANHA.jpg','HAVAIANAS.jpg' ,'HEROI.jpg'],key:2},
 
                           {question:"HE",options:['HELLO-KITTY.jpg','HAMBURGUE.jpg','HARPA.jpg','HIPOPOTAMO.jpg'],key:0},

                           {question:"HU",options:['HAMESTER.jpg','HORTELA.jpg','HOSPITAL.jpg','HULK.jpg'],key:3},

                           {question:"HO",options:['HUMANO.jpg','HOTEL.jpg','HELLO-KITTY.jpg','HARRY.jpg'],key:1},

                           {question:"HI",options:['HABILIDADE.jpg','HULK.jpg','HINO.jpg','HEROI.jpg'],key:2},
                              
                           {question:"HA",options:['HABILIDADE.jpg','HIPOPOTAMO.jpg','HOMEM-ARANHA.jpg','HOTEL.jpg'],key:0}
                              
                        ]
              },

              { 
               type:":: H :: PALAVRAS",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"HABILIDADE",options:['HAMESTER.jpg','HORARIO.jpg','HABILIDADE.jpg','HINO.jpg'],key:2},
                          
                           {question:"HAMESTER",options:['HINO.jpg','HIPOPOTAMO.jpg','HARPA.jpg','HAMESTER.jpg'],key:3},

                           {question:"HELLO KITTY",options:['HORTELA.jpg','HELLO-KITTY.jpg','HORTA.jpg','HEROI.jpg'],key:1},

                           {question:"HIENA",options:['HIENA.jpg','HELICOPTERO.jpg','HIDRANTE.jpg','HOSPITAL.jpg'],key:0},


                           {question:"HIGIENE",options:['HOMEM-ARANHA.jpg','HIENA.jpg','HIGIENE.jpg','HORARIO.jpg'],key:2},

                           {question:"HARPA",options:['HOTEL.jpg' ,'HARPA.jpg','HERCULES.jpg','HELLO-KITTY.jpg'],key:1},
                           
                           {question:"HORÁRIO",options:['HORARIO.jpg','HEROI.jpg','HULK.jpg','HAMBURGUE.jpg'],key:0},
                           
                           {question:"HUMANO",options:['HOTEL.jpg','HAMBURGUE.jpg','HELICOPTERO.jpg','HUMANO.jpg'],key:3},

           
                           {question:"HARRY POTTER",options:['HULK.jpg','HORTELA.jpg','HIENA.jpg','HARRY.jpg'],key:3},
                           
                          {question:"HELICÓPTERO",options:['HAMESTER.jpg','HOMEM-ARANHA.jpg','HELICOPTERO.jpg','HOSPITAL.jpg'],key:2},

          
                           {question:"HÉROI",options:['HEROI.jpg','HAMBURGUE.jpg','HIGIENE.jpg','HUMANO.jpg'],key:0},


                           {question:"HULK",options:['HEROI.jpg','HORTELA.jpg','HULK.jpg','HORARIO.jpg'],key:2},

                           {question:"HÉRCULES",options:['HERCULES.jpg','HIGIENE.jpg','HORTA.jpg','HIDRANTE.jpg'],key:0},

                           {question:"HORTA",options:['HAVAIANAS.jpg','HIDRO.jpg','HEROI.jpg' ,'HORTA.jpg'],key:3},
                           
                           {question:"HIDRANTE",options:['HAMESTER.jpg','HIGIENE.jpg','HIDRANTE.jpg' ,'HORARIO.jpg'],key:2},

                           {question:"HORTELÃ",options:['HOMEM-ARANHA.jpg','HORTELA.jpg','HIENA.jpg','HELICOPTERO.jpg'],key:1},


                           {question:"HIPOPÓTAMO",options:['HAMBURGUE.jpg','HORARIO.jpg','HIPOPOTAMO.jpg','HOSPITAL.jpg'],key:2},

                           {question:"HAMBÚRGUER",options:['HIDRANTE.jpg','HAVAIANAS.jpg','HIGIENE.jpg','HAMBURGUE.jpg'],key:3},

                           {question:"HOTEL",options:['HOTEL.jpg','HOMEM-ARANHA.jpg','HEROI.jpg','HORTA.jpg'],key:0},

                           {question:"HINO",options:['HOSPITAL.jpg','HINO.jpg','HOTEL.jpg','HORARIO.jpg'],key:1},

                           {question:"HOSPITAL",options:['HIGIENE.jpg','HORTA.jpg','HUMANO.jpg','HOSPITAL.jpg'],key:3},

                           {question:"HAVAIANAS",options:['HOTEL.jpg','HIPOPOTAMO.jpg','HAVAIANAS.jpg','HOMEM-ARANHA.jpg'],key:2},
                 
                           {question:"HIDRO",options:['HIDRO.jpg','HAVAIANAS.jpg','HIDRANTE.jpg','HOTEL.jpg'],key:0},
                 
                           {question:"HOMEM ARANHA",options:['HAMBURGUE.jpg','HOMEM-ARANHA.jpg','HIGIENE.jpg','HERCULES.jpg'],key:1}
                        ]
              },
  
             { 
               type:":: J :: INICIAIS",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"JA",options:['JACARE.jpg','JIBOIA.jpg','JOELHO.jpg','JUJUBA.jpg'],key:0},
                          
                           {question:"JI",options:['JUJUBA.jpg','JORNALISTAS.jpg','JOANINHA.jpg','JIPE.jpg'],key:3},

                           {question:"JU",options:['JEANS.jpg','JUIZ.jpg','JARDINEIRO.jpg','JARDIM.jpg'],key:1},

                           {question:"JU",options:['JOELHO.jpg','JANTAR.jpg','JUJUBA.jpg','JAQUETA.jpg'],key:2},
                           
                           {question:"JO",options:['JUIZ.jpg','JABUTICABA.jpg','JANELA.jpg','JOGADOR.jpg'],key:3},
                            
                           {question:"JA",options:['JUMENTO.jpg','JOELHO.jpg','JABUTI.jpg','JETSKI.jpg'],key:2},  

                           {question:"JO",options:['JUJUBA.jpg','JORNALISTAS.jpg','JANTAR.jpg','JANELA.jpg'],key:1},
                           
                           {question:"JA",options:['JANELA.jpg','JUMENTO.jpg','JOANINHA.jpg','JOGADOR.jpg'],key:0},

                           {question:"JU",options:['JAQUETA.jpg','JOELHO.jpg','JUMENTO.jpg','JANTAR.jpg'],key:2},

                           {question:"JO",options:['JUBA.jpg','JUJUBA.jpg','JAULA.jpg','JORNAL.jpg'],key:3},
                 
                           {question:"JA",options:['JAVALI.jpg','JUMENTO.jpg','JOANINHA.jpg','JOELHO.jpg'],key:0},
                 
                           {question:"JO",options:['JEANS.jpg','JOANINHA.jpg','JARDIM.jpg','JUMENTO.jpg'],key:1},
                           
                           {question:"JU",options:['JARDINEIRO.jpg','JOANINHA.jpg','JAPAO.jpg','JUBA.jpg'],key:3},

                           {question:"JA",options:['JARDINEIRO.jpg','JEANS.jpg','JOANINHA.jpg','JOELHO.jpg'],key:0},

                           {question:"JE",options:['JIBOIA.jpg','JUDO.jpg','JOANINHA.jpg','JEANS.jpg'],key:3},

                           {question:"JA",options:['JUJUBA.jpg','JOIAS.jpg','JAQUETA.jpg','JOELHO.jpg'],key:2},
                           
                           {question:"JA",options:['JUMENTO.jpg','JORNAL.jpg','JAPAO.jpg','JOIAS.jpg'],key:2},
                            
                           {question:"JA",options:['JOANINHA.jpg','JOGADOR.jpg','JUNINA.jpg','JARDIM.jpg'],key:3},
                           
                           {question:"JO",options:['JANGADA.jpg','JOELHO.jpg','JUNINA.jpg','JETSKI.jpg'],key:1},

                           {question:"JA",options:['JIPE.jpg','JUJUBA.jpg','JEANS.jpg','JANTAR.jpg'],key:3},
                           
                           {question:"JI",options:['JABUTI.jpg','JIBOIA.jpg','JUMENTO.jpg','JETSKI.jpg'],key:1},
                 
                           {question:"JA",options:['JARRA.jpg','JEANS.jpg','JORNAL.jpg','JUMENTO.jpg'],key:0},

                           {question:"JU",options:['JOELHO.jpg','JAPAO.jpg','JUNINA.jpg','JOIAS.jpg'],key:2},

                           {question:"JA",options:['JATO.jpg','JUNINA.jpg','JUMENTO.jpg','JIPE.jpg'],key:0},

                           {question:"JO",options:['JEANS.jpg','JUDO.jpg','JETSKI.jpg','JOIAS.jpg'],key:3},

                           {question:"JA",options:['JOGADOR.jpg','JOELHO.jpg','JABUTICABA.jpg','JIBOIA.jpg'],key:2},
                           
                           {question:"JA",options:['JAULA.jpg','JOANINHA.jpg','JETSKI.jpg','JUJUBA.jpg'],key:0},
                           
                           {question:"JE",options:['JANGADA.jpg','JOANINHA.jpg','JARDIM.jpg','JETSKI.jpg'],key:3},
                           
                           {question:"JA",options:['JOELHO.jpg','JOIAS.jpg','JANGADA.jpg','JUDO.jpg'],key:2},
                           
                           {question:"JU",options:['JABUTICABA.jpg','JUDO.jpg','JANELA.jpg','JEANS.jpg'],key:1}
                   
                          ]
              },

              { 
               type:":: J :: PALAVRAS",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"JABUTI",options:['JABUTI.jpg','JOELHO.jpg','JUMENTO.jpg','JETSKI.jpg'],key:0},
                 
                           {question:"JIPE",options:['JUJUBA.jpg','JORNALISTAS.jpg','JOANINHA.jpg','JIPE.jpg'],key:3},
                           
                           {question:"JACARÉ",options:['JACARE.jpg','JANELA.jpg','JOELHO.jpg','JUJUBA.jpg'],key:0},

                           {question:"JUIZ",options:['JEANS.jpg','JUIZ.jpg','JARDINEIRO.jpg','JARDIM.jpg'],key:1},
                           
                           {question:"JANGADA",options:['JOELHO.jpg','JANTAR.jpg','JANGADA.jpg','JAQUETA.jpg'],key:2},

                           {question:"JUJUBA",options:['JOELHO.jpg','JANTAR.jpg','JUJUBA.jpg','JAQUETA.jpg'],key:2},

                           {question:"JAVALI",options:['JAVALI.jpg','JEANS.jpg','JOANINHA.jpg','JOELHO.jpg'],key:0},
                 
                           {question:"JOGADOR",options:['JUIZ.jpg','JABUTICABA.jpg','JANELA.jpg','JOGADOR.jpg'],key:3},

                           {question:"JORNALISTAS",options:['JAVALI.jpg','JORNALISTAS.jpg','JANTAR.jpg','JANELA.jpg'],key:1},
                           
                           {question:"JANELA",options:['JANELA.jpg','JUMENTO.jpg','JOANINHA.jpg','JABUTICABA.jpg'],key:0},

                           {question:"JUMENTO",options:['JAQUETA.jpg','JOELHO.jpg','JUMENTO.jpg','JANTAR.jpg'],key:2},

                           {question:"JOANINHA",options:['JEANS.jpg','JOANINHA.jpg','JARDIM.jpg', 'JUMENTO.jpg'],key:1},
                           
                           {question:"JUBA",options:['JARDINEIRO.jpg','JOANINHA.jpg','JAPAO.jpg','JUBA.jpg'],key:3},

                           {question:"JARDINEIRO",options:['JARDINEIRO.jpg','JAQUETA.jpg','JOANINHA.jpg','JOELHO.jpg'],key:0},

                           {question:"JEANS",options:['JIBOIA.jpg','JUDO.jpg','JOANINHA.jpg','JEANS.jpg'],key:3},

                           {question:"JAQUETA",options:['JUJUBA.jpg','JANELA.jpg','JAQUETA.jpg','JOELHO.jpg'],key:2},

                           {question:"JOELHO",options:['JOIAS.jpg','JOELHO.jpg','JUNINA.jpg','JANGADA.jpg'],key:1},

                           {question:"JANTAR",options:['JAPAO.jpg','JACARE.jpg','JEANS.jpg','JANTAR.jpg'],key:3},
                           
                           {question:"JIBÓIA",options:['JABUTI.jpg','JUMENTO.jpg','JIBOIA.jpg','JETSKI.jpg'],key:2},  

                           {question:"JARRA",options:['JARRA.jpg','JANTAR.jpg','JANELA.jpg','JUMENTO.jpg'],key:0},

                           {question:"JUNINA",options:['JOELHO.jpg','JAPAO.jpg','JUNINA.jpg','JOIAS.jpg'],key:2},

                           {question:"JATO",options:['JATO.jpg','JANELA.jpg','JACARE.jpg','JIPE.jpg'],key:0},

                           {question:"JÓIAS",options:['JEANS.jpg','JUDO.jpg','JAVALI.jpg','JOIAS.jpg'],key:3},

                           {question:"JABUTICABA",options:['JANELA.jpg','JAQUETA.jpg','JABUTICABA.jpg','JARDINEIRO.jpg'],key:2},
                           
                           {question:"JAULA",options:['JAULA.jpg','JOANINHA.jpg','JETSKI.jpg','JUJUBA.jpg'],key:0},
                           
                           {question:"JET SKI",options:['JEANS.jpg','JOANINHA.jpg','JARDIM.jpg','JETSKI.jpg'],key:3},
                            
                           {question:"JAPÃO",options:['JUMENTO.jpg','JACARE.jpg','JAPAO.jpg','JAVALI.jpg'],key:2},
                            
                           {question:"JORNAL",options:['JORNAL.jpg','JOANINHA.jpg','JARDIM.jpg','JAULA.jpg'],key:0},

                           {question:"JARDIM",options:['JANELA.jpg','JOGADOR.jpg','JANGADA.jpg','JARDIM.jpg'],key:3},
                                           
                           {question:"JUDÔ",options:['JABUTICABA.jpg','JUDO.jpg','JANELA.jpg','JEANS.jpg'],key:1}
                        ]
              },
 
  
   { 
               type:" :: K - L :: INICIAIS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"LOCOMOTIVA",options:['LARANJA.jpg','LOCOMOTIVA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"LANCHE",options:['LANCHE.jpg','LIVROS.jpg','LEBRE.jpg','LAREIRA.jpg'],key:0},
                     
                           {question:"LEÃO",options:['LIMAO.jpg','LEITE.jpg','LEAO.jpg','LAPIS.jpg'],key:2},
                           
                           {question:"LÂMPADA",options:['LAVAR.jpg','LEBRE.jpg','LAGO.jpg','LAMPADA.jpg'],key:3},

                           {question:"LANTERNA",options:['KARATE.jpg','LIMPEZA.jpg','LOUSA.jpg','LANTERNA.jpg'],key:3},

                           {question:"LAREIRA",options:['LEQUE.jpg','LESMA.jpg','LAREIRA.jpg','LEITE.jpg'],key:2},

                           {question:"LARANJA",options:['LEGO.jpg','LARANJA.jpg','LIMPEZA.jpg','LUA.jpg'],key:1},
                           
                           {question:"LAGOSTA",options:['LAGOSTA.jpg','LUTADOR.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},

                           {question:"LAGO",options:['LEITE.jpg','LUPA.jpg','KARATE.jpg','LAGO.jpg'],key:3},
                           
                           {question:"LASANHA",options:['LOUSA.jpg','LASANHA.jpg','LOBO.jpg','LIMAO.jpg',],key:1},

                           {question:"LÁPIS",options:['LAPIS.jpg','LOBO.jpg','LONTRA.jpg','LIMPEZA.jpg'],key:0},

                           {question:"LIMPEZA",options:['LAGARTA.jpg','LARANJA.jpg','LIMPEZA.jpg','LOUSA.jpg'],key:2},

                           {question:"KARATE",options:['KARATE.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"KIMONO",options:['LANCHE.jpg','KIMONO.jpg','LULA.jpg','LUVAS.jpg'],key:1},
                           
                           {question:"KOMBI",options:['LANCHE.jpg','LIVROS.jpg','LIXO.jpg','KOMBI.jpg'],key:3},
                           
                           {question:"KIWI",options:['KIWI.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                           
                           {question:"LÁGRIMAS",options:['LANCHE.jpg','LEGO.jpg','LAGRIMAS.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"LAVAR",options:['LOBO.jpg','LAVAR.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                 
                           {question:"LENTO",options:['LEGUMES.jpg','KOALAS.jpg','LANTERNA.jpg','LENTO.jpg'],key:3},
                 
                           {question:"KINDER",options:['KINDER.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"KOALAS",options:['LANCHE.jpg','LAGRIMAS.jpg','KOALAS.jpg','LEGO.jpg'],key:2},
                 
                           {question:"KETCHUP",options:['KETCHUP.jpg','LIVROS.jpg','LEGUMES.jpg','LUVAS.jpg'],key:0},
                                
                           {question:"LAGARTIXA",options:['LEAO.jpg','LAGARTIXA.jpg','LIVROS.jpg','LEITURA.jpg'],key:1},

                           {question:"LEITE",options:['LEGO.jpg','LEOPARDO.jpg','LEITE.jpg','LIXO.jpg'],key:2},

                           {question:"LEGO",options:['LABIOS.jpg','LEGUMES.jpg','LEQUE.jpg','LEGO.jpg',],key:3},

                           {question:"LEQUE",options:['LEQUE.jpg','LOCOMOTIVA.jpg','LIVRO.jpg','LEAO.jpg'],key:0},

                           {question:"LEOA",options:['LUA.jpg','LARANJA.jpg','LEOA.jpg','LAVAR.jpg',],key:2},

                           {question:"LENHA",options:['LENHA.jpg','LEITE.jpg','LEGUMES.jpg','LEAO.jpg'],key:0},

                           {question:"LEGUMES",options:['LOBO.jpg','LONTRA.jpg','LUVAS.jpg','LEGUMES.jpg'],key:3},

                           {question:"LESMA",options:['LIVRO.jpg','LESMA.jpg','LOUCA.jpg','LIMPEZA.jpg'],key:1},

                           {question:"LUNETA",options:['LAGRIMAS.jpg','LEITE.jpg','LUNETA.jpg','LAPIS.jpg'],key:2},                     

                           {question:"LIXO",options:['LEGO.jpg','LIXO.jpg','LANCHE.jpg','LEBRE.jpg'],key:1},

                           {question:"LIMONADA",options:['LIMONADA.jpg','LANCHE.jpg','LUMINARIA.jpg','LIXO.jpg'],key:0},

                           {question:"LEBRE",options:['LAMPADA.jpg','LUA.jpg','LEAO.jpg','LEBRE.jpg'],key:3},

                           {question:"LIVROS",options:['LUA.jpg','LIVROS.jpg','LUNETA.jpg','LANCHE.jpg'],key:1},
                             
                           {question:"LAGARTO",options:['LENTO.jpg','LEQUE.jpg','LAGARTO.jpg','LENHA.jpg'],key:2},

                           {question:"LOUSA",options:['LOUSA.jpg','LONTRA.jpg','LEAO.jpg','LIMAO.jpg'],key:0},

                           {question:"LOBO",options: ['LUPA.jpg', 'LOUSA.jpg','LAGRIMAS.jpg','LOBO.jpg'],key:3},

                           {question:"LÁGRIMAS",options:['LAGRIMAS.jpg','LENHA.jpg','LOCOMOTIVA.jpg','LENTO.jpg'],key:0},

                           {question:"LONTRA",options:['LOUCA.jpg','LONTRA.jpg','LARANJA.jpg','LANTERNA.jpg'],key:1},

                           {question:"LOUÇA",options:['LIMAO.jpg','LUPA.jpg','LUVAS.jpg','LOUCA.jpg'],key:3},

                           {question:"LENHADOR",options:['LAGARTO.jpg','LARANJA.jpg','LIMPEZA.jpg','LENHADOR.jpg'],key:3},

                           {question:"LUA",options:['LOUSA.jpg','LOBO.jpg','LUA.jpg','LIMPEZA.jpg'],key:2},

                           {question:"LUNETA",options:['LUNETA.jpg','LIMPEZA.jpg','LOBO.jpg','LEGO.jpg'],key:0},

                           {question:"LUTA",options:['LEGO.jpg','LUTA.jpg','LANCHE.jpg','LENCO.jpg' ],key:1},

                           {question:"LUVAS",options:['LENTO.jpg','LOBO.jpg','LUVAS.jpg','LOCOMOTIVA.jpg'],key:2},
                           
                           {question:"LAVADOURA",options:['LAVADOURA.jpg','LEITE.jpg','LIXO.jpg','LENTO.jpg'],key:0},

                           {question:"LULA",options:['LIXO.jpg','LATA.jpg','LAMA.jpg','LULA.jpg'],key:3},

                           {question:"LOCOMOTIVA",options:['LAMA.jpg','LOCOMOTIVA.jpg','LENHA.jpg','LUPA.jpg'],key:1},

                           {question:"LUPA",options:['LARANJA.jpg','LUPA.jpg','LIMPEZA.jpg','LUMINARIA.jpg'],key:0}
                          ]
              },
     
          { 
               type:" :: K - L :: PALAVRAS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"LOCOMOTIVA",options:['LARANJA.jpg','LOCOMOTIVA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"LANCHE",options:['LANCHE.jpg','LIVROS.jpg','LEBRE.jpg','LAREIRA.jpg'],key:0},
                     
                           {question:"LEÃO",options:['LIMAO.jpg','LEITE.jpg','LEAO.jpg','LAPIS.jpg'],key:2},
                           
                           {question:"LÂMPADA",options:['LAVAR.jpg','LEBRE.jpg','LAGO.jpg','LAMPADA.jpg'],key:3},

                           {question:"LANTERNA",options:['KARATE.jpg','LIMPEZA.jpg','LOUSA.jpg','LANTERNA.jpg'],key:3},

                           {question:"LAREIRA",options:['LEQUE.jpg','LESMA.jpg','LAREIRA.jpg','LEITE.jpg'],key:2},

                           {question:"LARANJA",options:['LEGO.jpg','LARANJA.jpg','LIMPEZA.jpg','LUA.jpg'],key:1},
                           
                           {question:"LAGOSTA",options:['LAGOSTA.jpg','LUTADOR.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},

                           {question:"LAGO",options:['LEITE.jpg','LUPA.jpg','KARATE.jpg','LAGO.jpg'],key:3},
                           
                           {question:"LASANHA",options:['LOUSA.jpg','LASANHA.jpg','LOBO.jpg','LIMAO.jpg',],key:1},

                           {question:"LÁPIS",options:['LAPIS.jpg','LOBO.jpg','LONTRA.jpg','LIMPEZA.jpg'],key:0},

                           {question:"LIMPEZA",options:['LAGARTA.jpg','LARANJA.jpg','LIMPEZA.jpg','LOUSA.jpg'],key:2},

                           {question:"KARATE",options:['KARATE.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"KIMONO",options:['LANCHE.jpg','KIMONO.jpg','LULA.jpg','LUVAS.jpg'],key:1},
                           
                           {question:"KOMBI",options:['LANCHE.jpg','LIVROS.jpg','LIXO.jpg','KOMBI.jpg'],key:3},
                           
                           {question:"KIWI",options:['KIWI.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                           
                           {question:"LÁGRIMAS",options:['LANCHE.jpg','LEGO.jpg','LAGRIMAS.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"LAVAR",options:['LOBO.jpg','LAVAR.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                 
                           {question:"LENTO",options:['LEGUMES.jpg','KOALAS.jpg','LANTERNA.jpg','LENTO.jpg'],key:3},
                 
                           {question:"KINDER",options:['KINDER.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"KOALAS",options:['LANCHE.jpg','LAGRIMAS.jpg','KOALAS.jpg','LEGO.jpg'],key:2},
                 
                           {question:"KETCHUP",options:['KETCHUP.jpg','LIVROS.jpg','LEGUMES.jpg','LUVAS.jpg'],key:0},
                                
                           {question:"LAGARTIXA",options:['LEAO.jpg','LAGARTIXA.jpg','LIVROS.jpg','LEITURA.jpg'],key:1},

                           {question:"LEITE",options:['LEGO.jpg','LENTO.jpg','LEITE.jpg','LIXO.jpg'],key:2},

                           {question:"LEGO",options:['LAVAR.jpg','LEGUMES.jpg','LEQUE.jpg','LEGO.jpg',],key:3},

                           {question:"LEQUE",options:['LEQUE.jpg','LOCOMOTIVA.jpg','LIVRO.jpg','LEAO.jpg'],key:0},

                           {question:"LEOA",options:['LUA.jpg','LARANJA.jpg','LEOA.jpg','LAVAR.jpg',],key:2},

                           {question:"LENHA",options:['LENHA.jpg','LEITE.jpg','LEGUMES.jpg','LEAO.jpg'],key:0},

                           {question:"LEGUMES",options:['LOBO.jpg','LONTRA.jpg','LUVAS.jpg','LEGUMES.jpg'],key:3},

                           {question:"LESMA",options:['LIVRO.jpg','LESMA.jpg','LOUCA.jpg','LIMPEZA.jpg'],key:1},

                           {question:"LUNETA",options:['LAGRIMAS.jpg','LEITE.jpg','LUNETA.jpg','LAPIS.jpg'],key:2},                     

                           {question:"LIXO",options:['LEGO.jpg','LIXO.jpg','LANCHE.jpg','LEBRE.jpg'],key:1},

                           {question:"LIMONADA",options:['LIMONADA.jpg','LANCHE.jpg','LUMINARIA.jpg','LIXO.jpg'],key:0},

                           {question:"LEBRE",options:['LAMPADA.jpg','LUA.jpg','LEAO.jpg','LEBRE.jpg'],key:3},

                           {question:"LIVROS",options:['LUA.jpg','LIVROS.jpg','LUNETA.jpg','LANCHE.jpg'],key:1},
                             
                           {question:"LAGARTO",options:['LENTO.jpg','LEQUE.jpg','LAGARTO.jpg','LENHA.jpg'],key:2},

                           {question:"LOUSA",options:['LOUSA.jpg','LONTRA.jpg','LEAO.jpg','LIMAO.jpg'],key:0},

                           {question:"LOBO",options: ['LUPA.jpg', 'LOUSA.jpg','LAGRIMAS.jpg','LOBO.jpg'],key:3},

                           {question:"LÁGRIMAS",options:['LAGRIMAS.jpg','LENHA.jpg','LOCOMOTIVA.jpg','LENTO.jpg'],key:0},

                           {question:"LONTRA",options:['LOUCA.jpg','LONTRA.jpg','LARANJA.jpg','LANTERNA.jpg'],key:1},

                           {question:"LOUÇA",options:['LIMAO.jpg','LUPA.jpg','LUVAS.jpg','LOUCA.jpg'],key:3},

                           {question:"LENHADOR",options:['LAGARTO.jpg','LARANJA.jpg','LIMPEZA.jpg','LENHADOR.jpg'],key:3},

                           {question:"LUA",options:['LOUSA.jpg','LOBO.jpg','LUA.jpg','LIMPEZA.jpg'],key:2},

                           {question:"LUNETA",options:['LUNETA.jpg','LIMPEZA.jpg','LOBO.jpg','LEGO.jpg'],key:0},

                           {question:"LUTA",options:['LEGO.jpg','LUTA.jpg','LANCHE.jpg','LENCO.jpg' ],key:1},

                           {question:"LUVAS",options:['LENTO.jpg','LOBO.jpg','LUVAS.jpg','LOCOMOTIVA.jpg'],key:2},
                           
                           {question:"LAVADOURA",options:['LAVADOURA.jpg','LEITE.jpg','LIXO.jpg','LENTO.jpg'],key:0},

                           {question:"LULA",options:['LIXO.jpg','LATA.jpg','LAMA.jpg','LULA.jpg'],key:3},

                           {question:"LOCOMOTIVA",options:['LAMA.jpg','LOCOMOTIVA.jpg','LENHA.jpg','LUPA.jpg'],key:1},

                           {question:"LUPA",options:['LARANJA.jpg','LUPA.jpg','LIMPEZA.jpg','LUMINARIA.jpg'],key:0}
                     

                        ]
              },
             
             { 
               type:" :: M - N :: INICIAIS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"LO",options:['LARANJA.jpg','LOCOMOTIVA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"LA",options:['LANCHE.jpg','LIVROS.jpg','LIMONADA.jpg','LUVAS.jpg'],key:0},
                     
                           {question:"LE",options:['LIMAO.jpg','LATA.jpg','LEAO.jpg','LAPIS.jpg'],key:2},
                 
                           {question:"KA",options:['KARATE.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"KI",options:['LANCHE.jpg','KIMONO.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                           
                           {question:"KO",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','KOMBI.jpg'],key:3},
                           
                           {question:"KI",options:['KIWI.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                           
                           {question:"KU",options:['LANCHE.jpg','LIVROS.jpg','KUNGFU.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"KI",options:['LANCHE.jpg','KINGKONG.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                 
                           {question:"KA",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','KARAOKE.jpg'],key:3},
                 
                           {question:"KI",options:['KINDER.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"KO",options:['LANCHE.jpg','LIVROS.jpg','KOALAS.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"KE",options:['KETCHUP.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"LA",options:['LOCOMOTIVA.jpg','LIQUIDIFICADOR.jpg','LOUSA.jpg','LAMPADA.jpg'],key:3},

                           {question:"LA",options:['LONTRA.jpg','LIMPEZA.jpg','LOUSA.jpg','LANTERNA.jpg'],key:3},

                           {question:"LA",options:['LEQUE.jpg','LESMA.jpg','LAREIRA.jpg','LEITE.jpg'],key:2},

                           {question:"LA",options:['LOBO.jpg' ,'LARANJA.jpg','LIXO.jpg','LUPA.jpg'],key:1},
                           
                           {question:"LA",options:['LAGOSTA.jpg','LUTADOR.jpg','LIXO.jpg','LUVAS.jpg'],key:0},

                           {question:"LA",options:['LEITE.jpg','LUNETAjpg','LIMPEZA.jpg','LAGO.jpg'],key:3},
                           
                           {question:"LA",options:['LOUSA.jpg','LASANHA.jpg','LOBO.jpg', 'LIMAO.jpg',],key:1},

                           {question:"LÁ",options:['LAPIS.jpg','LOUCA.jpg','LONTRA.jpg','LIMPEZA.jpg'],key:0},

                           {question:"LI",options:['LAGARTA.jpg','LARAJA.jpg','LIMPEZA.jpg','LOUSA.jpg'],key:2},

                           {question:"LA",options:['LEAO.jpg','LAGARTIXA.jpg','LIVROS.jpg','LEITURA.jpg'],key:1},

                           {question:"LE",options:['LUA.jpg','LUTADOR.jpg','LEITE.jpg','LIXO.jpg'],key:2},

                           {question:"LE",options:['LABIOS.jpg','LAPIS.jpg','LOUSA.jpg','LEOPARDO.jpg',],key:3},

                           {question:"LE ",options:['LEQUE.jpg','LOCOMOTIVA.jpg','LIVROS.jpg','LIMAO.jpg'],key:0},

                           {question:"LE",options:['LUA.jpg','LARANJA.jpg','LEOA.jpg','LAVAR.jpg',],key:2},

                           {question:"LE",options:['LENHA.jpg','LIMPEZA.jpg','LOUCA.jpg','LASANHA.jpg'],key:0},

                           {question:"LE",options:['LOBO.jpg','LONTRA.jpg','LUVAS.jpg','LEITAO.jpg'],key:3},

                           {question:"LE",options:['LIVROS.jpg','LESMA.jpg','LOUCA.jpg','LIMPEZA.jpg'],key:1},

                           {question:"LU",  options:['LIMONADA.jpg','LEITE.jpg','LUNETA.jpg','LAPIS.jpg'],key:2},                     

                           {question:"LI",options:['LEGO.jpg','LIXEIRA.jpg','LANCHE.jpg','LEQUE.jpg'],key:1},

                           {question:"LI",options:['LIMONADA.jpg','LANCHE.jpg','LUMINARIA.jpg','LABIRINTO.jpg'],key:0},

                           {question:"LI",options:['LAMPADA.jpg','LENTO.jpg','LEAO.jpg','LIQUIDIFICADOR.jpg'],key:3},

                           {question:"LI",options:['LUA.jpg','LIVROS.jpg','LUNETA.jpg','LANCHE.jpg'],key:1},
                             
                           {question:"LI",options:['LAGARTA.jpg','LEQUE.jpg','LINGUA.jpg','LENHA.jpg'],key:2},

                           {question:"LO",options:['LOUSA.jpg','LARANJA.jpg','LEAO.jpg','LIMAO.jpg'],key:0},

                           {question:"LO",options: ['LUPA.jpg','LIQUIDIFICADOR.jpg','LEAO.jpg','LOBO.jpg'],key:3},

                           {question:"LI",options:['LIMOSINE.jpg','LENHA.jpg','LOCOMOTIVA.jpg','LENTO.jpg'],key:0},

                           {question:"LO",options:['LIMAO.jpg','LONTRA.jpg','LARANJA.jpg','LANTERNA.jpg'],key:1},

                           {question:"LO",options:['LIMAO.jpg','LUPA.jpg','LUVAS.jpg','LOUCA.jpg'],key:3},

                           {question:"LO",options:['LENTO.jpg','LAGO.jpg','LOJA.jpg','LAGARTIXA.jpg'],key:2},

                           {question:"LE",options:['LABIRINTO.jpg','LUVAS.jpg','LIMPEZA.jpg','LENHADOR.jpg'],key:3},

                           {question:"LU",options:['LOUSA.jpg','LOBO.jpg','LUA.jpg','LIMPEZA.jpg'],key:2},

                           {question:"LU",options:['LUNETA.jpg','LIMPEZA.jpg','LOBO.jpg','LEGO.jpg'],key:0},

                           {question:"LU",options:['LEGO.jpg','LUTA.jpg','LANCHE.jpg','LENCO.jpg' ],key:1},

                           {question:"LU",options:['LENCO.jpg','LOBO.jpg','LUVAS.jpg','LOCOMOTIVA.jpg'],key:2},
                           
                           {question:"LA",options:['LAVANDERIA.jpg','LEITE.jpg','LIXO.jpg','LENTO.jpg'],key:0},

                           {question:"LU",options:['LIXO.jpg' ,'LATA.jpg','LAMA.jpg', 'LULA.jpg'],key:3},

                           {question:"LO",options:['LAMA.jpg','LOCOMOTIVA.jpg','LENHA.jpg','LUPA.jpg'],key:1},

                           {question:"LU",options:['LARANJA.jpg','LUPA.jpg','LIMPEZA.jpg','LAGOSTA.jpg'],key:0}

                          ]
              },
  
             { 
               type:" :: M - N :: PALAVRAS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"MAÇÃ",options:['LARANJA.jpg','MACA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"MACACO",options:['M.jpg','LIVROS.jpg','LIMONADA.jpg','MACACO.jpg'],key:3},
                     
                           {question:"MALABARISTA",options:['LIMAO.jpg','MALABARISTA.jpg','LEAO.jpg','LAPIS.jpg'],key:1},
                 
                           {question:"MAMÃO",options:['KARATE.jpg','LIVROS.jpg','MAMAO.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"MARACUJÁ",options:['LANCHE.jpg','MARACUJA.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                           
                           {question:"MEL",options:['MEL.jpg','LIVROS.jpg','LANTERNA.jpg','KOMBI.jpg'],key:0},
                           
                           {question:"MELANCIA",options:['KIWI.jpg','LIVROS.jpg','LANTERNA.jpg','MELANCIA.jpg'],key:3},
                           
                           {question:"MELAO",options:['LANCHE.jpg','LIVROS.jpg','MELAO.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"MESA",options:['LANCHE.jpg','MESA.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                 
                           {question:"MILHO",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','MILHO.jpg'],key:3},
                 
                           {question:"MILKSHAKE",options:['KINDER.jpg','MILKSHAKE.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                 
                           {question:"MOANA",options:['LANCHE.jpg','LIVROS.jpg','MOANA.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"MORANGO",options:['MORANGO.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"LA",options:['LOCOMOTIVA.jpg','LIQUIDIFICADOR.jpg','LOUSA.jpg','LAMPADA.jpg'],key:3},

                           {question:"LA",options:['LONTRA.jpg','LIMPEZA.jpg','LOUSA.jpg','LANTERNA.jpg'],key:3},

                           {question:"LA",options:['LEQUE.jpg','LESMA.jpg','LAREIRA.jpg','LEITE.jpg'],key:2},

                           {question:"LA",options:['LOBO.jpg' ,'LARANJA.jpg','LIXO.jpg','LUPA.jpg'],key:1},
                           
                           {question:"LA",options:['LAGOSTA.jpg','LUTADOR.jpg','LIXO.jpg','LUVAS.jpg'],key:0},

                           {question:"LA",options:['LEITE.jpg','LUNETAjpg','LIMPEZA.jpg','LAGO.jpg'],key:3},
                           
                           {question:"LA",options:['LOUSA.jpg','LASANHA.jpg','LOBO.jpg', 'LIMAO.jpg',],key:1},

                           {question:"LÁ",options:['LAPIS.jpg','LOUCA.jpg','LONTRA.jpg','LIMPEZA.jpg'],key:0},

                           {question:"LI",options:['LAGARTA.jpg','LARAJA.jpg','LIMPEZA.jpg','LOUSA.jpg'],key:2},

                           {question:"LA",options:['LEAO.jpg','LAGARTIXA.jpg','LIVROS.jpg','LEITURA.jpg'],key:1},

                           {question:"LE",options:['LUA.jpg','LUTADOR.jpg','LEITE.jpg','LIXO.jpg'],key:2},

                           {question:"LE",options:['LABIOS.jpg','LAPIS.jpg','LOUSA.jpg','LEOPARDO.jpg',],key:3},

                           {question:"LE ",options:['LEQUE.jpg','LOCOMOTIVA.jpg','LIVROS.jpg','LIMAO.jpg'],key:0},

                           {question:"LE",options:['LUA.jpg','LARANJA.jpg','LEOA.jpg','LAVAR.jpg',],key:2},

                           {question:"LE",options:['LENHA.jpg','LIMPEZA.jpg','LOUCA.jpg','LASANHA.jpg'],key:0},

                           {question:"LE",options:['LOBO.jpg','LONTRA.jpg','LUVAS.jpg','LEITAO.jpg'],key:3},

                           {question:"LE",options:['LIVROS.jpg','LESMA.jpg','LOUCA.jpg','LIMPEZA.jpg'],key:1},

                           {question:"LU",  options:['LIMONADA.jpg','LEITE.jpg','LUNETA.jpg','LAPIS.jpg'],key:2},                     

                           {question:"LI",options:['LEGO.jpg','LIXEIRA.jpg','LANCHE.jpg','LEQUE.jpg'],key:1},

                           {question:"LI",options:['LIMONADA.jpg','LANCHE.jpg','LUMINARIA.jpg','LABIRINTO.jpg'],key:0},

                           {question:"LI",options:['LAMPADA.jpg','LENTO.jpg','LEAO.jpg','LIQUIDIFICADOR.jpg'],key:3},

                           {question:"LI",options:['LUA.jpg','LIVROS.jpg','LUNETA.jpg','LANCHE.jpg'],key:1},
                             
                           {question:"LI",options:['LAGARTA.jpg','LEQUE.jpg','LINGUA.jpg','LENHA.jpg'],key:2},

                           {question:"LO",options:['LOUSA.jpg','LARANJA.jpg','LEAO.jpg','LIMAO.jpg'],key:0},

                           {question:"LO",options: ['LUPA.jpg','LIQUIDIFICADOR.jpg','LEAO.jpg','LOBO.jpg'],key:3},

                           {question:"LI",options:['LIMOSINE.jpg','LENHA.jpg','LOCOMOTIVA.jpg','LENTO.jpg'],key:0},

                           {question:"LO",options:['LIMAO.jpg','LONTRA.jpg','LARANJA.jpg','LANTERNA.jpg'],key:1},

                           {question:"LO",options:['LIMAO.jpg','LUPA.jpg','LUVAS.jpg','LOUCA.jpg'],key:3},

                           {question:"LO",options:['LENTO.jpg','LAGO.jpg','LOJA.jpg','LAGARTIXA.jpg'],key:2},

                           {question:"LE",options:['LABIRINTO.jpg','LUVAS.jpg','LIMPEZA.jpg','LENHADOR.jpg'],key:3},

                           {question:"LU",options:['LOUSA.jpg','LOBO.jpg','LUA.jpg','LIMPEZA.jpg'],key:2},

                           {question:"LU",options:['LUNETA.jpg','LIMPEZA.jpg','LOBO.jpg','LEGO.jpg'],key:0},

                           {question:"LU",options:['LEGO.jpg','LUTA.jpg','LANCHE.jpg','LENCO.jpg' ],key:1},

                           {question:"LU",options:['LENCO.jpg','LOBO.jpg','LUVAS.jpg','LOCOMOTIVA.jpg'],key:2},
                           
                           {question:"LA",options:['LAVANDERIA.jpg','LEITE.jpg','LIXO.jpg','LENTO.jpg'],key:0},

                           {question:"LU",options:['LIXO.jpg' ,'LATA.jpg','LAMA.jpg', 'LULA.jpg'],key:3},

                           {question:"LO",options:['LAMA.jpg','LOCOMOTIVA.jpg','LENHA.jpg','LUPA.jpg'],key:1},

                           {question:"LU",options:['LARANJA.jpg','LUPA.jpg','LIMPEZA.jpg','LAGOSTA.jpg'],key:0}

                          ]
              },
               { 
               type:" :: P - Q :: INICIAIS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"LO",options:['LARANJA.jpg','LOCOMOTIVA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"LA",options:['LANCHE.jpg','LIVROS.jpg','LIMONADA.jpg','LUVAS.jpg'],key:0},
                     
                           {question:"LE",options:['LIMAO.jpg','LATA.jpg','LEAO.jpg','LAPIS.jpg'],key:2},
                 
                           {question:"KA",options:['KARATE.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"KI",options:['LANCHE.jpg','KIMONO.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                           
                           {question:"KO",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','KOMBI.jpg'],key:3},
                           
                           {question:"KI",options:['KIWI.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                           
                           {question:"KU",options:['LANCHE.jpg','LIVROS.jpg','KUNGFU.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"KI",options:['LANCHE.jpg','KINGKONG.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                 
                           {question:"KA",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','KARAOKE.jpg'],key:3},
                 
                           {question:"KI",options:['KINDER.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"KO",options:['LANCHE.jpg','LIVROS.jpg','KOALAS.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"KE",options:['KETCHUP.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"LA",options:['LOCOMOTIVA.jpg','LIQUIDIFICADOR.jpg','LOUSA.jpg','LAMPADA.jpg'],key:3},

                           {question:"LA",options:['LONTRA.jpg','LIMPEZA.jpg','LOUSA.jpg','LANTERNA.jpg'],key:3},

                           {question:"LA",options:['LEQUE.jpg','LESMA.jpg','LAREIRA.jpg','LEITE.jpg'],key:2},

                           {question:"LA",options:['LOBO.jpg' ,'LARANJA.jpg','LIXO.jpg','LUPA.jpg'],key:1},
                           
                           {question:"LA",options:['LAGOSTA.jpg','LUTADOR.jpg','LIXO.jpg','LUVAS.jpg'],key:0},

                           {question:"LA",options:['LEITE.jpg','LUNETAjpg','LIMPEZA.jpg','LAGO.jpg'],key:3},
                           
                           {question:"LA",options:['LOUSA.jpg','LASANHA.jpg','LOBO.jpg', 'LIMAO.jpg',],key:1},

                           {question:"LÁ",options:['LAPIS.jpg','LOUCA.jpg','LONTRA.jpg','LIMPEZA.jpg'],key:0},

                           {question:"LI",options:['LAGARTA.jpg','LARAJA.jpg','LIMPEZA.jpg','LOUSA.jpg'],key:2},

                           {question:"LA",options:['LEAO.jpg','LAGARTIXA.jpg','LIVROS.jpg','LEITURA.jpg'],key:1},

                           {question:"LE",options:['LUA.jpg','LUTADOR.jpg','LEITE.jpg','LIXO.jpg'],key:2},

                           {question:"LE",options:['LABIOS.jpg','LAPIS.jpg','LOUSA.jpg','LEOPARDO.jpg',],key:3},

                           {question:"LE ",options:['LEQUE.jpg','LOCOMOTIVA.jpg','LIVROS.jpg','LIMAO.jpg'],key:0},

                           {question:"LE",options:['LUA.jpg','LARANJA.jpg','LEOA.jpg','LAVAR.jpg',],key:2},

                           {question:"LE",options:['LENHA.jpg','LIMPEZA.jpg','LOUCA.jpg','LASANHA.jpg'],key:0},

                           {question:"LE",options:['LOBO.jpg','LONTRA.jpg','LUVAS.jpg','LEITAO.jpg'],key:3},

                           {question:"LE",options:['LIVROS.jpg','LESMA.jpg','LOUCA.jpg','LIMPEZA.jpg'],key:1},

                           {question:"LU",  options:['LIMONADA.jpg','LEITE.jpg','LUNETA.jpg','LAPIS.jpg'],key:2},                     

                           {question:"LI",options:['LEGO.jpg','LIXEIRA.jpg','LANCHE.jpg','LEQUE.jpg'],key:1},

                           {question:"LI",options:['LIMONADA.jpg','LANCHE.jpg','LUMINARIA.jpg','LABIRINTO.jpg'],key:0},

                           {question:"LI",options:['LAMPADA.jpg','LENTO.jpg','LEAO.jpg','LIQUIDIFICADOR.jpg'],key:3},

                           {question:"LI",options:['LUA.jpg','LIVROS.jpg','LUNETA.jpg','LANCHE.jpg'],key:1},
                             
                           {question:"LI",options:['LAGARTA.jpg','LEQUE.jpg','LINGUA.jpg','LENHA.jpg'],key:2},

                           {question:"LO",options:['LOUSA.jpg','LARANJA.jpg','LEAO.jpg','LIMAO.jpg'],key:0},

                           {question:"LO",options: ['LUPA.jpg','LIQUIDIFICADOR.jpg','LEAO.jpg','LOBO.jpg'],key:3},

                           {question:"LI",options:['LIMOSINE.jpg','LENHA.jpg','LOCOMOTIVA.jpg','LENTO.jpg'],key:0},

                           {question:"LO",options:['LIMAO.jpg','LONTRA.jpg','LARANJA.jpg','LANTERNA.jpg'],key:1},

                           {question:"LO",options:['LIMAO.jpg','LUPA.jpg','LUVAS.jpg','LOUCA.jpg'],key:3},

                           {question:"LO",options:['LENTO.jpg','LAGO.jpg','LOJA.jpg','LAGARTIXA.jpg'],key:2},

                           {question:"LE",options:['LABIRINTO.jpg','LUVAS.jpg','LIMPEZA.jpg','LENHADOR.jpg'],key:3},

                           {question:"LU",options:['LOUSA.jpg','LOBO.jpg','LUA.jpg','LIMPEZA.jpg'],key:2},

                           {question:"LU",options:['LUNETA.jpg','LIMPEZA.jpg','LOBO.jpg','LEGO.jpg'],key:0},

                           {question:"LU",options:['LEGO.jpg','LUTA.jpg','LANCHE.jpg','LENCO.jpg' ],key:1},

                           {question:"LU",options:['LENCO.jpg','LOBO.jpg','LUVAS.jpg','LOCOMOTIVA.jpg'],key:2},
                           
                           {question:"LA",options:['LAVANDERIA.jpg','LEITE.jpg','LIXO.jpg','LENTO.jpg'],key:0},

                           {question:"LU",options:['LIXO.jpg' ,'LATA.jpg','LAMA.jpg', 'LULA.jpg'],key:3},

                           {question:"LO",options:['LAMA.jpg','LOCOMOTIVA.jpg','LENHA.jpg','LUPA.jpg'],key:1},

                           {question:"LU",options:['LARANJA.jpg','LUPA.jpg','LIMPEZA.jpg','LAGOSTA.jpg'],key:0}

                          ]
              },
               { 
               type:" :: P - Q :: PALAVRAS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"PATO",options:['LARANJA.jpg','LOCOMOTIVA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"PANDA",options:['LANCHE.jpg','LIVROS.jpg','LIMONADA.jpg','LUVAS.jpg'],key:0},
                     
                           {question:"PANDEIRO",options:['LIMAO.jpg','LATA.jpg','LEAO.jpg','LAPIS.jpg'],key:2},
                 
                           {question:"PANQUECA",options:['KARATE.jpg','LIVROS.jpg','LANTERNA.jpg','PANQUECA.jpg'],key:3},
                 
                           {question:"PÃO",options:['LANCHE.jpg','PAO.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                           
                           {question:"PAPAGAIO",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','PAPAGAIL.jpg'],key:3},
                           
                           {question:"PASSARO",options:['PASSARO.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                           
                           {question:"PATO",options:['LANCHE.jpg','LIVROS.jpg','PATO.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"PAVÃO",options:['LANCHE.jpg','KINGKONG.jpg','LANTERNA.jpg','PAVAO.jpg'],key:3},
                 
                           {question:"PELÚCIA",options:['PELUCIA.jpg','LIVROS.jpg','LANTERNA.jpg','KARAOKE.jpg'],key:0},
                 
                           {question:"PERA",options:['KINDER.jpg','PERA.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                 
                           {question:"PERU",options:['LANCHE.jpg','LIVROS.jpg','PERU.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"PIANO",options:['PIANO.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"PIMENTÃO",options:['LOCOMOTIVA.jpg','PIMENTAO.jpg','LOUSA.jpg','LAMPADA.jpg'],key:1},

                           {question:"PIRATA",options:['LONTRA.jpg','LIMPEZA.jpg','LOUSA.jpg','PIRATA.jpg'],key:3},

                           {question:"PIZZA",options:['LEQUE.jpg','LESMA.jpg','PIZZA.jpg','LEITE.jpg'],key:2},

                           {question:"POÇO",options:['LOBO.jpg' ,'POCO.jpg','LIXO.jpg','LUPA.jpg'],key:1},
                           
                           {question:"POMBA",options:['POMBA.jpg','LUTADOR.jpg','LIXO.jpg','LUVAS.jpg'],key:0},

                           {question:"PORCO",options:['LEITE.jpg','LUNETAjpg','LIMPEZA.jpg','PORCO.jpg'],key:3},
                           
                           {question:"PUDIM",options:['LOUSA.jpg','PUDIM.jpg','LOBO.jpg', 'LIMAO.jpg',],key:1},

                           {question:"LÁ",options:['LAPIS.jpg','LOUCA.jpg','LONTRA.jpg','LIMPEZA.jpg'],key:0},

                           {question:"LI",options:['LAGARTA.jpg','LARAJA.jpg','LIMPEZA.jpg','LOUSA.jpg'],key:2},

                           {question:"LA",options:['LEAO.jpg','LAGARTIXA.jpg','LIVROS.jpg','LEITURA.jpg'],key:1},

                           {question:"LE",options:['LUA.jpg','LUTADOR.jpg','LEITE.jpg','LIXO.jpg'],key:2},

                           {question:"LE",options:['LABIOS.jpg','LAPIS.jpg','LOUSA.jpg','LEOPARDO.jpg',],key:3},

                           {question:"LE ",options:['LEQUE.jpg','LOCOMOTIVA.jpg','LIVROS.jpg','LIMAO.jpg'],key:0},

                           {question:"LE",options:['LUA.jpg','LARANJA.jpg','LEOA.jpg','LAVAR.jpg',],key:2},

                           {question:"LE",options:['LENHA.jpg','LIMPEZA.jpg','LOUCA.jpg','LASANHA.jpg'],key:0},

                           {question:"LE",options:['LOBO.jpg','LONTRA.jpg','LUVAS.jpg','LEITAO.jpg'],key:3},

                           {question:"LE",options:['LIVROS.jpg','LESMA.jpg','LOUCA.jpg','LIMPEZA.jpg'],key:1},

                           {question:"LU",  options:['LIMONADA.jpg','LEITE.jpg','LUNETA.jpg','LAPIS.jpg'],key:2},                     

                           {question:"LI",options:['LEGO.jpg','LIXEIRA.jpg','LANCHE.jpg','LEQUE.jpg'],key:1},

                           {question:"LI",options:['LIMONADA.jpg','LANCHE.jpg','LUMINARIA.jpg','LABIRINTO.jpg'],key:0},

                           {question:"LI",options:['LAMPADA.jpg','LENTO.jpg','LEAO.jpg','LIQUIDIFICADOR.jpg'],key:3},

                           {question:"LI",options:['LUA.jpg','LIVROS.jpg','LUNETA.jpg','LANCHE.jpg'],key:1},
                             
                           {question:"LI",options:['LAGARTA.jpg','LEQUE.jpg','LINGUA.jpg','LENHA.jpg'],key:2},

                           {question:"LO",options:['LOUSA.jpg','LARANJA.jpg','LEAO.jpg','LIMAO.jpg'],key:0},

                           {question:"LO",options: ['LUPA.jpg','LIQUIDIFICADOR.jpg','LEAO.jpg','LOBO.jpg'],key:3},

                           {question:"LI",options:['LIMOSINE.jpg','LENHA.jpg','LOCOMOTIVA.jpg','LENTO.jpg'],key:0},

                           {question:"LO",options:['LIMAO.jpg','LONTRA.jpg','LARANJA.jpg','LANTERNA.jpg'],key:1},

                           {question:"LO",options:['LIMAO.jpg','LUPA.jpg','LUVAS.jpg','LOUCA.jpg'],key:3},

                           {question:"LO",options:['LENTO.jpg','LAGO.jpg','LOJA.jpg','LAGARTIXA.jpg'],key:2},

                           {question:"LE",options:['LABIRINTO.jpg','LUVAS.jpg','LIMPEZA.jpg','LENHADOR.jpg'],key:3},

                           {question:"LU",options:['LOUSA.jpg','LOBO.jpg','LUA.jpg','LIMPEZA.jpg'],key:2},

                           {question:"LU",options:['LUNETA.jpg','LIMPEZA.jpg','LOBO.jpg','LEGO.jpg'],key:0},

                           {question:"LU",options:['LEGO.jpg','LUTA.jpg','LANCHE.jpg','LENCO.jpg' ],key:1},

                           {question:"LU",options:['LENCO.jpg','LOBO.jpg','LUVAS.jpg','LOCOMOTIVA.jpg'],key:2},
                           
                           {question:"LA",options:['LAVANDERIA.jpg','LEITE.jpg','LIXO.jpg','LENTO.jpg'],key:0},

                           {question:"LU",options:['LIXO.jpg' ,'LATA.jpg','LAMA.jpg', 'LULA.jpg'],key:3},

                           {question:"LO",options:['LAMA.jpg','LOCOMOTIVA.jpg','LENHA.jpg','LUPA.jpg'],key:1},

                           {question:"LU",options:['LARANJA.jpg','LUPA.jpg','LIMPEZA.jpg','LAGOSTA.jpg'],key:0}

                          ]
              },
               { 
               type:" :: R - S :: INICIAIS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"LO",options:['LARANJA.jpg','LOCOMOTIVA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"LA",options:['LANCHE.jpg','LIVROS.jpg','LIMONADA.jpg','LUVAS.jpg'],key:0},
                     
                           {question:"LE",options:['LIMAO.jpg','LATA.jpg','LEAO.jpg','LAPIS.jpg'],key:2},
                 
                           {question:"KA",options:['KARATE.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"KI",options:['LANCHE.jpg','KIMONO.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                           
                           {question:"KO",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','KOMBI.jpg'],key:3},
                           
                           {question:"KI",options:['KIWI.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                           
                           {question:"KU",options:['LANCHE.jpg','LIVROS.jpg','KUNGFU.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"KI",options:['LANCHE.jpg','KINGKONG.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                 
                           {question:"KA",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','KARAOKE.jpg'],key:3},
                 
                           {question:"KI",options:['KINDER.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"KO",options:['LANCHE.jpg','LIVROS.jpg','KOALAS.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"KE",options:['KETCHUP.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"LA",options:['LOCOMOTIVA.jpg','LIQUIDIFICADOR.jpg','LOUSA.jpg','LAMPADA.jpg'],key:3},

                           {question:"LA",options:['LONTRA.jpg','LIMPEZA.jpg','LOUSA.jpg','LANTERNA.jpg'],key:3},

                           {question:"LA",options:['LEQUE.jpg','LESMA.jpg','LAREIRA.jpg','LEITE.jpg'],key:2},

                           {question:"LA",options:['LOBO.jpg' ,'LARANJA.jpg','LIXO.jpg','LUPA.jpg'],key:1},
                           
                           {question:"LA",options:['LAGOSTA.jpg','LUTADOR.jpg','LIXO.jpg','LUVAS.jpg'],key:0},

                           {question:"LA",options:['LEITE.jpg','LUNETAjpg','LIMPEZA.jpg','LAGO.jpg'],key:3},
                           
                           {question:"LA",options:['LOUSA.jpg','LASANHA.jpg','LOBO.jpg', 'LIMAO.jpg',],key:1},

                           {question:"LÁ",options:['LAPIS.jpg','LOUCA.jpg','LONTRA.jpg','LIMPEZA.jpg'],key:0},

                           {question:"LI",options:['LAGARTA.jpg','LARAJA.jpg','LIMPEZA.jpg','LOUSA.jpg'],key:2},

                           {question:"LA",options:['LEAO.jpg','LAGARTIXA.jpg','LIVROS.jpg','LEITURA.jpg'],key:1},

                           {question:"LE",options:['LUA.jpg','LUTADOR.jpg','LEITE.jpg','LIXO.jpg'],key:2},

                           {question:"LE",options:['LABIOS.jpg','LAPIS.jpg','LOUSA.jpg','LEOPARDO.jpg',],key:3},

                           {question:"LE ",options:['LEQUE.jpg','LOCOMOTIVA.jpg','LIVROS.jpg','LIMAO.jpg'],key:0},

                           {question:"LE",options:['LUA.jpg','LARANJA.jpg','LEOA.jpg','LAVAR.jpg',],key:2},

                           {question:"LE",options:['LENHA.jpg','LIMPEZA.jpg','LOUCA.jpg','LASANHA.jpg'],key:0},

                           {question:"LE",options:['LOBO.jpg','LONTRA.jpg','LUVAS.jpg','LEITAO.jpg'],key:3},

                           {question:"LE",options:['LIVROS.jpg','LESMA.jpg','LOUCA.jpg','LIMPEZA.jpg'],key:1},

                           {question:"LU",  options:['LIMONADA.jpg','LEITE.jpg','LUNETA.jpg','LAPIS.jpg'],key:2},                     

                           {question:"LI",options:['LEGO.jpg','LIXEIRA.jpg','LANCHE.jpg','LEQUE.jpg'],key:1},

                           {question:"LI",options:['LIMONADA.jpg','LANCHE.jpg','LUMINARIA.jpg','LABIRINTO.jpg'],key:0},

                           {question:"LI",options:['LAMPADA.jpg','LENTO.jpg','LEAO.jpg','LIQUIDIFICADOR.jpg'],key:3},

                           {question:"LI",options:['LUA.jpg','LIVROS.jpg','LUNETA.jpg','LANCHE.jpg'],key:1},
                             
                           {question:"LI",options:['LAGARTA.jpg','LEQUE.jpg','LINGUA.jpg','LENHA.jpg'],key:2},

                           {question:"LO",options:['LOUSA.jpg','LARANJA.jpg','LEAO.jpg','LIMAO.jpg'],key:0},

                           {question:"LO",options: ['LUPA.jpg','LIQUIDIFICADOR.jpg','LEAO.jpg','LOBO.jpg'],key:3},

                           {question:"LI",options:['LIMOSINE.jpg','LENHA.jpg','LOCOMOTIVA.jpg','LENTO.jpg'],key:0},

                           {question:"LO",options:['LIMAO.jpg','LONTRA.jpg','LARANJA.jpg','LANTERNA.jpg'],key:1},

                           {question:"LO",options:['LIMAO.jpg','LUPA.jpg','LUVAS.jpg','LOUCA.jpg'],key:3},

                           {question:"LO",options:['LENTO.jpg','LAGO.jpg','LOJA.jpg','LAGARTIXA.jpg'],key:2},

                           {question:"LE",options:['LABIRINTO.jpg','LUVAS.jpg','LIMPEZA.jpg','LENHADOR.jpg'],key:3},

                           {question:"LU",options:['LOUSA.jpg','LOBO.jpg','LUA.jpg','LIMPEZA.jpg'],key:2},

                           {question:"LU",options:['LUNETA.jpg','LIMPEZA.jpg','LOBO.jpg','LEGO.jpg'],key:0},

                           {question:"LU",options:['LEGO.jpg','LUTA.jpg','LANCHE.jpg','LENCO.jpg' ],key:1},

                           {question:"LU",options:['LENCO.jpg','LOBO.jpg','LUVAS.jpg','LOCOMOTIVA.jpg'],key:2},
                           
                           {question:"LA",options:['LAVANDERIA.jpg','LEITE.jpg','LIXO.jpg','LENTO.jpg'],key:0},

                           {question:"LU",options:['LIXO.jpg' ,'LATA.jpg','LAMA.jpg', 'LULA.jpg'],key:3},

                           {question:"LO",options:['LAMA.jpg','LOCOMOTIVA.jpg','LENHA.jpg','LUPA.jpg'],key:1},

                           {question:"LU",options:['LARANJA.jpg','LUPA.jpg','LIMPEZA.jpg','LAGOSTA.jpg'],key:0}

                          ]
              },
               { 
               type:" :: R - S :: PALAVRAS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"SAPO",options:['LARANJA.jpg','LOCOMOTIVA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"SAPATO",options:['LANCHE.jpg','LIVROS.jpg','LIMONADA.jpg','LUVAS.jpg'],key:0},
                     
                           {question:"SANDUICHE",options:['LIMAO.jpg','LATA.jpg','LEAO.jpg','LAPIS.jpg'],key:2},
                 
                           {question:"SORVETE",options:['KARATE.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"SUCO",options:['LANCHE.jpg','KIMONO.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                           
                           {question:"SEREIA",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','KOMBI.jpg'],key:3},
                           
                           {question:"SURFISTA",options:['KIWI.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                           
                           {question:"SETE",options:['LANCHE.jpg','LIVROS.jpg','KUNGFU.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"SEIS",options:['LANCHE.jpg','KINGKONG.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                 
                           {question:"SOFÁ",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','KARAOKE.jpg'],key:3},
                 
                           {question:"SOL",options:['KINDER.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"RADIO",options:['LANCHE.jpg','LIVROS.jpg','KOALAS.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"RAPOSA",options:['KETCHUP.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"RIO",options:['LOCOMOTIVA.jpg','LIQUIDIFICADOR.jpg','LOUSA.jpg','LAMPADA.jpg'],key:3},

                           {question:"ROBO",options:['LONTRA.jpg','LIMPEZA.jpg','LOUSA.jpg','LANTERNA.jpg'],key:3},

                           {question:"RALADOR",options:['LEQUE.jpg','LESMA.jpg','LAREIRA.jpg','LEITE.jpg'],key:2},

                           {question:"REDE",options:['LOBO.jpg' ,'LARANJA.jpg','LIXO.jpg','LUPA.jpg'],key:1},
                           
                           {question:"REI",options:['LAGOSTA.jpg','LUTADOR.jpg','LIXO.jpg','LUVAS.jpg'],key:0},

                           {question:"RAINHA",options:['LEITE.jpg','LUNETAjpg','LIMPEZA.jpg','LAGO.jpg'],key:3},
                           
                           {question:"RELÓGIO",options:['LOUSA.jpg','LASANHA.jpg','LOBO.jpg', 'LIMAO.jpg',],key:1},

                           {question:"LÁ",options:['LAPIS.jpg','LOUCA.jpg','LONTRA.jpg','LIMPEZA.jpg'],key:0},

                           {question:"LI",options:['LAGARTA.jpg','LARAJA.jpg','LIMPEZA.jpg','LOUSA.jpg'],key:2},

                           {question:"LA",options:['LEAO.jpg','LAGARTIXA.jpg','LIVROS.jpg','LEITURA.jpg'],key:1},

                           {question:"LE",options:['LUA.jpg','LUTADOR.jpg','LEITE.jpg','LIXO.jpg'],key:2},

                           {question:"LE",options:['LABIOS.jpg','LAPIS.jpg','LOUSA.jpg','LEOPARDO.jpg',],key:3},

                           {question:"LE ",options:['LEQUE.jpg','LOCOMOTIVA.jpg','LIVROS.jpg','LIMAO.jpg'],key:0},

                           {question:"LE",options:['LUA.jpg','LARANJA.jpg','LEOA.jpg','LAVAR.jpg',],key:2},

                           {question:"LE",options:['LENHA.jpg','LIMPEZA.jpg','LOUCA.jpg','LASANHA.jpg'],key:0},

                           {question:"LE",options:['LOBO.jpg','LONTRA.jpg','LUVAS.jpg','LEITAO.jpg'],key:3},

                           {question:"LE",options:['LIVROS.jpg','LESMA.jpg','LOUCA.jpg','LIMPEZA.jpg'],key:1},

                           {question:"LU",  options:['LIMONADA.jpg','LEITE.jpg','LUNETA.jpg','LAPIS.jpg'],key:2},                     

                           {question:"LI",options:['LEGO.jpg','LIXEIRA.jpg','LANCHE.jpg','LEQUE.jpg'],key:1},

                           {question:"LI",options:['LIMONADA.jpg','LANCHE.jpg','LUMINARIA.jpg','LABIRINTO.jpg'],key:0},

                           {question:"LI",options:['LAMPADA.jpg','LENTO.jpg','LEAO.jpg','LIQUIDIFICADOR.jpg'],key:3},

                           {question:"LI",options:['LUA.jpg','LIVROS.jpg','LUNETA.jpg','LANCHE.jpg'],key:1},
                             
                           {question:"LI",options:['LAGARTA.jpg','LEQUE.jpg','LINGUA.jpg','LENHA.jpg'],key:2},

                           {question:"LO",options:['LOUSA.jpg','LARANJA.jpg','LEAO.jpg','LIMAO.jpg'],key:0},

                           {question:"LO",options: ['LUPA.jpg','LIQUIDIFICADOR.jpg','LEAO.jpg','LOBO.jpg'],key:3},

                           {question:"LI",options:['LIMOSINE.jpg','LENHA.jpg','LOCOMOTIVA.jpg','LENTO.jpg'],key:0},

                           {question:"LO",options:['LIMAO.jpg','LONTRA.jpg','LARANJA.jpg','LANTERNA.jpg'],key:1},

                           {question:"LO",options:['LIMAO.jpg','LUPA.jpg','LUVAS.jpg','LOUCA.jpg'],key:3},

                           {question:"LO",options:['LENTO.jpg','LAGO.jpg','LOJA.jpg','LAGARTIXA.jpg'],key:2},

                           {question:"LE",options:['LABIRINTO.jpg','LUVAS.jpg','LIMPEZA.jpg','LENHADOR.jpg'],key:3},

                           {question:"LU",options:['LOUSA.jpg','LOBO.jpg','LUA.jpg','LIMPEZA.jpg'],key:2},

                           {question:"LU",options:['LUNETA.jpg','LIMPEZA.jpg','LOBO.jpg','LEGO.jpg'],key:0},

                           {question:"LU",options:['LEGO.jpg','LUTA.jpg','LANCHE.jpg','LENCO.jpg' ],key:1},

                           {question:"LU",options:['LENCO.jpg','LOBO.jpg','LUVAS.jpg','LOCOMOTIVA.jpg'],key:2},
                           
                           {question:"LA",options:['LAVANDERIA.jpg','LEITE.jpg','LIXO.jpg','LENTO.jpg'],key:0},

                           {question:"LU",options:['LIXO.jpg' ,'LATA.jpg','LAMA.jpg', 'LULA.jpg'],key:3},

                           {question:"LO",options:['LAMA.jpg','LOCOMOTIVA.jpg','LENHA.jpg','LUPA.jpg'],key:1},

                           {question:"LU",options:['LARANJA.jpg','LUPA.jpg','LIMPEZA.jpg','LAGOSTA.jpg'],key:0}

                          ]
              },
               { 
               type:" :: T - V :: INICIAIS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"LO",options:['LARANJA.jpg','LOCOMOTIVA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"LA",options:['LANCHE.jpg','LIVROS.jpg','LIMONADA.jpg','LUVAS.jpg'],key:0},
                     
                           {question:"LE",options:['LIMAO.jpg','LATA.jpg','LEAO.jpg','LAPIS.jpg'],key:2},
                 
                           {question:"KA",options:['KARATE.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"KI",options:['LANCHE.jpg','KIMONO.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                           
                           {question:"KO",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','KOMBI.jpg'],key:3},
                           
                           {question:"KI",options:['KIWI.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                           
                           {question:"KU",options:['LANCHE.jpg','LIVROS.jpg','KUNGFU.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"KI",options:['LANCHE.jpg','KINGKONG.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                 
                           {question:"KA",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','KARAOKE.jpg'],key:3},
                 
                           {question:"KI",options:['KINDER.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"KO",options:['LANCHE.jpg','LIVROS.jpg','KOALAS.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"KE",options:['KETCHUP.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"LA",options:['LOCOMOTIVA.jpg','LIQUIDIFICADOR.jpg','LOUSA.jpg','LAMPADA.jpg'],key:3},

                           {question:"LA",options:['LONTRA.jpg','LIMPEZA.jpg','LOUSA.jpg','LANTERNA.jpg'],key:3},

                           {question:"LA",options:['LEQUE.jpg','LESMA.jpg','LAREIRA.jpg','LEITE.jpg'],key:2},

                           {question:"LA",options:['LOBO.jpg' ,'LARANJA.jpg','LIXO.jpg','LUPA.jpg'],key:1},
                           
                           {question:"LA",options:['LAGOSTA.jpg','LUTADOR.jpg','LIXO.jpg','LUVAS.jpg'],key:0},

                           {question:"LA",options:['LEITE.jpg','LUNETAjpg','LIMPEZA.jpg','LAGO.jpg'],key:3},
                           
                           {question:"LA",options:['LOUSA.jpg','LASANHA.jpg','LOBO.jpg', 'LIMAO.jpg',],key:1},

                           {question:"LÁ",options:['LAPIS.jpg','LOUCA.jpg','LONTRA.jpg','LIMPEZA.jpg'],key:0},

                           {question:"LI",options:['LAGARTA.jpg','LARAJA.jpg','LIMPEZA.jpg','LOUSA.jpg'],key:2},

                           {question:"LA",options:['LEAO.jpg','LAGARTIXA.jpg','LIVROS.jpg','LEITURA.jpg'],key:1},

                           {question:"LE",options:['LUA.jpg','LUTADOR.jpg','LEITE.jpg','LIXO.jpg'],key:2},

                           {question:"LE",options:['LABIOS.jpg','LAPIS.jpg','LOUSA.jpg','LEOPARDO.jpg',],key:3},

                           {question:"LE ",options:['LEQUE.jpg','LOCOMOTIVA.jpg','LIVROS.jpg','LIMAO.jpg'],key:0},

                           {question:"LE",options:['LUA.jpg','LARANJA.jpg','LEOA.jpg','LAVAR.jpg',],key:2},

                           {question:"LE",options:['LENHA.jpg','LIMPEZA.jpg','LOUCA.jpg','LASANHA.jpg'],key:0},

                           {question:"LE",options:['LOBO.jpg','LONTRA.jpg','LUVAS.jpg','LEITAO.jpg'],key:3},

                           {question:"LE",options:['LIVROS.jpg','LESMA.jpg','LOUCA.jpg','LIMPEZA.jpg'],key:1},

                           {question:"LU",  options:['LIMONADA.jpg','LEITE.jpg','LUNETA.jpg','LAPIS.jpg'],key:2},                     

                           {question:"LI",options:['LEGO.jpg','LIXEIRA.jpg','LANCHE.jpg','LEQUE.jpg'],key:1},

                           {question:"LI",options:['LIMONADA.jpg','LANCHE.jpg','LUMINARIA.jpg','LABIRINTO.jpg'],key:0},

                           {question:"LI",options:['LAMPADA.jpg','LENTO.jpg','LEAO.jpg','LIQUIDIFICADOR.jpg'],key:3},

                           {question:"LI",options:['LUA.jpg','LIVROS.jpg','LUNETA.jpg','LANCHE.jpg'],key:1},
                             
                           {question:"LI",options:['LAGARTA.jpg','LEQUE.jpg','LINGUA.jpg','LENHA.jpg'],key:2},

                           {question:"LO",options:['LOUSA.jpg','LARANJA.jpg','LEAO.jpg','LIMAO.jpg'],key:0},

                           {question:"LO",options: ['LUPA.jpg','LIQUIDIFICADOR.jpg','LEAO.jpg','LOBO.jpg'],key:3},

                           {question:"LI",options:['LIMOSINE.jpg','LENHA.jpg','LOCOMOTIVA.jpg','LENTO.jpg'],key:0},

                           {question:"LO",options:['LIMAO.jpg','LONTRA.jpg','LARANJA.jpg','LANTERNA.jpg'],key:1},

                           {question:"LO",options:['LIMAO.jpg','LUPA.jpg','LUVAS.jpg','LOUCA.jpg'],key:3},

                           {question:"LO",options:['LENTO.jpg','LAGO.jpg','LOJA.jpg','LAGARTIXA.jpg'],key:2},

                           {question:"LE",options:['LABIRINTO.jpg','LUVAS.jpg','LIMPEZA.jpg','LENHADOR.jpg'],key:3},

                           {question:"LU",options:['LOUSA.jpg','LOBO.jpg','LUA.jpg','LIMPEZA.jpg'],key:2},

                           {question:"LU",options:['LUNETA.jpg','LIMPEZA.jpg','LOBO.jpg','LEGO.jpg'],key:0},

                           {question:"LU",options:['LEGO.jpg','LUTA.jpg','LANCHE.jpg','LENCO.jpg' ],key:1},

                           {question:"LU",options:['LENCO.jpg','LOBO.jpg','LUVAS.jpg','LOCOMOTIVA.jpg'],key:2},
                           
                           {question:"LA",options:['LAVANDERIA.jpg','LEITE.jpg','LIXO.jpg','LENTO.jpg'],key:0},

                           {question:"LU",options:['LIXO.jpg' ,'LATA.jpg','LAMA.jpg', 'LULA.jpg'],key:3},

                           {question:"LO",options:['LAMA.jpg','LOCOMOTIVA.jpg','LENHA.jpg','LUPA.jpg'],key:1},

                           {question:"LU",options:['LARANJA.jpg','LUPA.jpg','LIMPEZA.jpg','LAGOSTA.jpg'],key:0}

                          ]
              },
              { 
               type:" :: T - V :: PALAVRAS ",
               msg:" ",
               path:"images/vogais",
               structure:[
                           {question:"TOMATE",options:['LARANJA.jpg','LOCOMOTIVA.jpg','LEAO.jpg','LAMPADA.jpg'],key:1},
                          
                           {question:"TATU",options:['LANCHE.jpg','LIVROS.jpg','LIMONADA.jpg','LUVAS.jpg'],key:0},
                     
                           {question:"TENIS",options:['LIMAO.jpg','LATA.jpg','LEAO.jpg','LAPIS.jpg'],key:2},
                 
                           {question:"TAPETE",options:['KARATE.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"TELEVISÃO",options:['LANCHE.jpg','KIMONO.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                           
                           {question:"TORTA",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','KOMBI.jpg'],key:3},
                           
                           {question:"TIGRE",options:['KIWI.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                           
                           {question:"TOMADA",options:['LANCHE.jpg','LIVROS.jpg','KUNGFU.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"VENTILADOR",options:['LANCHE.jpg','KINGKONG.jpg','LANTERNA.jpg','LUVAS.jpg'],key:1},
                 
                           {question:"VACA",options:['LANCHE.jpg','LIVROS.jpg','LANTERNA.jpg','KARAOKE.jpg'],key:3},
                 
                           {question:"VERÃO",options:['KINDER.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"VOLEI",options:['LANCHE.jpg','LIVROS.jpg','KOALAS.jpg','LUVAS.jpg'],key:2},
                 
                           {question:"VULCÃO",options:['KETCHUP.jpg','LIVROS.jpg','LANTERNA.jpg','LUVAS.jpg'],key:0},
                 
                           {question:"VAMPIRO",options:['LOCOMOTIVA.jpg','LIQUIDIFICADOR.jpg','LOUSA.jpg','LAMPADA.jpg'],key:3},

                           {question:"VIDRO",options:['LONTRA.jpg','LIMPEZA.jpg','LOUSA.jpg','LANTERNA.jpg'],key:3},

                           {question:"VERMELHO",options:['LEQUE.jpg','LESMA.jpg','LAREIRA.jpg','LEITE.jpg'],key:2},

                           {question:"TINTA",options:['LOBO.jpg' ,'LARANJA.jpg','LIXO.jpg','LUPA.jpg'],key:1},
                           
                           {question:"LA",options:['LAGOSTA.jpg','LUTADOR.jpg','LIXO.jpg','LUVAS.jpg'],key:0},

                           {question:"LA",options:['LEITE.jpg','LUNETAjpg','LIMPEZA.jpg','LAGO.jpg'],key:3},
                           
                           {question:"LA",options:['LOUSA.jpg','LASANHA.jpg','LOBO.jpg', 'LIMAO.jpg',],key:1},

                           {question:"LÁ",options:['LAPIS.jpg','LOUCA.jpg','LONTRA.jpg','LIMPEZA.jpg'],key:0},

                           {question:"LI",options:['LAGARTA.jpg','LARAJA.jpg','LIMPEZA.jpg','LOUSA.jpg'],key:2},

                           {question:"LA",options:['LEAO.jpg','LAGARTIXA.jpg','LIVROS.jpg','LEITURA.jpg'],key:1},

                           {question:"LE",options:['LUA.jpg','LUTADOR.jpg','LEITE.jpg','LIXO.jpg'],key:2},

                           {question:"LE",options:['LABIOS.jpg','LAPIS.jpg','LOUSA.jpg','LEOPARDO.jpg',],key:3},

                           {question:"LE ",options:['LEQUE.jpg','LOCOMOTIVA.jpg','LIVROS.jpg','LIMAO.jpg'],key:0},

                           {question:"LE",options:['LUA.jpg','LARANJA.jpg','LEOA.jpg','LAVAR.jpg',],key:2},

                           {question:"LE",options:['LENHA.jpg','LIMPEZA.jpg','LOUCA.jpg','LASANHA.jpg'],key:0},

                           {question:"LE",options:['LOBO.jpg','LONTRA.jpg','LUVAS.jpg','LEITAO.jpg'],key:3},

                           {question:"LE",options:['LIVROS.jpg','LESMA.jpg','LOUCA.jpg','LIMPEZA.jpg'],key:1},

                           {question:"LU",  options:['LIMONADA.jpg','LEITE.jpg','LUNETA.jpg','LAPIS.jpg'],key:2},                     

                           {question:"LI",options:['LEGO.jpg','LIXEIRA.jpg','LANCHE.jpg','LEQUE.jpg'],key:1},

                           {question:"LI",options:['LIMONADA.jpg','LANCHE.jpg','LUMINARIA.jpg','LABIRINTO.jpg'],key:0},

                           {question:"LI",options:['LAMPADA.jpg','LENTO.jpg','LEAO.jpg','LIQUIDIFICADOR.jpg'],key:3},

                           {question:"LI",options:['LUA.jpg','LIVROS.jpg','LUNETA.jpg','LANCHE.jpg'],key:1},
                             
                           {question:"LI",options:['LAGARTA.jpg','LEQUE.jpg','LINGUA.jpg','LENHA.jpg'],key:2},

                           {question:"LO",options:['LOUSA.jpg','LARANJA.jpg','LEAO.jpg','LIMAO.jpg'],key:0},

                           {question:"LO",options: ['LUPA.jpg','LIQUIDIFICADOR.jpg','LEAO.jpg','LOBO.jpg'],key:3},

                           {question:"LI",options:['LIMOSINE.jpg','LENHA.jpg','LOCOMOTIVA.jpg','LENTO.jpg'],key:0},

                           {question:"LO",options:['LIMAO.jpg','LONTRA.jpg','LARANJA.jpg','LANTERNA.jpg'],key:1},

                           {question:"LO",options:['LIMAO.jpg','LUPA.jpg','LUVAS.jpg','LOUCA.jpg'],key:3},

                           {question:"LO",options:['LENTO.jpg','LAGO.jpg','LOJA.jpg','LAGARTIXA.jpg'],key:2},

                           {question:"LE",options:['LABIRINTO.jpg','LUVAS.jpg','LIMPEZA.jpg','LENHADOR.jpg'],key:3},

                           {question:"LU",options:['LOUSA.jpg','LOBO.jpg','LUA.jpg','LIMPEZA.jpg'],key:2},

                           {question:"LU",options:['LUNETA.jpg','LIMPEZA.jpg','LOBO.jpg','LEGO.jpg'],key:0},

                           {question:"LU",options:['LEGO.jpg','LUTA.jpg','LANCHE.jpg','LENCO.jpg' ],key:1},

                           {question:"LU",options:['LENCO.jpg','LOBO.jpg','LUVAS.jpg','LOCOMOTIVA.jpg'],key:2},
                           
                           {question:"LA",options:['LAVANDERIA.jpg','LEITE.jpg','LIXO.jpg','LENTO.jpg'],key:0},

                           {question:"LU",options:['LIXO.jpg' ,'LATA.jpg','LAMA.jpg', 'LULA.jpg'],key:3},

                           {question:"LO",options:['LAMA.jpg','LOCOMOTIVA.jpg','LENHA.jpg','LUPA.jpg'],key:1},

                           {question:"LU",options:['LARANJA.jpg','LUPA.jpg','LIMPEZA.jpg','LAGOSTA.jpg'],key:0}

                          ]
              }
     
     
     
     

    ] 



     // create select element
     const select=document.createElement("select");
           select.setAttribute("onchange","load(this)") 
      for (let j=0;j<myApp.length;j++){
          const option=document.createElement("option");
                option.value=j;
                option.innerHTML=myApp[j].type;
                select.appendChild(option)
      }
     document.querySelector(".quiz-box").appendChild(select)

     //create class
     class App{
           constructor(myApp,container){
                this.app=myApp;
                this.container=container;
                this.index=0;
                this.score=0;
                this.quizSize=this.app.structure.length
                this.optionSize=this.app.structure[0].options.length;
                this.msgEle=this.container.querySelector(".msg"); 
                this.quizEle=this.container.querySelector(".quiz")
                this.optionEle=this.container.querySelector(".option-box");
                this.questionNumber=this.container.querySelector(".question-number");
                this.scoreEle=this.container.querySelector(".score-board"); 
                this.setQuestion();
                this.setOptions();
                this.scoreBoard();

           }

           setQuestion(){ 
               this.msgEle.innerHTML=this.app.msg;
               this.quizEle.innerHTML=this.app.structure[this.index].question;
               this.questionNumber.innerHTML=(this.index+1)+"/"+this.quizSize;
         }

           setOptions(){
                this.optionEle.innerHTML="";
                for(let i=0; i<this.optionSize; i++){
                  const button=document.createElement("button")
                        button.type="button";
                        button.id=i;
                  const img=document.createElement("img");
                        img.src=this.app.path+"/"+this.app.structure[this.index].options[i];
                        button.appendChild(img)
                    this.optionEle.appendChild(button)     
                }
                this.optionClick();

                
                
                
              

           }

           scoreBoard(){
              this.scoreEle.innerHTML=this.score;
           }

           optionClick(){
               const that=this;
               var options=this.optionEle.children;
               for (let i=0; i<options.length; i++) {
                   options[i].addEventListener("click",function(){
                      const span=document.createElement("span");
                     if(this.id==that.app.structure[that.index].key){
                         span.innerHTML="  =D  ";
                         this.classList.add("correta");
                         that.score++;
                         that.scoreBoard();
                      }
                      else{
                          span.innerHTML="  =(  ";
                          this.classList.add("errada");
                      }
                      this.appendChild(span);

                      
                     for (let j=0; j<that.optionEle.children.length; j++) {
                         
                          if(this.id==that.optionEle.children[j].id) {

                          }
                           // you can also show the correct answer when you click on wrong option
                           else if (that.optionEle.children[j].id==that.app.structure[that.index].key){
                                var span2=document.createElement("span")
                                span2.innerHTML=" =P ";
                                that.optionEle.children[j].appendChild(span2)
                               that.optionEle.children[j].classList.add("correta");
                          }
                          else{
                               that.optionEle.children[j].classList.add("hide"); 

                          }
                    
                    }
                    this.style.pointerEvents="none";
                    that.index++;
                    if(that.index>that.quizSize-1){
                        setTimeout(function(){
                          that.quizOver();
                        },2000);
                        that.quizOver();
                    }
                    else{
                    // next quiz update
                    setTimeout(function(){
                      that.setQuestion()
                      that.setOptions()
                    },2000)
                    }

                    })

                }

           }
           
           
           
           quizOver(){

              this.msgEle.innerHTML="";
              this.quizEle.innerHTML="";
              if (this.score > this.quizSize/2){
              this.optionEle.innerHTML="<h1><img src='images/over.png'/><br> </h1>";

              }
              else{
                this.optionEle.innerHTML="<h1><img src='images/game.png'/><br> </h1>";
           
  
            

              }
               
             
           //Confetti começa aqui
             var confetti={maxCount:150,speed:2,frameInterval:15,alpha:1,gradient:!1,start:null,stop:null,toggle:null,pause:null,resume:null,togglePause:null,remove:null,isPaused:null,isRunning:null};
             !function(){confetti.start=s,confetti.stop=w,confetti.toggle=function(){e?w():s()},confetti.pause=u,confetti.resume=m,confetti.togglePause=function(){i?m():u()},confetti.isPaused=function(){return i},confetti.remove=function(){stop(),i=!1,a=[]},confetti.isRunning=function(){return e};
             var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame,n=["rgba(30,144,255,","rgba(107,142,35,","rgba(255,215,0,","rgba(255,192,203,","rgba(106,90,205,","rgba(173,216,230,","rgba(238,130,238,","rgba(152,251,152,","rgba(70,130,180,","rgba(244,164,96,","rgba(210,105,30,","rgba(220,20,60,"],e=!1,i=!1,o=Date.now(),a=[],r=0,l=null;
             function d(t,e,i){return t.color=n[Math.random()*n.length|0]+(confetti.alpha+")"),t.color2=n[Math.random()*n.length|0]+(confetti.alpha+")"),t.x=Math.random()*e,t.y=Math.random()*i-i,t.diameter=10*Math.random()+5,t.tilt=10*Math.random()-10,t.tiltAngleIncrement=.07*Math.random()+.05,t.tiltAngle=Math.random()*Math.PI,t}function u(){i=!0}function m(){i=!1,c()}function c(){if(!i)if(0===a.length)l.clearRect(0,0,window.innerWidth,window.innerHeight),null;else{var n=Date.now(),u=n-o;
             (!t||u>confetti.frameInterval)&&(l.clearRect(0,0,window.innerWidth,window.innerHeight),function(){var t,n=window.innerWidth,i=window.innerHeight;r+=.01;
             for(var o=0;o<a.length;o++)t=a[o],!e&&t.y<-15?t.y=i+100:(t.tiltAngle+=t.tiltAngleIncrement,t.x+=Math.sin(r)-.5,t.y+=.5*(Math.cos(r)+t.diameter+confetti.speed),t.tilt=15*Math.sin(t.tiltAngle)),(t.x>n+20||t.x<-20||t.y>i)&&(e&&a.length<=confetti.maxCount?d(t,n,i):(a.splice(o,1),o--))}(),function(t){for(var n,e,i,o,r=0;r<a.length;r++){if(n=a[r],t.beginPath(),t.lineWidth=n.diameter,i=n.x+n.tilt,e=i+n.diameter/2,o=n.y+n.tilt+n.diameter/2,confetti.gradient){var l=t.createLinearGradient(e,n.y,i,o);l.addColorStop("0",n.color),l.addColorStop("1.0",n.color2),t.strokeStyle=l}else t.strokeStyle=n.color;
             t.moveTo(e,n.y),t.lineTo(i,o),t.stroke()}}(l),o=n-u%confetti.frameInterval),requestAnimationFrame(c)}}function s(t,n,o){var r=window.innerWidth,u=window.innerHeight;window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t){return window.setTimeout(t,confetti.frameInterval)};
             var m=document.getElementById("confetti-canvas");
             null===m?((m=document.createElement("canvas")).setAttribute("id","confetti-canvas"),m.setAttribute("style","display:block;z-index:999999;pointer-events:none;position:fixed;top:0"),document.body.prepend(m),m.width=r,m.height=u,window.addEventListener("resize",function(){m.width=window.innerWidth,m.height=window.innerHeight},!0),l=m.getContext("2d")):null===l&&(l=m.getContext("2d"));
             var s=confetti.maxCount;
             if(n)if(o)if(n==o)s=a.length+o;
             else{if(n>o){var f=n;
             n=o,o=f}s=a.length+(Math.random()*(o-n)+n|0)}else s=a.length+n;
             else o&&(s=a.length+o);
             for(;a.length<s;)a.push(d({},r,u));
             e=!0,i=!1,c(),t&&window.setTimeout(w,t)}function w(){e=!1}}();
              
       
       
// custom js        
  const startit = () => {
   setTimeout(function() {
    confetti.start();
   },1000);
  };
 // Stops
   const stopit = () => {
       setTimeout(function(){
         confetti.stop();
       }, 5000);
     };
     //playing start
     startit();
     //stoping it
     stopit();
              
       
           
       }


      //28-06-2021 - 2 Tentativa - SUMIU TUDO
      
 
     }
    // add 28 - 06 - 2021 - APARECEU DESTE A PRIMEIRA PÁGINA
      

       // create object without onchange of select
       const app1=new App(myApp[0],container) 
            
      function load(ele) {
        const app1=new App(myApp[ele.value],container)
      }




     

   
   
 



      

     



  
   
   
 


