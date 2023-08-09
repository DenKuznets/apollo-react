import './App.css'
import { ApolloClient, InMemoryCache } from "@apollo/client";

const link = from([
  errorLink,
  new HttpLink({uri: })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link,
})

function App() {

  return (
    <>
      hello
    </>
  )
}

export default App
