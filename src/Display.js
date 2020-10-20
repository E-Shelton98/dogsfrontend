import React from "react";
//import { prependOnceListener } from "../../backend/models/dog";

const Display = (props) => {
  
  const loaded = () => (
		<div style={{ textAlign: 'center' }}>
			{props.dogs.map((dog) => (
				<article>
					<img src={dog.img} alt="" />
					<h1>{dog.name}</h1>
					<h3>{dog.age}</h3>
					<button
						onClick={() => {
							props.selectDog(dog);
							props.history.push('/edit');
						}}>
						Edit
					</button>
					<button
						onClick={() => {
							props.deleteDog(dog);
						}}>
						Delete
					</button>
				</article>
			))}
		</div>
	);
  
  
  return props.dogs.length > 0 ? loaded() : <h1>Loading...</h1>
};

export default Display;
