import logo from "@/assets/react.svg";

function App() {
	return (
		<div className="flex flex-col gap-4">
			<header className="flex items-center gap-4 rounded-md border-b bg-slate-50 p-4 shadow-md">
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
			<div className="flex border-r">
				<div className="h-screen w-1/4 rounded-md bg-slate-50 p-4 shadow-md">
					<h1>Sidebar</h1>
				</div>
			</div>
		</div>
	);
}

export default App;
