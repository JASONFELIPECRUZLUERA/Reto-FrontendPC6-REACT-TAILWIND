import ArticlesContainer from "./components/ArticlesContainer.jsx"
import Header from "./components/Header.jsx"
import MainArticle from "./components/MainArticle.jsx"
import NewContainer from "./components/NewContainer.jsx"


function App() {

  return (
    <main className="px-4 pt-6">
      <Header></Header>
      <div className="md:flex md:gap-8">
      <MainArticle></MainArticle>
      <NewContainer></NewContainer>
      </div>
      <ArticlesContainer></ArticlesContainer>
    </main>
  )
}

export default App
