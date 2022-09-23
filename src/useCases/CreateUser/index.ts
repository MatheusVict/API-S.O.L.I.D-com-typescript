import { MailTrapMailProvider } from "../../provider/implemetantions/MailTrapMailProvider";
import { PostgresRepository } from "../../repositories/implementations/PostgresRepository";
import { CreateUserUseController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mailTrapMailProvider = new MailTrapMailProvider()
const postgresRepository = new PostgresRepository()

const createUserUseCase = new CreateUserUseCase(
    postgresRepository,
    mailTrapMailProvider
)

const createUserController = new CreateUserUseController(
    createUserUseCase
)

export { createUserUseCase, createUserController }