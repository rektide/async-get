#!/usr/bin/env node
"use strict"
let tape= require( "blue-tape")
let { classmates, personFender, personXerces, placeVi}= require( "./fixture/classmates")

let esmRequire= require( "@std/esm")( module, {
	debug: true,
	esm: "js"
})
let get= esmRequire( "../async-get.js").get

tape( "get a value synchronously", async function( t){
	let awaitedPlace= await placeVi
	let state= await get( placeVi, ["state"])
	t.equal(state, awaitedPlace.state, "state")
})
tape( "get a value asynchronously", async function( t){
	let state= await get( placeVi, ["state"])
	let awaitedPlace= await placeVi
	t.equal(state, awaitedPlace.state, "state")
})
tape( "get a deep value asynchronously", async function( t){
	let population= await get( personXerces, [ "home", "population"])
	let awaitedPlace= await placeVi
	let awaitedPopulation= await awaitedPlace.population
	t.equal(population, awaitedPopulation, "population")
})
