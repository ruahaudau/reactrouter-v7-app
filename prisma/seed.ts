//import PrismaClient
import { PrismaClient } from "@prisma/client";
//create an instance of PrismaClient
const db = new PrismaClient();

//function of template
function getShelves() {
    return [
        {
            name: 'Dairy',
            items: {
                create: [
                    {name: 'Milk'},
                    {name: 'Egg'},
                    {name: 'Cheese'},
            ]
            }
        },
        {
            name: 'Fruits',
            items: {
                create: [
                    {name: 'Apple'},
                    {name: 'Banana'},
                    {name: 'Oranges'},
            ]
            }
        }
    ]
}


//this function implement the Promise to increase the speed of create data of many shelves in parallel 
async function seed() {
    await Promise.all(getShelves().map(shelf =>db.pantryShelf.create({data:shelf})))
};

seed();