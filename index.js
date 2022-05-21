const Redux = require ('redux')
const {createStore, combineReducers} = Redux

const criarContrato = (nome,valor) => {
    return ({
        type: "CRIAR_CONTRATO",
        payload: {
            nome, valor
        }
    })
}

function cancelarContrato (nome){
    return ({
        type: "CANCELAR_CONTRATO",
        payload: {
            nome
        }
    })
}

const solicitarCashback = (nome, valor) => {
    return ({
        type: "SOLICITAR_CASHBACK",
        payload: {
            nome, valor
        }
    })
}

const historicoDePedidosCashbackReducer = (historicoDePedidosCashback = [], acao) => {
    if(acao.type === "SOLICITAR_CASHBACK"){
        return [
            ...historicoDePedidosCashback, acao.payload
        ]
    }

    return historicoDePedidosCashback
} 

const manipularCaixaReducer = (valorEmCaixa = 0, acao) => {
    if(acao.type === "CRIAR_CONTRATO"){
        return valorEmCaixa + acao.payload.valor
    } else if(acao.type === "SOLICITAR_CASHBACK"){
        return valorEmCaixa - acao.payload.valor
    }
    return valorEmCaixa
}

const listaDeContratosReducer = (listaDeContratos = [], acao) => {
    if(acao.type === "CRIAR_CONTRATO")
        return [...listaDeContratos, acao.payload]
    if(acao.type === "CANCELAR_CONTRATO"){
        var listaDeContratosAlterada = listaDeContratos.filter((e) => { e === acao.nome?false:true })
        return listaDeContratosAlterada
    }
    return listaDeContratos
}

const todosOsReducers = combineReducers({
    historicoDePedidosCashbackReducer, 
    manipularCaixaReducer,
    listaDeContratosReducer
})

const store = createStore(todosOsReducers)

//criar um contrato para o jose
const acaoContratoJose = criarContrato('Jose', 50)
store.dispatch(acaoContratoJose)
console.log("Estado centralizado: " + store.getState())

//criar um contrato para a maria
const acaoContratoMaria = criarContrato('Maria', 50)
store.dispatch(acaoContratoMaria)
console.log("Estado centralizado: " + store.getState())

//pedido de cashback para jose de 10
const acaoCashbackJose = solicitarCashback("Jose", 10)
store.dispatch(acaoCashbackJose)
console.log("Estado centralizado: " + store.getState())

//pedido de cashback para maria de 20
const acaoCashbackMaria = solicitarCashback("Maria", 20)
store.dispatch(acaoCashbackMaria)
console.log("Estado centralizado: " + store.getState())

//cancelar o contrato da maria
const acaoCancelarContratoMaria = cancelarContrato("Maria")
store.dispatch(acaoCancelarContratoMaria)
console.log("Estado centralizado: " + store.getState())