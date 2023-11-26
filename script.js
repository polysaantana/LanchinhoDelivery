let lancheEscolhido
let precoDoLanche
let bebidaEscolhida
let precoDaBebida
let sobremesaEscolhida
let precoDaSobremesa
contador = 0

/*-------------função escolha lanche--------------------*/
function escolherLanche( lanche , valorDoLanche) {
    lancheEscolhido = lanche
    precoDoLanche = valorDoLanche
    
    
    const selecionado = document.querySelector (".card-lanche .selecionado");
    
    if (selecionado !=null){
       selecionado.classList.remove("selecionado");
    }
    const seletor = "." + lanche;
    
    const cardSelecionado = document.querySelector (seletor);
    
    if (cardSelecionado !=null){
        cardSelecionado.classList.add("selecionado");
        lancheEscolhido = lanche;
    
    contador ++
    habilitarBotao()
    console.log(contador);
    }
    }
/*-------------função escolha drink--------------------*/

function escolherBebida( bebida , valorDaBebida) {
    bebidaEscolhida = bebida
    precoDaBebida = valorDaBebida
    
    
    const selecionado = document.querySelector (".card-drink .selecionado");
    
    if (selecionado !=null){
       selecionado.classList.remove("selecionado");
    }
    const seletor = "." + bebida;
    
    const cardSelecionado = document.querySelector (seletor);
    
    if (cardSelecionado !=null){
        cardSelecionado.classList.add("selecionado");
        bebidaEscolhida = bebida;
    
    contador ++
    habilitarBotao()
    console.log(contador);
    }
    }

    /*-------------função escolha sobrema--------------------*/

function escolherSobremesa( sobremesa , valorDaSobremesa) {
    sobremesaEscolhida = sobremesa
    precoDaSobremesa = valorDaSobremesa
        
    const selecionado = document.querySelector (".card-dessert .selecionado");
    
    if (selecionado !=null){
       selecionado.classList.remove("selecionado");
    }
    const seletor = "." + sobremesa;
    
    const cardSelecionado = document.querySelector (seletor);
    
    if (cardSelecionado !=null){
        cardSelecionado.classList.add("selecionado");
        sobremesaEscolhida = sobremesa;
    
    contador ++ 
    habilitarBotao()
    console.log(contador);
    }
    }

  /*-------------função escolha sobremesa--------------------*/  
    function habilitarBotao() {
        if (contador === 3) {
          let botaoSelecionar = document.querySelector(".button");
          botaoSelecionar.classList.add("habilitado");
          botaoSelecionar.style.backgroundColor = "green";
        botaoSelecionar.innerHTML = "<span class='finalizar-pedido'>Finalizar Pedido</span>";
  }
        }
/*-------------função Resumo--------------------*/  
    function resumo() {
        let botaoSelecionar = document.querySelector(".button");
        if (botaoSelecionar.classList.contains("habilitado")) {
            let mensagem = `Humm... parabéns pelo pedido, foi uma ótima escolha!
              O sanduíche que você escolheu foi ${lancheEscolhido},
              A bebida escolhida foi ${bebidaEscolhida},
              E a sobremesa foi ${sobremesaEscolhida}.`;
              alert(mensagem);
              let nomeCompleto = prompt("Informe seu nome completo:");
              let endereco = prompt("Informe seu endereço completo com ponto de referência:");
              alert(`Estamos quase finalizando, agora confirme seus dados:
              
              Nome: ${nomeCompleto},
              Endereço: ${endereco}.`);
              
              alert("Agora sim, pedido realizado! Seu lanchinho ficará pronto em no máximo 12 min.");
              
              // Cálculo do valor total
              let precoTotal = (parseFloat(precoDoLanche) + parseFloat(precoDaBebida) + parseFloat(precoDaSobremesa)).toFixed(2);
            
              //Mensagem no WhatsApp
              const phone = "5562981295227";
              const recado = `Olá, gostaria de fazer o pedido:\n- Sanduíche: ${lancheEscolhido}\n- Bebida: ${bebidaEscolhida}\n- Sobremesa: ${sobremesaEscolhida}\n- Total: ${precoTotal}\n\n${nomeCompleto}\n${endereco}`;
              const mensagemEncoded = encodeURIComponent(recado);
              const url = `https://api.whatsapp.com/send?phone=${phone}&text=${mensagemEncoded}`;
              window.open(url);  
            }
          }