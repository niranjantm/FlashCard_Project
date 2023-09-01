import {render,screen} from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../store";
import CreateNew from "../pages/CreateNew";
import {act} from "react-dom/test-utils"
import userEvent from "@testing-library/user-event"; 

describe("testing Create New component",()=>{
    test("Rendering form feilds names",()=>{
        render(<Provider store={store}><CreateNew></CreateNew></Provider>);
       
        const elementCreateGroup = screen.getByText(/Create Group/i);
        const elementAddDescription = screen.getByText(/Add Description/i);
        const elementEnterTerm = screen.getByText(/Enter Term/i);
        const elementEnterDefination = screen.getByText(/Enter defination/i);
       
        // Checking for Create Group name feild//
        expect(elementCreateGroup).toBeInTheDocument();
       
        //  Checking for Group description feild //
        expect(elementAddDescription).toBeInTheDocument();
       
        //  Checking for Term name feild //
        expect(elementEnterTerm).toBeInTheDocument();
       
        //  Checking for Term description feild //
        expect(elementEnterDefination).toBeInTheDocument();

    });

    test("Rendering Enter term and Enter defination when clicked on Add more button",()=>{
    //    ---------------Arrange-----------------
        render(<Provider store={store}><CreateNew></CreateNew></Provider>);
    
        // ----------------Act-----------------------
        
        const elementAddMore = screen.getByText(/Add more +/i);
        act(()=>{
            userEvent.click(elementAddMore);
            screen.debug();
        })

        // ---------------Assert----------------------
        const result = screen.getAllByText(/Enter Term/);
        expect(result).toHaveLength(2);


    })

})