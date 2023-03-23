const jsonContatos = require('./contatos.js')

const getTelefone = (telefone) => {

    let PerfilJSON = {}
    let status = false

    jsonContatos.contatos["whats-users"].forEach(contatosDados => {
        if (contatosDados.number == telefone) {
            PerfilJSON = contatosDados.contacts
            status = true
        }
    })

    if (status == true) {
        return PerfilJSON
    } else {
        return status
    }
    
}

module.exports = {
    getTelefone
}