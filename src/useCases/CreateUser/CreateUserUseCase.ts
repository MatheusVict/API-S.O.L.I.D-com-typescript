import { User } from "../../entities/User";
import { IMailProvider } from "../../provider/IMailProvider";
import { IUserRepository } from "../../repositories/IUserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase {
    

    constructor(
       private userRepository: IUserRepository,
       private mailProvider: IMailProvider
        
       
    ) {}

    async executar(data: ICreateUserRequestDTO) {
        const userAlreadyExists = await this.userRepository.findByEmail(data.email)

        if (userAlreadyExists) {
            throw new Error('Usuário já existente')
        }

        const user = new User(data);

        await this.userRepository.save(user)

       await this.mailProvider.senMail({
            to: {
                name: data.name,
                email: data.email,
            },
            from: {
                name: 'Matheus',
                email: 'matheus@gmail.com'
            },
            subject: 'Parabéns',
            body: '<h1>Você recebeu esse email</h1>'
        })


    }
}