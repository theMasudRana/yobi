import oipLogo from "./assets/oip-logo.png";

import { QueryClient, QueryClientProvider } from "react-query";
import "./App.css";
import ChatWidgets from "./components/ChatWidget";
import PrevAns from "./components/PrevAns";
import YobiProvider from "./context/Provider";

function App() {
	const queryClient = new QueryClient();

	return (
		<YobiProvider>
			<QueryClientProvider client={queryClient}>
				<div className="wrapper">
					<header>
						<div className="logo">
							<img src={oipLogo} alt="OIP logo" />
						</div>

						<div className="title">
							<h1 className="text-[#0693E3] text-3xl md:text-4xl lg:text-6xl leading-normal">
								Chat with the Synths – Demo Edition
							</h1>
						</div>

						<PrevAns />
					</header>
					<ChatWidgets />
				</div>
			</QueryClientProvider>
		</YobiProvider>
	);
}

export default App;
