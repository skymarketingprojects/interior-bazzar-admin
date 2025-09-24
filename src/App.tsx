import UserRoutes from "./routes";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import ParentContextProvider from "./context";
import { BrowserRouter as Router } from "react-router-dom";

function App() {

  return (
    <ParentContextProvider>
      <Provider store={store}>
        <Router>
          {/* <ScrollToTop /> */}
          <UserRoutes />

        </Router>
      </Provider>
    </ParentContextProvider>
  );
}

export default App;