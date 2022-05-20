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