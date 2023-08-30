
import CreateNew from "./pages/CreateNew";
import Main from "./pages/Main";
import MainNav from "./Components/MainNav";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MyflashCards from "./pages/MyflashCards";
import FlashCardDetail from "./pages/FlashCardDetail";



function App() {
  // ----------Using createBrowserRouter and RouterProvider to create routes for pages----------

  const router = createBrowserRouter([
    {path:"/",element:<Main></Main>,children:[
      //-----------Adding child routes -----------

      {index:true,element:<CreateNew></CreateNew>},
      {path:"MyflashCards",element:<MyflashCards></MyflashCards>},
      {path:"FlashCardDetail/:index",element:<FlashCardDetail></FlashCardDetail>}
    ]}
  ])
  return ( <RouterProvider router={router}></RouterProvider>);
}

export default App;
