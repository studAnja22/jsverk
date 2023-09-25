import { TRAFIKVERKET_API_KEY } from '$env/static/private'
export const load = async () => {
    const fetchDelayedTrains = async () => {
        const query = `<REQUEST>
            <LOGIN authenticationkey="${TRAFIKVERKET_API_KEY}" />
            <QUERY objecttype="TrainStation" schemaversion="1">
            <FILTER>
                  <EQ name="Advertised" value="true" />
            </FILTER>
            <INCLUDE>AdvertisedLocationName</INCLUDE>
            </QUERY>
            </REQUEST>`;

        const response = fetch(
            "https://api.trafikinfo.trafikverket.se/v2/data.json", {
                method: "POST",
                body: query,
                headers: { "Content-Type": "text/xml" }
            }
        )
        const data = await response.json()
        return data.results
    }
    return {
        delayedTrains: fetchDelayedTrains()
    }
}
