import express, { Application } from 'express';
import morgan from 'morgan';
//import cors from "cors"

// Routes
import indexRoutes from './routes/index.routes';
import postRoutes from './routes/post.routes';

export class App {

    private app: Application;

    constructor(private port?: number | string) {
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes();
    }

    settings() {
        this.app.set('port', this.port || process.env.PORT || 4000);
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(express.json());
        //this.app.use(cors())
    }

    routes() {
        this.app.use(indexRoutes);
        this.app.use('/api/posts', postRoutes);
    }

    async listen() {
        await this.app.listen( this.app.get('port'));
        console.log( `server started at http://localhost:${ this.app.get('port') }` );
    }
    
}