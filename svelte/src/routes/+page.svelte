<script lang="ts">
	import '../app.css';
	import type { LatLngExpression } from 'leaflet';
	import Leaflet from '$lib/Leaflet.svelte';

    const initialView: LatLngExpression = [62.173276, 14.942265];
</script>

<div class="w-full h-screen">
	<Leaflet view={initialView} zoom={5} />
</div>