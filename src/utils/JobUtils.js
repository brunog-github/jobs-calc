module.exports = {
    remainingDays(job) {
        const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()

        const createdDate = new Date(job.create_at)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDate = createdDate.setDate(dueDay)

        const timeDiffInMs = dueDate - Date.now()

        const dayInMs = 86400000
        const dayDiff = Math.ceil((timeDiffInMs / dayInMs))

        return dayDiff
    },

    calculateBudget: (job, valueHour) => valueHour * job['total-hours']
}