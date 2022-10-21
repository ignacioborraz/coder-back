const app = require('./app')

const PORT = process.env.PORT || 4000
app.set('port',PORT)

app.listen(app.get('port'), () =>
    console.log('SERVER READY IN PORT: '+app.get('port'))
)
