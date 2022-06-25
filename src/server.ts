import 'dotenv/config';
import App from "@/app";
import IndexRoute from "@routes/index.route";
import CatRoutes from '@routes/cat.route';
import FeedRoutes from '@routes/feed.route';

const app = new App([new IndexRoute(), new CatRoutes(), new FeedRoutes()]);

app.listen();