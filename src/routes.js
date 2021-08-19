//cria a rota para o servidor
const express = require('express')
const routes = express.Router()

const views = __dirname + "/views/"

const profile = {
    name: 'Bruno',
    avatar: 'https://avatars.githubusercontent.com/u/87875400?v=4',
    "monthly-budget": 5000,
    "days-per-week": 5,
    "hours-per-day": 6,
    "vacation-per-year": 4,
    "value-hour": 100,
}

const jobs = [
    {
        id: 1,
        name: "Pizzaria Recanto do Sabor",
        "daily-hours": 2,
        "total-hours": 2,
        create_at: Date.now()
    },
    
    {
        id: 2,
        name: "Pizzaria Mais Sabor",
        "daily-hours": 6,
        "total-hours": 90,
        create_at: Date.now()
    }
]

function remainingDays(job) {
        const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()

        const createdDate = new Date(job.create_at)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDate = createdDate.setDate(dueDay)

        const timeDiffInMs = dueDate - Date.now()

        const dayInMs = 86400000
        const dayDiff = Math.floor((timeDiffInMs / dayInMs))

    return dayDiff
}

routes.get('/', (req, res) => {
    const updateJobs = jobs.map((job) => {
        
        const remaining = remainingDays(job)
        const status = remaining <= 0 ? "done" : "progress"

        return {
            ...job,
            remaining,
            status,
            budget: profile['value-hour'] * job['total-hours']
        }
    })
    
    return res.render(views + "index", { jobs: updateJobs })
})

routes.get('/job', (req, res) => res.render(views + "job"))
routes.post('/job', (req, res) => {
    const lastID = jobs[jobs.length - 1]?.id || 1


    jobs.push({
        id: lastID + 1,
        name: req.body.name,
        "daily-hours": req.body["daily-hours"],
        "total-hours": req.body["total-hours"],
        create_at: Date.now()
    })

    return res.redirect('/')
})
routes.get('/job/edit', (req, res) => res.render(views + "job-edit"))
routes.get('/profile', (req, res) => res.render(views + "profile", { profile }))

module.exports = routes;