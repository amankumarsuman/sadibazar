// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Meat, Freshvegetable, Milk, Dish, Restaurant } = initSchema(schema);

export {
  Meat,
  Freshvegetable,
  Milk,
  Dish,
  Restaurant
};