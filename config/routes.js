const express = require('express')
const routes = express.Router()


let db = [
    { '1':{Pagina: '0'}},
    { '2':{tamanho:'2'}},
    { '3':{numeroRegistros:'3'}},
    { '4':{id: '1', nome: 'João da Silva', dataNascimento: '2000-01-01', cpf: '123.456.789/00', ativo: 'true', meta: '1000'}},
    { '5':{id: '2', nome: 'Maria da Silva', dataNascimento: '1998-01-01', cpf: '987.654.321/00', ativo: 'true', meta: '1000'}},
    { '6':{id: '3', nome: 'José da Silva', dataNascimento: '2010-09-27', cpf: 'null', ativo: 'false', meta: '0.5'}}

]

let db0 = [

    { '':{id: '1', nome: 'João da Silva', dataNascimento: '2000-01-01', cpf: '123.456.789/00', ativo: 'true', meta: '1000'}},

]


let db1 = [

    { '1':{Pagina: '0'}},
    { '2':{tamanho:'10'}},
    { '3':{numeroRegistros:'2'}},
    { '4':{id: '1', pessoaId: '1', data: '2021-01-12', valor: '1100.99'}},
    { '5':{id: '2', pessoaId: '2', data: '2021-02-15', valor: '2500'}},

]

let db2 = [

    { '1':{id: '1', pessoaId: '1', data: '2021-01-12', valor: '1100.99'}},
  

]

let db3 = [

    { '1':{Valor: '2500.25'}},
  

]

// Listas todas Pessoas
routes.get("/ListaTodasPessoas", (req, res) =>{
    return res.json(db)
   });

// Lista Pessoa Especifica
   routes.get("/ListaPessoaEspecifica/1", (req, res) =>{
    return res.json(db0)
   });

// Lista Pessoa Não Encontrada
routes.get("/ListaPessoaEspecifica/27", (req, res) =>{
    return res.json(

        {
          "codigoErro": 1,
          "mensagemErro": "O registro 27 não foi encontrado"
        }
        
        )
   });

   // Cadastrar Pessoa
   routes.post("/CadastraPessoa", (req, res) =>{
    
    const body = req.body

    if(!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)


   });


    // Cadastrar Pessoa CPF Invalido
    routes.post("/CadastraPessoaCPFInvalido", (req, res) =>{
        return res.json(
     
        {
            "codigoErro": 2,
            "mensagemErro": "O cpf informado não é valido"
          }
        ) 
         
     });


 // Edita Uma Pessoa
 routes.put("/EditarPessoa", (req, res) =>{
    const body = req.body

    if(!body)
    return res.status(400).end()

    db.push(body)
    return res.json(body)

   });


// Listas de Receitas
routes.get("/ListaTodasReceitas", (req, res) =>{
    return res.json(db1)
   });

   // Listas de Receita Especifica
routes.get("/ListaReceitaEspecifica/1", (req, res) =>{
    return res.json(db2)
   });

   // Receita especifica Não Encontrada
routes.get("/ListaReceita/25", (req, res) =>{
    return res.json(
        {
    "codigoErro": 1,
    "mensagemErro": "O registro 15 não foi encontrado"
     }
  
   )
   });


    // Cadastrar Uma Receita
    routes.post("/CadastraReceita", (req, res) =>{
    
        const body = req.body
    
        if(!body)
        return res.status(400).end()
    
        db1.push(body)
        return res.json(body)
    
       });

        // Cadastrar Receita Valor Negativo
    routes.post("/CadastraReceitaNegativa", (req, res) =>{
        return res.json(
    {
    "codigoErro": 3,
    "mensagemErro": "O campo valor não pode ser negativo"
  }
        ) 
         
     });


      // Editar Uma Receita
    routes.put("/EditarReceita", (req, res) =>{
    
        const body = req.body
    
        if(!body)
        return res.status(400).end()
    
        db1.push(body)
        return res.json(body)
    
       });


        // Editar Uma Receita Não Encontrada
    routes.put("/EditarReceita/NaoEncontrada", (req, res) =>{
    
        return res.json(
            {
                "codigoErro": 1,
                "mensagemErro": "O registro 15 não foi encontrado"
          }
                ) 
                 
             });


      // Deletar Uma Receita
      routes.delete("/deletarReceita/1", (req, res) =>{
        const id = req.params.id
        let newDB = db1.filter(item =>{
            if(!item[id])
            return item
        })

        db = newDB
        return res.send(newDB)
                 
             });

        // Totalizadores
    routes.get("/totalizadores", (req, res) =>{
     return res.json(db3)
   });


module.exports = routes
