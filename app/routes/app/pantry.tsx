import { type PantryShelf } from "@prisma/client";
import {  useLoaderData } from "react-router";
import { getAllShelves } from "../../models/pantryshelf.server";

type LoaderData = {
  shelves: PantryShelf[];
};

export async function loader() {
  const shelves = await getAllShelves();
  return {shelves} as LoaderData;
}


export default function Pantry() {
  const data = useLoaderData() as LoaderData;
  return (
    <div>
      <h1>Welcome</h1>
      <ul>
        {data.shelves.map((shelf) => (
          <li key={shelf.id}>{shelf.name}</li>
        ))}
      </ul>
    </div>
  )
}