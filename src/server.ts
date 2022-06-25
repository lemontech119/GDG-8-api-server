import 'dotenv/config';
import App from "@/app";
import IndexRoute from "@routes/index.route";
import CatRoutes from './routes/cat.route';


const app = new App([new IndexRoute(), new CatRoutes()]);

app.listen();