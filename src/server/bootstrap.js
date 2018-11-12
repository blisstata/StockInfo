import Hapi from 'hapi';
import routes from './routes/index';

const options = {
    host: 'localhost',
    port: 8000
}
const server = new Hapi.Server();

const bootstrap = () => {
    server.connection({port: options.port, host: options.host});
    server.route(routes);
    server.start(() => {
        console.log('Server started at: ' + server.info.uri);
    });
};

export default bootstrap();