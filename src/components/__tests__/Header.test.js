import "@testing-library/jest-dom"
import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import Header from "../Header"
import { fireEvent, render, screen } from "@testing-library/react"
import appStore from "../../utils/appStore"

it("Should render the Header Component with a login button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    const login = screen.getByRole("button", {name: "Login"});
    expect(login).toBeInTheDocument();

})
it("Should render the Header Component with a cart Items 0", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    const cart = screen.getByText("Cart - (0)");
    expect(cart).toBeInTheDocument();

})
it("Should render the Header Component with a cart item", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    const cart = screen.getByText(/Cart/);
    expect(cart).toBeInTheDocument();

})
it("Should change login button to logout button", ()=>{
    render(
        <BrowserRouter>
        <Provider store={appStore}>
            <Header/>
        </Provider>
        </BrowserRouter>
    )
    const login = screen.getByRole("button", {name: "Login"});
    fireEvent.click(login);
    const logout = screen.getByRole("button", {name: "Logout"});
    expect(logout).toBeInTheDocument();

})