import { App, Request, Response, staticServe, attainCors } from "./deps.ts";
import api from "./utils/routes.ts";

const app = new App();

app.use(attainCors());
app.use(staticServe("client/dist"));

app.use(staticServe("img"));

app.use("/api/articles", api);

app.use(async (req: Request, res: Response) => {
  await res.sendFile("client/dist/index.html");
});

app.listen({ port: 3000 });
