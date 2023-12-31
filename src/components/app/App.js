import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import MainPage from "../pages/MainPage";
import ComicsPage from "../pages/ComicsPage";
import Page404 from "../pages/404";
import SingleComicPage from "../pages/SingleComicPage";

import AppHeader from "../appHeader/AppHeader";



const App = () => {


	return (
		<Router>
			<div className="app">
				<AppHeader/>
				<main>
					<Routes>
						<Route path="/" element={<MainPage></MainPage>}/>
						<Route path="/comics" element={<ComicsPage></ComicsPage>} />
						<Route path="/comics/:comicId" element={<SingleComicPage></SingleComicPage>} />
						<Route path='*' element={<Page404></Page404>} />
					</Routes>
					
				</main>
			</div>
		</Router>
	)
}

export default App;