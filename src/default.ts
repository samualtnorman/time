import { AutoMap } from "@samual/automap"
import { styleText } from "util"

const nameIdMap = new AutoMap((_name: string) => 0)

export const time = <T>(name: string, fn: () => T): T => {
	const id = nameIdMap.get(name)

	nameIdMap.set(name, id + 1)

	if (id)
		name = `${name} (${id})`

	console.log(styleText(`gray`, `Measuring ${name}`))
	console.time(name)

	let isPromise = false

	try {
		const result = fn()

		if (isPromise = result instanceof Promise)
			result.finally(() => console.timeEnd(name))

		return result
	} finally {
		if (!isPromise)
			console.timeEnd(name)
	}
}
