import "@testing-library/jest-dom"
import RestaurantCard, { withOpenLabel } from "../RestaurantCard"
 
import RestaurantCardPropMockData from "./Mocks/RestaurantCardPropMockData.json"
import { render, screen } from "@testing-library/react"
it("Should render the Restaurant card with props", ()=>{
    render(<RestaurantCard resObj={RestaurantCardPropMockData}/>)
    const name = screen.getByText("Asoka Restaurant");
    expect(name).toBeInTheDocument();
})
it("Should render the with open label restaurant card", ()=>{
    const TestComponentWithOpenStatus = withOpenLabel(RestaurantCard)
    render(<TestComponentWithOpenStatus resObj={RestaurantCardPropMockData}/>)
    const openLabel = screen.getByText("Open");
    expect(openLabel).toBeInTheDocument();
})