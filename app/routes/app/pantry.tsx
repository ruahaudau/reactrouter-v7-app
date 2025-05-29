import { type PantryShelf } from "@prisma/client";
import { useLoaderData } from "react-router";
import { getAllShelves } from "../../models/pantryshelf.server";
import classNames from 'classnames';
import { SearchIcon1 } from "../../components/icons/icon.component";
import { type LoaderArgs } from "@react-router/node";

type LoaderData = {
  shelves: PantryShelf[];
};

export async function loader({request}: LoaderArgs) {
  const shelves = await getAllShelves();
  return {shelves} as LoaderData;
}


export default function Pantry() {
  const data = useLoaderData() as LoaderData;
  return (
    <div>
      <form 
        className={classNames(
          "flex border-2 border-gray-300 rounded-md", 
          "focus-within:border-primary md:w-80 mb-3"
        )}
      >
        <button className="px-2 mr-1"><SearchIcon1 /></button>
        <input type='text' 
          name='q'
          autoComplete="off"
          placeholder="Search Shelf..."
          className="w-full py-3 px-2 outline-none" 
        />
      </form>
      <ul className={classNames("flex gap-4 overflow-x-auto", 'snap-x snap-mandatory md:snap-none', 'px-4')}>
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