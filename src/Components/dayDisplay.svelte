<script>
    let days = ["Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag"];
</script>

<div class=" mx-6 grid-bar space-2 gap-2 mb-0">
    {#each days as day}
    <div class="dayDisplay">
        <p class="font-bold">{day}</p>
    </div>
    {/each}

</div>