import * as express from "express";
import { Request, Response } from "express";
import LoginService from "./services/login-service";
import PropertyService from "./services/property-service";
import UserService from "./services/user-service";

const propertyService = new PropertyService();
const loginService = new LoginService();
const userService = new UserService();

const app = express();
app.use(express.json());

const { PORT = 3000 } = process.env;

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world",
  });
});

app.get("/property/properties", (req: Request, res: Response) => {
  console.log("getting properties");

  const getProperties = async () => {
    const properties = await propertyService.getProperties();
    res.send({
      properties,
    });
  };

  getProperties();
});

app.post("/property/favorite", (req: Request, res: Response) => {
  console.log("adding favorite", req.body);
  const propertyId = Number.parseInt(req.body.propertyId);

  const addFavoriteProperty = async () => {
    try {
      await propertyService.addToFavorite(propertyId);
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(404);
    }
  };

  addFavoriteProperty();
});

app.post("/property/comment", (req: Request, res: Response) => {
  console.log("adding comment", req.body);
  const propertyId = Number.parseInt(req.body.propertyId);

  const addPropertyComment = async () => {
    try {
      await propertyService.addComment(propertyId, req.body.comment);
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(404);
    }
  };

  addPropertyComment();
});

app.get("/property/streetName", (req: Request, res: Response) => {
  console.log("getting street name", req.query);
  const propertyId = Number.parseInt(req.query.propertyId as string);

  const getStreetName = async (): Promise<void> => {
    try {
      const streetName = await propertyService.getStreetName(propertyId);
      res.send({ streetName });
    } catch (e) {
      res.sendStatus(404);
    }
  };

  getStreetName();
});

app.get("/property/city", (req: Request, res: Response) => {
  console.log("getting city", req.query);
  const propertyId = Number.parseInt(req.query.propertyId as string);

  const getCity = async (): Promise<void> => {
    try {
      const city = await propertyService.getCity(propertyId);
      res.send({ city });
    } catch (e) {
      res.sendStatus(404);
    }
  };

  getCity();
});

app.get("/property/zip", (req: Request, res: Response) => {
  console.log("getting zip", req.query);
  const propertyId = Number.parseInt(req.query.propertyId as string);

  const getZip = async (): Promise<void> => {
    try {
      const zip = await propertyService.getZip(propertyId);
      res.send({ zip });
    } catch (e) {
      res.sendStatus(404);
    }
  };

  getZip();
});

app.post("/login", (req: Request, res: Response) => {
  console.log("Logging in", req.body);
  const userName = req.body.userName;
  const password = req.body.password;

  const performLogin = async () => {
    try {
      const user = await loginService.login(userName, password);
      res.send({ user });
    } catch (e) {
      res.sendStatus(404);
    }
  };

  performLogin();
});

app.get("/user/securitymessage", (req: Request, res: Response) => {
  console.log("getting security message", req.query);

  const getSecurityMessage = async (): Promise<void> => {
    try {
      const message = await Promise.race([
        await userService.getSecurityMessage(0),
        await userService.getSecurityMessage(1),
        await userService.getSecurityMessage(2),
      ]);
      res.send({ message });
    } catch (e) {
      res.sendStatus(404);
    }
  };

  getSecurityMessage();
});

app.listen(PORT, () => {
  console.log("server started at http://localhost:" + PORT);
});

/* Run in browser */
// fetch('http://localhost:3000/property/favorite', {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ propertyId: 100 }) // body data type must match "Content-Type" header
//   });
