import './App.css';
import { AuthButtons } from "./components/AuthButtons";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated, user } = useAuth0();

  return (
    <div>
      <h1>DeepBreaths Webapp</h1>
      <AuthButtons />
      {isAuthenticated && <p>Ingelogd als: {user?.name}</p>}
    </div>
  );
}

export default App;
