import { Menu } from "@/@types/menuTypes";
import { Restaurant } from "@/@types/restaurantTypes";

export const fetchRestaurantDetails = async (): Promise<Restaurant> => {
  const response = await fetch("https://cdn-dev.preoday.com/challenge/venue/9");
  const data: Restaurant = await response.json();
  return data;
};

export const fetchMenuDetails = async (): Promise<Menu> => {
  const response = await fetch("https://cdn-dev.preoday.com/challenge/menu");
  const data: Menu = await response.json();
  return data;
};
