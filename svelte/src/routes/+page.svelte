<script lang="ts">
	import '../app.css';
	import type { LatLngExpression } from 'leaflet';
	import Leaflet from '$lib/Leaflet.svelte';
	import Marker from '$lib/Marker.svelte';
	import Popup from '$lib/Popup.svelte';

	export let data;
	const { delayedTrains } = data;

    const initialView: LatLngExpression = [62.173276, 14.942265];
	const markerLocations: Array<LatLngExpression> = [
	[62.173276, 14.942265]
	];

</script>

<div style="float: left;" class="w-2/6 h-screen">
	<h1 class="text-2xl text-center pt-6"> Tågförseningar </h1>
	{#if delayedTrains}
		{#each delayedTrains as train}
			<p> {train.TrainOwner} </p>
		{/each}
		<h2>{delayedTrains}</h2>
	{/if}

</div>

<div class="w-4/6 h-screen" style="float: right;">
	<Leaflet view={initialView} zoom={5}>
		{#each markerLocations as latLng}
			<Marker {latLng} width={40} height={40}>
				<Popup>Lorem ipsum</Popup>
			</Marker>
		{/each}
	</Leaflet>
</div>

