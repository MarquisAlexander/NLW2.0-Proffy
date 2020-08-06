//Dados
const proffys = [
    {  
        name: "Marquis Alexander",
        avatar: "https://avatars1.githubusercontent.com/u/51330232?s=460&u=6ba8934526e00197814cbcb559bf3cbff771b565&v=4", whatsapp: "89918422", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost:"40", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220],
    },
    {  
        name: "Arielly Maria",
        avatar: "https://avatars1.githubusercontent.com/u/51330232?s=460&u=6ba8934526e00197814cbcb559bf3cbff771b565&v=4", whatsapp: "89918422", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost:"40", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220],
    },
    {  
        name: "Arielly Maria",
        avatar: "https://avatars1.githubusercontent.com/u/51330232?s=460&u=6ba8934526e00197814cbcb559bf3cbff771b565&v=4", whatsapp: "84 8155-6704", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
        subject: "Química", 
        cost:"40", 
        weekday: [1], 
        time_from: [720], 
        time_to: [1220],
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
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
    " Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades

function getSubject(subjectNumber) {
    const position = +subjectNumber - 1
    return subjects[position]
}
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filters = req.query
    return res.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const data = req.query

    //se tiver data
    const isNotEmpty = Object.keys(data).length != 0
    if (isNotEmpty) {

        data.subject = getSubject(data.subject)
        //adicionar dados a lista de proffys
        proffys.push(data)
        return res.redirect("/study")
    }


    //se não, mstrar a pagina
    return res.render("give-classes.html", {subjects, weekdays })
}

//Servidor
const express = require('express')
const server = express()

//configurando o nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

//configurar arquivos estáticos
server.use(express.static("public"))

//rotas da minha aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

//porta onde meu servidor está rodando
.listen(5000)
