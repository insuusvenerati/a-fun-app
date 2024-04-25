import logo from "@/assets/react.svg";

function App() {
	return (
		<header className="flex items-center gap-4 border-b p-4 shadow-sm">
			<img
				src={logo}
				alt="React Logo"
				className="h-12 w-12 hover:animate-spin"
			/>
			<h1 className="text-2xl font-bold hover:underline">
				<a href="/">A Fun App</a>
			</h1>
			<nav></nav>
		</header>
	);
}

export default App;
