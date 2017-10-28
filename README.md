# async-get

> Lookup the value of an object by path, asynchronously. An async ______.get.

If you have an async function, use async-get to lookup anything you'd use out of input parameters!

Async-get is an async-ified version of [Lodash's .get](https://lodash.com/docs/4.17.4#get). All promises encountered during lookup will be awaited.

# Example

Given a **place** object which is promised of numerous promises,

```js
const placeVi= Promise.resolve({
	country: "USA",
	state: "VI",
	population: Promise.resolve(123498)
})
```

One could look up **population**,

```js
const population= await get(placeVi, ["population"])
```

while having the placeVi and population promises decompacted, resolved out for you.

In addition to resolving encountered values of the input object, promises encountered while recursing the pathArray are also handled:

```js
const population2= await get(placeVi, Promise.resolve({population: Promise.resolve(123498)}))
```

And, finally, there is a third, optional parameter accepted, a defaultValue, which can be used:

```js
const stateBird= await get(placeVi, ["bird"], Promise.resolve("unknown"))
```
