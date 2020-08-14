//servidor
const express = require('express')
const server = express()


const  {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express:server,
    noCache:true,
    
})
//inicio configuração do servidor
server
// receber o dados do req.body
.use(express.urlencoded({ extended:true }))
// configuar arquivos estatísticos
.use(express.static("public"))

//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses )
.post("/save-classes",saveClasses)

.listen(5500)