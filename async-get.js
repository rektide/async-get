"use module"

class PathResolutionError extends Error{
	constructor( pathArray, step, obj){
		super( `PathResolutionError, step ${step} of path ${JSON.stringify(pathArray)}.`)
		this.pathArray= pathArray
		this.step= step
		this.object= obj
	}
}

async function get(obj, pathArray, optionalDefaultValue, step= 0){
	// await current value
	if( obj&& obj.then){
		obj= await obj
	}
	// check for end
	if( step=== pathArray.length){
		return obj
	}

	// get current path, increment step, await
	if( pathArray.then) {
		pathArray= await pathArray
	}
	let pathCur= pathArray[ step++]
	if( pathCur&& pathCur.then){
		pathCur= await pathCur;
	}

	// lookup new current cursor value
	let cur= obj[ pathCur]
	if( cur=== undefined){
		if( optionalDefaultValue!== undefined){
			// cursor is undefined but there is a default value to immediately return
			return optionalDefaultValue
		}
		if( step!== pathArray.length){
			// path resolution has failed before iteration completed
			throw new PathResolutionError( pathArray, step, obj)
		}
	}
	// recurse into a next step
	return await get( cur, pathArray, optionalDefaultValue, step)
}
export default get
export { get, PathResolutionError}
