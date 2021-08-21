let data = {
    name: 'Bruno',
    avatar: 'https://avatars.githubusercontent.com/u/87875400?v=4',
    "monthly-budget": 5000,
    "days-per-week": 5,
    "hours-per-day": 6,
    "vacation-per-year": 4,
    "value-hour": 100,
}

module.exports = {
    get(){
        return data;
    },
    
    update(newData){
        data = newData
    }
}