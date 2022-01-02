const container=document.querySelector(".app");

const myApp=[
              { 
               type:"VOGAIS | INICIAIS",
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
                   type:"VOGAIS | PALAVRAS",
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




     

   
   
 



      

     



  
   
   
 


