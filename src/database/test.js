const Database = require('./db');
const createProffy = require('./createProffy');

Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: "Marquis Alexander",
        avatar: "https://avatars1.githubusercontent.com/u/51330232?s=460&u=6ba8934526e00197814cbcb559bf3cbff771b565&v=4", whatsapp: "89918422", 
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.", 
    }

    classValue = {
        subject: 1, 
        cost:"40", 
        
        //o proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        //class_id virá pelo banco de dados, após cadastramos a class
        {
            weekday: 0, 
            time_from: 720, 
            time_to: 1220,
        },
        {
            weekday: 1, 
            time_from: 720, 
            time_to: 1220,
        }
    ]

    //enviando dados para o arquivo createProffy.js
    // await createProffy(db, {proffyValue, classValue, classScheduleValues})
    
    //Consultar os dados inseridos

    // todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")
    // console.log(selectedProffys)

    //consulatar as classes de um determinado professor e trazer junto os dados do professor
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectClassesAndProffys)

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "1520"
        AND class_schedule.time_to > "1520"
    `)

    console.log(selectClassesSchedules)
})