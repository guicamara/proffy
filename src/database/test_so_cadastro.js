const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
// inserir dados

proffyValue = {
    name:"Guilherme Camara",
    avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
    whatsapp:"989898989",
    bio:"educador em quimica",
    
}
classValue = {
    subject:1,
    cost:"20",
   // o prof id vira pelo banco dados

}

classScheduleValues = [{
   
    weekday:1,
    time_from:720,
    time_to:1220
},
{
    weekday:0,
    time_from:520,
    time_to:1220

}
]

createProffy(db,{proffyValue,classValue,classScheduleValues})


})