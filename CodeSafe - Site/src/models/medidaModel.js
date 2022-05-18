var database = require("../database/config");

function buscarUltimasMedidas(idServidor,limite_linhas) {
    instrucaoSql = `select top (${limite_linhas})
                        DATE_FORMAT(momento,'%H:%i:%s') as dataHorario
                        consumo, 
                        total, 
                        percentualConsumo,
                        from historico
                        JOIN componente ON fkComponente = idHistorico
                        where fkComponente = ${idServidor}
                        order by id desc`;
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

// function buscarMedidasEmTempoReal(idServidor) {
//     instrucaoSql = `select temperatura, 
//                             umidade, 
//                             DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico, 
//                             fk_aquario 
//                             from medida where fk_aquario = ${idServidor} 
//                     order by id desc limit 1`;
                    
//     console.log("Executando a instrução SQL: \n"+instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function buscarMedidasEmTempoReal(idServidor) {
instrucaoSql = `select top (${limite_linhas})
                        DATE_FORMAT(momento,'%H:%i:%s') as dataHorario
                        consumo, 
                        total, 
                        percentualConsumo,
                        from historico
                        JOIN componente ON fkComponente = idHistorico
                        where fkComponente = ${idServidor}
                        order by id desc`;
    console.log("Executando a instrução SQL: \n"+instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal
}