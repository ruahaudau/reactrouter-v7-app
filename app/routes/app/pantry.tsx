import { type PantryShelf } from "@prisma/client";
import {  useLoaderData } from "react-router";
import { getAllShelves } from "../../models/pantryshelf.server";
import classNames from 'classnames'

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
      <ul className={classNames("flex gap-8 overflow-x-auto", 'snap-x snap-mandatory md:snap-none', 'px-4')}>
        {data.shelves.map((shelf) => (
          <li key={shelf.id} className={classNames('border-2 border-primary rounded-md p-4 h-fit', 'w-full flex-none snap-center', 'md:w-96')}>
             <h1 className='text-2xl font-semibold mb-2'>
              {shelf.name}
             </h1>
             <ul>
              {shelf.items.map((item) => (
                <li key={item.id} className="py-2">{item.name}</li>
              ))}
             </ul>
          </li>
        ))}
      </ul>
    </div>
  )
}