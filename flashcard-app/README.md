# FlashCard Generator
FlashCard Generator is a react application which can be used to create decks of flashcards by the users.
It requires a user to enter the name of the deck which has to be created, description about the deck and an image for deck. After creating a deck indiviual cards can be added to the deck by adding name of the card, description about the card and an image about the card. Clicking on the create button will create a deck, which can be viewed in myflashcards page.

## Directories
The files have been divided according to their respective folders to make code readibility easy for the user.
The division of folders are shown below.

### page folder
It contains files which are displayed on the screen like
1. CreateNew.js file which is used to render create new flashcard page.
2. MyflashCards.js file which is used to render decks of flashcards which are created by the user.
3. FlashCardDetail.js file which is used to render details about a specific flashcard from a deck.
4. Main.js renders links to navigate between CreateNew and MyflashCards files.

### Components folder
This folders contain files which provide functionality to the files in page folder
1. CreateForm.js this file is used to render a form which is used to accept input from the user and it uses formik library to maintain form state and handle submitions by the user.
2. MainNav.js this file is used render the navigation links between CreateNew file and Myflashcards, it uses Navlink component to provide highlight to active page.
3. ShareModal.js this file is used to render share modal which is a popup when user clicks on share button in FlashCardDetail page, it is create by using a portal.
4. Error.js it used to render error messages in form when a user makes an error.

### store
This folder contains redux store for state management.
1. index.js it is used to configure redux store by using @reduxjs/toolkit library
2. FormReducer.js this file is used manage intial state of the form and reducer function to add new values to the form by using createSlice function from @reduxjs/toolkit library

### test
This folder contains test files which are used to test the app files.
