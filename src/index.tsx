import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/redux";
import App from "./app/App";
import "./css/index.css";
import { BrowserRouter } from "react-router-dom";
import { SocketContext, socket } from "./app/context/socket";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(

    <BrowserRouter>
    <Provider store={store}>
      <SocketContext.Provider value={socket}>
      <App />
      </SocketContext.Provider>
    </Provider>
    </BrowserRouter>
 
);


