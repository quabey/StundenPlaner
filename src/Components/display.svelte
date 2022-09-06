<script>
    import { slot, currentHoverID } from "../stores.js";
    import { onDestroy } from "svelte";
    import DayDisplay from "./dayDisplay.svelte";
    

    let slots;
    let currentHoverIDs;
    let hovered = false;

    let unsubscribe = slot.subscribe(value => {
  slots = value;
    });

</script>
<h1 class="text-3xl font-bold text-center py-3 my-3 mx-60 rounded-xl bg-sky-300 hover:bg-sky-400"> Deine Stunden </h1>

<DayDisplay />

<div class="grid-style mx-6 mt-2 mb-5 gap-2">
  {#each slots as item, i} 
  <!-- Fach Display -->
<div class="bg-sky-200 hover:bg-sky-300 hover:scale-105  p-2 text-center w-full transition ease-in-out delay-150 " class:font-red="{$currentHoverID === i}" >
        <p class="font-bold">
          { #if item.fach != ""}
            {item.fach}
          {:else if item.fach == ""}
            Freistunde
          {/if}   
        </p>
            <!-- Time Display -->
        <p>
          {item.time}
        </p>
  </div>
  {/each}
</div>