import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import RestaurantMenu from "../RestaurantMenu"
import MockMenuList from "./Mocks/MockMenuList"
import Header from "../Header"
import Cart from "../Cart"
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(MockMenuList)
        }
    })
})

it("Should render the Menu items and add to cart button", async()=>{
   await act(async()=>render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header />
        <RestaurantMenu />
        <Cart />
    </Provider>
    </BrowserRouter>))
    const accordainHeader = screen.getByText("Recommended (9)");
    fireEvent.click(accordainHeader);
    const menuItems = screen.getAllByTestId("menuItem");
    expect(menuItems.length).toBe(9);
    const cartBefore = screen.getByText("Cart - (0)");
    const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);
    const cartAfter = screen.getByText("Cart - (1)");
    expect(cartAfter).toBeInTheDocument();
    fireEvent.click(addBtns[0]);
    const cartAfterTwice = screen.getByText("Cart - (2)");
    expect(cartAfterTwice).toBeInTheDocument();
    fireEvent.click(cartAfterTwice);
    const cartItems = screen.getAllByTestId("menuItem");
    expect(cartItems.length).toBe(11)
    const clearBtn = screen.getByRole("button", {name:"Clear Cart"});
    fireEvent.click(clearBtn);
    const cartItemsAfterClear = screen.getAllByTestId("menuItem")
    expect(cartItemsAfterClear.length).toBe(9);
})