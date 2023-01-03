import { DetailsPage } from './pages/DetailsPage'
import { HomePage } from './pages/HomePage'
import { AppTheme } from './theme/AppTheme'
import { Navbar } from './ui/components/Navbar'

function App() {
  return (
    <AppTheme>
      {/* <Navbar/>
      <HomePage/> */}
      <DetailsPage/>
    </AppTheme>
  )
}

export default App
