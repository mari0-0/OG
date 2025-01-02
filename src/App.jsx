import Breakdown from "./components/Breakdown/Breakdown";
import Navbar from "./components/Navbar";
import ServicesSelection from "./components/Services/ServicesSelection";
import UserDashboard from "./components/UserDashboard/UserDashboard";

function App() {
	return (
		<>
      <Navbar />
      {/* <UserDashboard /> */}
			<Breakdown />
      {/* <ServicesSelection /> */}
		</>
	);
}

export default App;
