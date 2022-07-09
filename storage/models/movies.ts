import {
  Database,
  DataTypes,
  Model,
  PostgresConnector,
  SQLite3Connector,
} from "https://deno.land/x/denodb/mod.ts";

const connector = new SQLite3Connector({
  filepath: "./database.sqlite",
});

const db = new Database(connector);

class Flight extends Model {
  static table = "flights";
  static timestamps = true;

  static fields = {
    id: { primaryKey: true, autoIncrement: true },
    departure: DataTypes.STRING,
    destination: DataTypes.STRING,
    flightDuration: DataTypes.FLOAT,
  };

  static defaults = {
    flightDuration: 2.5,
  };
}

db.link([Flight]);

await db.sync({ drop: true });

// await Flight.create({
//   departure: "Paris",
//   destination: "Tokyo",
// });
//
// // or
//
// const flight = new Flight();
// flight.departure = "London";
// flight.destination = "San Francisco";
// await flight.save();
//
// await Flight.select("destination").all();
// // [ { destination: "Tokyo" }, { destination: "San Francisco" } ]
//
// await Flight.where("destination", "Tokyo").delete();
//
// const sfFlight = await Flight.select("destination").find(2);
// // { destination: "San Francisco" }
//
// const aa = await Flight.count();
// console.log(aa);
//
// // 1
//
// await Flight.select("id", "destination").orderBy("id").get();
// // [ { id: "2", destination: "San Francisco" } ]
//
// await sfFlight.delete();

await db.close();
console.log("koniec");
