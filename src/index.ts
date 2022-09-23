import { app } from './server'
const PORT = 3333


app.listen(PORT, () => {
    console.log(`Inciado no http://localhost:${PORT}`)
})