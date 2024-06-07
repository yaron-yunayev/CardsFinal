import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import Layout from "./layout/Layout";
import UserProvider from "./users/providers/UserProviders";

import CustomThemeProvider from "./providers/CoustomThemeProvider";
import SnackbarProvider from "./providers/SnackbarProvider";





function App() {
  return (
    <BrowserRouter>
  <CustomThemeProvider>
    <SnackbarProvider>
    <UserProvider>
      <Layout>
        <Router />
      </Layout>
      </UserProvider>
      </SnackbarProvider>
</CustomThemeProvider>
    </BrowserRouter>
  );
}

export default App;