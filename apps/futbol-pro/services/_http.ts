const endpoint = "https://v3.football.api-sports.io"
const apiKey = '97c029e5e159b72655f3d1795cfde225'
console.log(process.env.NX_SPORTS_API_KEY)
export const _get = async (ruta: string) => {
  return await fetch(endpoint + ruta, {
    "method": "GET",
    "headers": {
      "x-rapidapi-host": "v3.football.api-sports.io",
      'x-apisports-key': apiKey
    }
  })
}
