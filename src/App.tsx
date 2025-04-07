import { ThemeProvider } from "./contexts/ThemeContext"
import { Todo } from "./pages/Todo"
import { GlobalStyle } from "./styles/GlobalStyle"

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <Todo />
    </ThemeProvider>
  )
}

export default App
