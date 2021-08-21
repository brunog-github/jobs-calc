let data = [
    {
        id: 1,
        name: "Pizzaria Recanto do Sabor",
        "daily-hours": 5,
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

module.exports = {
    get(){
        return data
    },

    update(newJob){
        data = newJob
    },

    delete(id){
        data = data.filter(job => Number(job.id) !== Number(id))
    },

    create(newJob){
        data.push(newJob)
    }
}