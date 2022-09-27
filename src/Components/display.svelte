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

<div class="justify-none">
  <div class="flex content-center justify-center">
<h1 class=" shadow-lg text-3xl font-bold text-center py-3 my-3 md:mx-60 rounded-xl bg-primary w-5/6"> Deine Stunden </h1>
</div>
<DayDisplay />

<div class="grid-style mx-6 mt-2 mb-5 gap-2">
  {#each slots as item, i} 
  <!-- Fach Display -->
<div class="bg-secondary hover:bg-special hover:text-black hover:scale-105 shadow-lg p-2 text-center w-full transition ease-in-out delay-150 " class:font-red="{$currentHoverID === i}" >
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
</div>