
import '@testing-library/jest-dom';

import { render, screen } from "@testing-library/react";
import Contact from "../Contact";

describe("Testcases of contact us page", ()=>{
    beforeAll(()=>{
        console.log("Before all")
    })
    beforeEach(()=>{
        console.log("Before each")
    })
    afterEach(()=>{
        console.log("After each")
    })
    it("should render heading in the contact us page", ()=>{
        render(<Contact/>);
        //We used getAll as there are two headings in the contact us page
        //Query
        const heading = screen.getAllByRole("heading");
        //Assertion
        expect(heading[0]).toBeInTheDocument();
    })
    
    it("Should render all input boxes in the contact us page", ()=>{
        render(<Contact/>);
        const inputBoxes = screen.getAllByRole("textbox")
        expect(inputBoxes.length).toBe(2)
        })
    
    it("Should render the input box that has the placeholder text of name", ()=>{
        render(<Contact/>)
        const placeHolders = screen.getByPlaceholderText("name");
        expect(placeHolders).toBeInTheDocument();
    })
})
