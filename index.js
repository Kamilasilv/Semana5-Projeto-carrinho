const produtos = require('./database.js')
const read = require('readline-sync')
const carrinho = []
const hoje = new Date()
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
const dataHoje = hoje.toLocaleDateString('pt-BR', options)

console.log('=================================================')
console.log('      Projeto Carrinho de Compras          ')
console.log('              Kamila Silva            ')
console.log('=================================================')
console.log(        'Bem-vinde ao Supermercado!'    )

const categoriaProduto = read.question ('Deseja visualizar os produtos por categoria? (S / N) :' )
console.log('---------------------------------------------------------')
if (categoriaProduto.toLocaleUpperCase() =='S'){
    console.log('Essas são as categorias dos nossos produtos:')
    console.log('Alimento, Bebida, Casa, Higiene, Informatica')
    console.log('------------------------------------------')

    const qualCategoria = read.question ('Qual categoria voce deseja escolher?')
    console.log('-------------------------------------------------------------')

    const escolhaCategoria = produtos.filter(produto => produto.categoria === qualCategoria)
    console.table(escolhaCategoria)

} else if(categoriaProduto.toLocaleUpperCase() =='N'){
    console.log('-----------------------------------------')
    console.log('Esses são todos os nossos produtos e categorias disponíveis:')
    console.log('------------------------------------------')
    produtos.sort((a,b) => a.preço - b.preço)
    console.table(produtos)
} 
const array = new Array()

class pedido{
    constructor(array){
        this.productor = array
        this.subTotal = 0
        this.valorTotal = 0
        this.totalItens = 0

    }
}

console.log('--------------------------------------------------------------')
const compras = () => {
    receberId = parseInt(read.question ('Digite o ID do produto que voce deseja: '))

    for(i=0; 1< 1000; i++){
        produtoId = produtos.find(item => item.id == receberId)
             if(produtoId){
                break;
            } else{
                receberId = parseInt(read.question ( 'Insira um ID valido!'))
            }       
    }
receberQuant = parseInt(read.question ('Digite a quantidade que deseja do produto escolhido:'))
for( i=0; 1< 1000; i++){
    if(receberQuant >0){
        console.log('Produto adicionado ao carrinho!')
        console.log('------------------------------------')
            break
    }else{
        receberQuant = parseInt(read.question ('Insira uma quantidade valida!'))
    }
}

    const produtosCarrinho = {...produtoId, quantidade: receberQuant}
    carrinho.push(produtosCarrinho)

    const  continuarCompra = read.question('Deseja continuar comprando? (S / N)')
    const continuarCompraformato = continuarCompra.toUpperCase()

    if(continuarCompraformato == 'N'){
        console.log(            'Pedido finalizado!'        )
        console.log('--------------------------------------')
        cupom = parseInt(read.question('Digite o valor do desconto: '))
        console.log(`Voce possui ${cupom}% de desconto`)
        }else{ 
            compras()
        } 
        for( i=0; i <1000; i++){
            if(cupom >15 || cupom < 0){
                cupom = parseInt(read.question('Desculpe, cupom invalido! '))
            }else{
                break;
            }
        }
    }
    compras()
    class Order {
        constructor(carrinho){
            this.newProducts = carrinho
            this.subTotal = 0
        }
        calcSubTotal(){
            this.subTotal = this.newProducts.reduce((acumulador,item) => acumulador +(item.preço*item.quantidade),0)
        }
    }

    const order = new Order(carrinho)
    console.table(order.newProducts)
    order.calcSubTotal()
    console.log(`Subtotal do pedido R$ ${order.subTotal.toFixed(2)}`) 
    const desconto = order.subTotal * (cupom/100)
    console.log(`Valor do desconto: R$ ${desconto.toFixed(2)}`)
    console.log('-----------------------------------------------')

    console.log(`Seu pedido tem ${receberQuant} itens.`)
    const totalCompra = order.subTotal - desconto
    console.log(`Total a ser pago R$ ${totalCompra.toFixed(2)}`)
    console.log('-------------------------------------------------')
    console.log(       `Pedido finalizado em ${dataHoje}. `        )
    console.log(         'Obrigade por Comprar conosco!'           )
    console.log('-------------------------------------------------')