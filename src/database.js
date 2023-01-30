import monggose from 'mongoose'

mongoose.connect("mongodb://localhost/companydb",{
    useNewUrlParser: true,
    userUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
})
    .then(db => console.log('Db is connected'))
    .catch(error => console.log(error))




    