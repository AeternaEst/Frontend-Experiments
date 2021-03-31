import * as express from "express";
import { Request, Response } from "express";
import {
  cityNames,
  propertyDatabase,
  streetNames,
  zipCodes,
} from "./data/properties";
import sleep from "./utils/general-utils";

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
  res.send({
    properties: propertyDatabase,
  });
});

app.post("/property/favorite", (req: Request, res: Response) => {
  console.log("adding favorite", req.body);
  const propertyId = Number.parseInt(req.body.propertyId);
  const propertyToFavorite = propertyDatabase.find(
    (property) => property.id === propertyId
  );
  if (propertyToFavorite) {
    propertyToFavorite.isFavorite = true;
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.post("/property/comment", (req: Request, res: Response) => {
  console.log("adding comment", req.body);
  const propertyId = Number.parseInt(req.body.propertyId);
  const propertyToAddComment = propertyDatabase.find(
    (property) => property.id === propertyId
  );
  if (propertyToAddComment) {
    propertyToAddComment.comments = [
      ...propertyToAddComment.comments,
      req.body.comment,
    ];
    res.sendStatus(200);
  } else {
    res.sendStatus(404);
  }
});

app.get("/property/streetName", (req: Request, res: Response) => {
  console.log("getting street name", req.query);
  const propertyId = Number.parseInt(req.query.propertyId as string);

  const getStreetName = async (): Promise<void> => {
    const sleepTime = Math.random() * 2000;
    await sleep(sleepTime);
    const streetName = streetNames[propertyId + -1];
    res.send({
      streetName,
    });
  };

  getStreetName();
});

app.get("/property/city", (req: Request, res: Response) => {
  console.log("getting city", req.query);
  const propertyId = Number.parseInt(req.query.propertyId as string);

  const getCity = async (): Promise<void> => {
    const sleepTime = Math.random() * 2000;
    await sleep(sleepTime);
    const city = cityNames[propertyId + -1];
    res.send({
      city,
    });
  };

  getCity();
});

app.get("/property/zip", (req: Request, res: Response) => {
  console.log("getting zip", req.query);
  const propertyId = Number.parseInt(req.query.propertyId as string);

  const getZip = async (): Promise<void> => {
    const sleepTime = Math.random() * 2000;
    await sleep(sleepTime);
    const zipCode = zipCodes[propertyId + -1];
    res.send({
      zipCode,
    });
  };

  getZip();
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
