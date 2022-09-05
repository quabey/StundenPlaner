<script>
    import { slot } from "../stores.js";
    import { onDestroy } from "svelte";

    let slots;
    let filled = false[29];

    let unsubscribe = slot.subscribe(value => {
  slots = value;
    });

    onDestroy(unsubscribe);
</script>
<h1 class="text-3xl font-bold text-center p-6">Deine ausgesuchten Fächer</h1>
<div class="grid grid-cols-6">
  {#each slots as item}
  <!-- Fach Display -->
  <div class={"bg-sky-200 rounded-xl hover:bg-gray-200 hover:scale-110 m-2 p-2 "} >
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

