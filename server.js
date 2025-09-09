const app = require('./src/App')
const Connectdb = require('./src/config/Database')

Connectdb().then(()=>{
    console.log('Connection is Success');
    app.listen(3000 , ()=>{
    console.log('Server is listening');
})
}).catch((err)=>{
    console.log('Connection is Not eastablished');
})