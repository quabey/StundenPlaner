<script>
    import { selectables, slot } from "../stores.js";
    // import { appointFach } from "./appoint.svelte";

    let selectable;
    let slots;
    let currentGroupID = 0; 

let unsubscribe = selectables.subscribe(value => {
selectable = value;
});

let unsubscribeSlot = slot.subscribe(value => {
slots = value;
});

function select(id, fachText){
    
    console.log(id, fachText);

    if(slots[id].fach=="" && id <= 29){
        currentGroupID++;
        slot.update(fach => {
            fach[id].fach = fachText;
            fach[id].id = fach[id].id;
            fach[id].time = fach[id].time;
            return fach;
        });
        console.log(slots[id].fach);
    }
    else{
        alert("Slot ist schon belegt");
    }
}

</script>
<h1 class="text-3xl font-bold text-center py-3 my-3 mx-60 rounded-xl bg-sky-300 hover:bg-sky-400"> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Wähle hier deine Stunden </a></h1>
<form>
<div class="flex">
{#each selectable as item}
    {#if item.groupID == currentGroupID && item.groupID <= 4}
        <div class="">
            <button class="
            bg-gray-600
            hover:bg-gray-700
            rounded-3xl
            p-3
            m-2
            text-white
            flex
            item-center
            hover:scale-110
            " 
            on:click={() => select(item.slotID, item.fach)}> {item.fach} am {slots[item.slotID].time} </button>
            </div>
            {/if}
            {/each}
    </div>

</form>