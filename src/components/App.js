import React, {useState} from "react";
import Nav from "./Nav";
import HogTile from "./HogTile"
import Filter from "./Filter"


import hogs from "../porkers_data";

function App() {

const [showGreased, setShowGreased] = useState(false)
const [sortBy, setSortBy] = useState("")

	const hogsToDisplay = hogs
		.filter((hog) => showGreased ? hog.greased === true : true)
		.sort((hogA, hogB) => {
			if (sortBy === "Name") {
				return hogA.name.localeCompare(hogB.name)
			} if (sortBy === "Weight") {
				return hogA.weight - hogB.weight
			}
		})

	return (
		<div className="App">
			<Nav hogsToDisplay={hogsToDisplay}/>
			<Filter 
			showGreased={showGreased}
			 setShowGreased={setShowGreased}
			 sortBy={sortBy}
			 setSortBy={setSortBy}/>
			{hogsToDisplay.map((hog) => {
			return (
			<>		
			<HogTile
			key={hog.name}
			hog={hog}
			name={hog.name}
			image={hog.image}
			greased={hog.greased}
			specialty={hog.specialty}
			weight={hog.weight}
			highestMedal={hog["highest medal achieved"]}
			/>
			</>)
			})}
			
		</div>
	);
}

export default App;
