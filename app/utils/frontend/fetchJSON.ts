/**
 * Fetch JSON data from an endpoint
 *
 * @param endPoint
 * @returns data
 */
async function fetchJSON(endPoint: string) {
  const res = await fetch(endPoint);
  if (!res.ok) {
    console.error("Error fetching data : ", Error);
  }
  const data = await res.json();
  return data;
}

export default fetchJSON;
