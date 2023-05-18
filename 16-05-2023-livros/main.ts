import app from './app'

function main() {
    try {
        app.listen(3000, 'localhost', () => {
            console.log('Starting server at port 3000')
        })
    } catch (err) {
        console.error('Starting server ERROR', err)
    }
}
main()