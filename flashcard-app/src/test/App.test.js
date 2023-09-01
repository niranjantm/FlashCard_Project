import { render, screen } from "@testing-library/react";
import App from "../App";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../store";

describe("testing App component",()=>{
 
test("Rendering Create flashcard", () => {
    render(
      <Provider store={store}>
        <App></App>
      </Provider>
    );
    const element = screen.getByText(/Create FlashCards/i);
    // ------------------------Checking for Create Flashcards Header-------------------------
    expect(element).toBeInTheDocument();
  });

test("Rendering Create New link",()=>{
    
    //--------- Arrange --------------
    render(<Provider store={store}><App></App></Provider>);

    // -------Assert-------------------
    const elementCreateNew = screen.getByText(/Create New/i);
    expect(elementCreateNew).toBeInTheDocument();

});
test("Rendering My FlashCards link",()=>{
    
    //--------- Arrange --------------
    render(<Provider store={store}><App></App></Provider>);

    // -------Assert-------------------
    const elementMyFlashCards = screen.getByText(/My FlashCards/i);
    expect(elementMyFlashCards).toBeInTheDocument();

})});
