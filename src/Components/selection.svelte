<script>
    import { selectables, slot, currentHoverID} from "../stores.js";
    import Popup from "./popup.svelte";

    let selectable;
    let slots;
    let currentGroupID = 0;
    let errorMsgTest = false;
    let currentHoverIDs;

let unsubscribeHover = currentHoverID.subscribe(value => {
    currentHoverIDs = value;
});

let unsubscribe = selectables.subscribe(value => {
    selectable = value;
});

let unsubscribeSlot = slot.subscribe(value => {
    slots = value;
});

function handleClick() {
    errorMsgTest = !errorMsgTest;
}

function handleMouseover(id) {
    currentHoverIDs = id
    console.log(currentHoverIDs);;
}

function handleMouseOut() {
    currentHoverIDs = 999;
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

<div class="justify-none mb-0">

{#if errorMsgTest}
    <Popup on:click={handleClick}/>
{/if}
<div class="flex content-center justify-center">
    <h1 class="shadow-lg text-3xl font-bold text-center py-3 my-3 md:mx-60 rounded-xl w-5/6 bg-primary "> <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"> Wähle hier deine Stunden </a></h1>
</div>
<div class=" place-content-center grid grid-flow-row md:grid-rows-1 md:grid-flow-col ">
{#each selectable as item}
    {#if item.groupID == currentGroupID && item.groupID <= 5}
        <!-- svelte-ignore a11y-mouse-events-have-key-events -->
        <div class="" on:mouseover={() => handleMouseover(item.slotID)} on:mouseout={handleMouseOut}>
            <button class="shadow-lg bg-secondary hover:bg-special hover:text-black rounded-3xl p-3 m-2 flex item-center hover:scale-110 transition ease-in-out delay-150" 
            on:click={() => select(item.slotID, item.fach)}> 
                {item.fach} am {slots[item.slotID].time} </button>
        </div>
    {/if}
{/each}
</div>
</div>