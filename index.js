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
        return [...listaDeContratos, acao.payload.nome]
    if(acao.type === "CANCELAR_CONTRATO"){
        var listaDeContratosAlterada = listaDeContratos.filter((e) => { e === acao.valor.nome?false:true })
        return listaDeContratosAlterada
    }
    return listaDeContratos
}