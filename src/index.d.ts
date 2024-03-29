/**
 * Convert rd(x, y) to lat, lon.
 * @param x number
 * @param y number
 * @returns {{ lat: number, lon: number }}
 * @throws {Error} when the input is out of bounds.
 */
declare function defaultExport(x: number, y: number): { lat: number, lon: number }

export default defaultExport
