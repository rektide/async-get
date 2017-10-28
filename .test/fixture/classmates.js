"use strict"
const placeVi= Promise.resolve({
	country: "USA",
	state: "VI",
	population: Promise.resolve(123498)
})
const personXerces= Promise.resolve({
	"name": "Xerces",
	"home": placeVi
})
const personFender= Promise.resolve({
	"name": "Fender",
	"home": placeVi
})
const classmates= Promise.resolve([
	personXerces,
	personFender
])
module.exports= {
	placeVi,
	personXerces,
	personFender,
	classmates
}
