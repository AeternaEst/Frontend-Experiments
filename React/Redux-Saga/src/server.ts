import * as express from "express";
import { Request, Response } from "express";
import { endpoints, PORT } from "./data/endpoints";
import LoginService from "./services/login-service";
import PropertyService from "./services/property-service";
import UserService from "./services/user-service";

const propertyService = new PropertyService();
const loginService = new LoginService();
const userService = new UserService();

const app = express();
app.use(express.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Content-Type", "application/json");
  res.header("Access-Control-Allow-Headers", "*");
  next();
});

app.get("/", (req: Request, res: Response) => {
  res.send({
    message: "hello world",
  });
});

app.get(endpoints.getProperties, (req: Request, res: Response) => {
  console.log("getting properties");

  const getProperties = async () => {
    const properties = await propertyService.getProperties();
    res.set;
    res.send({
      properties,
    });
  };

  getProperties();
});

app.post(endpoints.addFavorite, (req: Request, res: Response) => {
  console.log("adding favorite", req.body);
  const propertyId = Number.parseInt(req.body.propertyId);

  const addFavoriteProperty = async () => {
    try {
      await propertyService.addFavoriteProperty(propertyId);
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(404);
    }
  };

  addFavoriteProperty();
});

app.post(endpoints.addComment, (req: Request, res: Response) => {
  console.log("adding comment", req.body);
  const propertyId = Number.parseInt(req.body.propertyId);

  const addPropertyComment = async () => {
    try {
      await propertyService.addPropertyComment(propertyId, req.body.comment);
      res.sendStatus(200);
    } catch (e) {
      res.sendStatus(404);
    }
  };

  addPropertyComment();
});

app.get(endpoints.getStreetName, (req: Request, res: Response) => {
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

app.get(endpoints.getCity, (req: Request, res: Response) => {
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

app.get(endpoints.getZip, (req: Request, res: Response) => {
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

app.post(endpoints.login, (req: Request, res: Response) => {
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

app.get(endpoints.getSecurityMessage, (req: Request, res: Response) => {
  console.log("getting security message", req.query);
  const index = Number.parseInt(req.query.index as string);

  const getSecurityMessage = async (): Promise<void> => {
    try {
      const message = await userService.getSecurityMessage(index);
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
