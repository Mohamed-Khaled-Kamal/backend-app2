
const forecast = require("./data1/forecast")

const geocode = require("./data1/geocode")

const country = process.argv

geocode(country, (error, data) => {
    console.log("ERROR :" , error)
    console.log("DATA :" , data)
    

    
    forecast( data.laititude , data.longtitude ,(error, data) => {
        console.log("ERROR : ", error)
        console.log("DATA : ", data)
    })

})
