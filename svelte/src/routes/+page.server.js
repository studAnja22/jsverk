import { TRAFIKVERKET_API_KEY } from '$env/static/private'
export const load = async ({fetch}) => {
    const fetchDelayedTrains = async () => {
        const query = `<REQUEST>
        <LOGIN authenticationkey="${TRAFIKVERKET_API_KEY}" />
        <QUERY objecttype="TrainAnnouncement" orderby='AdvertisedTimeAtLocation' schemaversion="1.8">
            <FILTER>
            <AND>
                <EQ name="ActivityType" value="Avgang" />
                <GT name="EstimatedTimeAtLocation" value="$now" />
                <AND>
                    <GT name='AdvertisedTimeAtLocation' value='$dateadd(-00:15:00)' />
                    <LT name='AdvertisedTimeAtLocation'                   value='$dateadd(02:00:00)' />
                </AND>
            </AND>
            </FILTER>
            <INCLUDE>ActivityId</INCLUDE>
            <INCLUDE>ActivityType</INCLUDE>
            <INCLUDE>AdvertisedTimeAtLocation</INCLUDE>
            <INCLUDE>EstimatedTimeAtLocation</INCLUDE>
            <INCLUDE>AdvertisedTrainIdent</INCLUDE>
            <INCLUDE>OperationalTrainNumber</INCLUDE>
            <INCLUDE>Canceled</INCLUDE>
            <INCLUDE>FromLocation</INCLUDE>
            <INCLUDE>ToLocation</INCLUDE>
            <INCLUDE>LocationSignature</INCLUDE>
            <INCLUDE>TimeAtLocation</INCLUDE>
            <INCLUDE>TrainOwner</INCLUDE>
        </QUERY>
</REQUEST>`;

    const response = await fetch(
        "https://api.trafikinfo.trafikverket.se/v2/data.json",
        {
            method: "POST",
            body: query,
            headers: { "Content-Type": "text/xml" }
        }
        );
        const result = await response.json();
        console.log(result.RESPONSE.RESULT[0]);
        return result.RESPONSE.RESULT[0].TrainAnnouncement;
    };
    return {
        delayedTrains: fetchDelayedTrains()
    }
}