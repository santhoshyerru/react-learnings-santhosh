import { BrowserRouter } from "react-router-dom"
import Body from "../Body"
import data from "./Mocks/MockResList.json"
import { fireEvent, render, screen } from "@testing-library/react"
import { act } from "react"
import "@testing-library/jest-dom"
global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: ()=>{
            return Promise.resolve(data);
        }
    })
})
it("Should Search reslist for restaurants name that has P in it", async()=>{
    await act(async()=>render(
        <BrowserRouter>
        <Body/></BrowserRouter>)) 

    const searchBtn = screen.getByRole("button", {name: "Search"})
    const searchInput = screen.getByTestId("SearchInput")
    fireEvent.change(searchInput, {target: {value: "p"}})
    fireEvent.click(searchBtn);
    const resCards = screen.getAllByTestId("resCard");

    expect(resCards.length).toBe(2);
    expect(searchInput).toBeInTheDocument();
    expect(searchBtn).toBeInTheDocument();

})

it("Should filter top rated restaurants", async ()=>{
    await act(async ()=> render(
        <BrowserRouter><Body/></BrowserRouter>
    ))
    const topRatedBtn = screen.getByRole("button", {name: "Top Rated Restaurant"})
    fireEvent.click(topRatedBtn);
    const resCards = screen.getAllByTestId("resCard");
    expect(resCards.length).toBe(8);
})