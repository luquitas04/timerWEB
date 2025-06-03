// #region imports
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StyledDiv from "./components/StyledDiv/StyledDiv";
import routes from "./Routes/routes";
import StyledSidebar from "./components/StyledSidebar/StyledSidebar";
import { ThemeProvider } from "./components/ThemeComponent/theme/contextTheme/ThemeContext";
// #endregion
// #region render
function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <StyledDiv className="container">
          <StyledSidebar />
          <StyledDiv className="mainArea">
            <Routes>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <>
                      {route.sidebar && route.sidebar()}
                      {route.component && route.component()}
                    </>
                  }
                />
              ))}
            </Routes>
          </StyledDiv>
        </StyledDiv>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
