import {RouterProvider} from "react-router-dom"
import routerPages from "./routes/route-pages"
import Context from "./context/context"

function App() {

  /*behave like a source file for the whole application and applies context to the components rendered under the routes it 
  provides*/

  return (
    <Context>
      <RouterProvider router={routerPages}/>
    </Context>
  )
}

export default App
