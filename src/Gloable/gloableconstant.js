import { Dimensions } from "react-native";
const Width = Dimensions.get("window").width;
const Height = Dimensions.get("window").height;

export const winsize = Width
export const ratiowidth = Width < 375 ? (Width < 320 ? 0.75 : 0.875) : 1;
export const ratioheight = Height < 568 ? (Height < 480 ? 0.75 : 0.875) : 1;

export const colors = {
    background: "#F4F8FD",
    transparent: "transparent",
    white: '#fff',
    lightgray: '#707070',
    black: '#000',
}