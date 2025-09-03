import user1 from "../assets/user 1.jpg";
import user2 from "../assets/user 2.jpg";
import user3 from "../assets/user 3.jpg";
import user4 from "../assets/user 4.jpg";
import user5 from "../assets/user 5.jpg";
import user6 from "../assets/user 6.jpg";

const inventoryData = [
  {
    productName: "PixelMate",
    category: "Electronics",
    sku: "AFZM647",
    incoming: 478,
    stock: 595,
    status: "In stock",
    statusColor: "green",
    price: 4347,
    image: user1
  },
  {
    productName: "FusionLink",
    category: "Electronics",
    sku: "AFZM622",
    incoming: 418,
    stock: 761,
    status: "In stock",
    statusColor: "green",
    price: 5347,
    image: user2
  },
  {
    productName: "VelvetAura",
    category: "Apparel",
    sku: "AFZM655",
    incoming: 471,
    stock: 765,
    status: "Out of stock",
    statusColor: "red",
    price: 2347,
    image: user3
  },
  {
    productName: "UrbanFlex Sneakers",
    category: "Apparel",
    sku: "AFZM653",
    incoming: 178,
    stock: 65,
    status: "Low on stock",
    statusColor: "yellow",
    price: 9347,
    image: user4
  },
  {
    productName: "SilkSage Wrap",
    category: "Wellness",
    sku: "AFZM699",
    incoming: 473,
    stock: 165,
    status: "In stock",
    statusColor: "green",
    price: 4347,
    image: user5
  },
  {
    productName: "CasaLuxe",
    category: "Home & Living",
    sku: "AFZM633",
    incoming: 168,
    stock: 575,
    status: "Low on stock",
    statusColor: "yellow",
    price: 3347,
    image: user6
  }
];

export default inventoryData;
