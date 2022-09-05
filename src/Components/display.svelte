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
<h1 class="text-3xl font-bold text-center py-3 my-3 mx-60 rounded-xl bg-sky-300 hover:bg-sky-400" >Deine Stunden </h1>
<div class="grid grid-cols-6 mb-6 mx-2">
  {#each slots as item}
  <!-- Fach Display -->
  <div class={"bg-sky-200 rounded-xl hover:bg-sky-300 hover:scale-110 m-2 p-2 "} >
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

