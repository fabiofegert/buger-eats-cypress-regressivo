var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default{

    deliver: function(){

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11983838383',
            address: {
                postalcode: '02552040',
                street: 'Rua Elias Gannam',
                number: '561',
                details: 'b',
                district: 'Vila Bandeirantes',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh teste.png'
        }
        return data
    }
}