<script>
    import { selectables, slot, errorMsg } from "../stores.js";
    import Popup from "./popup.svelte";

    let selectable;
    let slots;
    let currentGroupID = 0;
    let errorMsgs;
    let errorMsgTest = false;

let unsubscribe = selectables.subscribe(value => {
    selectable = value;
});

let unsubscribeSlot = slot.subscribe(value => {
    slots = value;
});

let unsubscribeErrorMsg = errorMsg.subscribe(value => {
    errorMsgs = value;
});

function handleClick() {
    errorMsgTest = !errorMsgTest;

}


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
    else {
        errorMsgTest = true;
    }
}
</script>

{#if errorMsgTest}
    <Popup on:click={handleClick}/>
{/if}

<h1 class="text-3xl font-bold text-center py-3 my-3 mx-60 rounded-xl bg-sky-300 hover:bg-sky-400"> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Wähle hier deine Stunden </a></h1>
<div class="flex center">
{#each selectable as item}
    {#if item.groupID == currentGroupID && item.groupID <= 5}
        <div class="">
            <button class=" bg-gray-600 hover:bg-gray-700 rounded-3xl p-3 m-2 text-white flex item-center hover:scale-110" 
            on:click={() => select(item.slotID, item.fach)}> {item.fach} am {slots[item.slotID].time} </button>
            </div>
            {/if}
            {/each}
    </div>