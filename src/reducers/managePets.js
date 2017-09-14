export let state;


export function managePets(state = {pets: []}, action){
	switch (action.type) {
		case 'ADD_PET':
			return {pets: state.pets.concat(action.pet)}
			// Object.assign({}, state, {pets: [...state.pet, action.pet]})
		case 'REMOVE_PET':
			return ({...state, pets: state.pets.filter(pet => pet.id != action.id)})
		default:
			return state
	}
}

export function dispatch(action){
	state = managePets(state, action)
	render()
}

export function render(){
	const Lis = state.pets.map(pet => `<li>${pet.name}</li>`)

	document.getElementById('container').innerHTML = `<ul>${Lis}</ul>`

}
