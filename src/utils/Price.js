import { BookNowPriceList } from "../Static/BookNowPrice";
export const Price = (Value) => {
  switch (Value) {
    case "Hatchback":
      return BookNowPriceList.Hatchback;
    case "Sedan_Suv":
      return BookNowPriceList.Sedan_Suv;
    case "Sedan_Suv_Medium":
      return BookNowPriceList.Sedan_Suv_Medium;
    case "Sedan_Suv_Large":
      return BookNowPriceList.Sedan_Suv_Large;
    case "Exotic":
      return BookNowPriceList.Exotic;
    default:
      return undefined;
  }
};
