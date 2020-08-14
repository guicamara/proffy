
// dados

const proffys = [
    {
name:"Guilherme Camara",
avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
whatsapp:"989898989",
bio:"educador em quimica",
subject:"Química",
cost:"20",
weekday:[
    0
],
time_from:[720],
time_to:[1220]
    },
    {
        name:"Guilherme Camara",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp:"989898989",
        bio:"educador em quimica",
        subject:"Química",
        cost:"20",
        weekday:[
            0
        ],
        time_from:[720],
        time_to:[1220]
            }   
]

const subjects = [
    "Arte",
    "Biologia",
   "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",                                 
]
const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",                          

] 

// funcionalidades

function getSubject(subjectNumber){
    const position = +subjectNumber - 1
    return subjects[position]
}

function pageLanding(req,res){
    return res.render("index.html")
}

function pageStudy(req,res) {
    const filters=req.query
    return res.render("study.html",{ proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req,res){
    const data = req.query
    
    
    // se tiver dados  (data)
    const isNoEmpty = Object.keys(data).length > 0
    if (isNoEmpty) {

        data.subject = getSubject(data.subject)

        //adiconar dados a lista de proffs

        proffys.push(data)
        return res.redirect("/study")
    }
    return res.render("give-classes.html", {subjects, weekdays})

}

    

  

 

const express = require('express')
const server = express()

// configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views',{
    express:server,
    noCache:true,
    
})

server
// configuar arquivos estatísticos
.use(express.static("public"))

//rotas da aplicação

.get("/", pageLanding)

.get("/study", pageStudy)

.get("/give-classes", pageGiveClasses )

.listen(5500)