import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { Provider } from "react-redux"
import { ThemeProvider } from "styled-components"
import store from "redux/store"
import App from "components/App"
import defaultTheme from "themes/default"
import "themes/base.css"

const root = document.getElementById("root") as HTMLElement

ReactDOM.createRoot(root).render(
  <Provider store={store}>
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
)