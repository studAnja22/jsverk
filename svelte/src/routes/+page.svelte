<script lang="ts">
	import '../app.css';
	import type { LatLngExpression } from 'leaflet';
	import Leaflet from '$lib/Leaflet.svelte';
	import Marker from '$lib/Marker.svelte';
	import Popup from '$lib/Popup.svelte';

    const initialView: LatLngExpression = [62.173276, 14.942265];
	const markerLocations: Array<LatLngExpression> = [
	[62.173276, 14.942265]
	];
</script>

<div class="w-full h-screen">
	<Leaflet view={initialView} zoom={5}>
		{#each markerLocations as latLng}
			<Marker {latLng} width={40} height={40}>
				<Popup>Like & Subscribe!</Popup>
			</Marker>
		{/each}
	</Leaflet>
</div>