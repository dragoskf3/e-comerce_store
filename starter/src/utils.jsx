import axios from "axios";

export const customInstance = axios.create({
  baseURL: "https://strapi-store-server.onrender.com/api",
});

export const curencyFormater = (price) => {
  const newPrice = "$ " + Math.floor(price) / 100;
  return newPrice;
};

export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    const amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
