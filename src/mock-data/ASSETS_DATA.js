import token from "src/assets/images/token-sm.png";
import vstable from "src/assets/images/v-stable.png";
import pinkToken from "src/assets/images/pink-token.png";
import velstandToken from "src/assets/images/velstand-token.png";

export const ASSETS_DATA = [
  {
    id: "1",
    image: velstandToken,
    name: "Velstand",
    code: "VTD",
    difference: "+18.23%",
    price: "$44.12",
    volume: "$32.32M",
    liquidity: "$2.67B",
  },
  {
    id: "2",
    image: vstable,
    code: "VST",
    name: "V Stable",
    difference: "+20.24%",
    price: "$50.34",
    volume: "$28.43M",
    liquidity: "$2.23B",
  },
  {
    id: "3",
    image: pinkToken,
    name: "Coin",
    code: "COI",
    difference: "-0.23%",
    price: "$50.34",
    volume: "$28.43M",
    liquidity: "$2.23B",
  },
  {
    id: "4",
    image: token,
    name: "Token",
    code: "TKN",
    difference: "+3.78%",
    price: "$50.34",
    volume: "$28.43M",
    liquidity: "$2.23B",
  },
];
