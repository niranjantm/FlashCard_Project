import { Fragment } from "react";
import CreateNew from "./pages/CreateNew";
import Main from "./pages/Main";
import MainNav from "./Components/MainNav";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MyflashCards from "./pages/MyflashCards";
import FlashCardDetail from "./pages/FlashCardDetail";



function App() {
  const router = createBrowserRouter([
    {path:"/",element:<Main></Main>,children:[
      {index:"/",element:<CreateNew></CreateNew>},
      {path:"MyflashCards",element:<MyflashCards></MyflashCards>},
      {path:"FlashCardDetail/:index",element:<FlashCardDetail></FlashCardDetail>}
    ]}
  ])
  return ( <RouterProvider router={router}></RouterProvider>);
}

export default App;
