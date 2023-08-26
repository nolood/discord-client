const normalizeHash = (hash: number, min: number, max: number) => {
	return Math.floor((hash % (max - min)) + min)
}

export const genAvatarColor = (string: string) => {
	let hash = 0
	for (let i = 0; i < string.length; i++) {
		hash = string.charCodeAt(i) + ((hash << 5) - hash)
	}
	hash = Math.abs(hash)

	const hRange = [0, 360]
	const sRange = [50, 75]
	const lRange = [25, 60]

	const h = normalizeHash(hash, hRange[0], hRange[1])
	const s = normalizeHash(hash, sRange[0], sRange[1])
	const l = normalizeHash(hash, lRange[0], lRange[1])

	return `hsl(${h}, ${s}%, ${l}%)`
}
