<script>
  import { slot,selectables } from "./stores";
  import Display from "./Components/display.svelte";
  import Selection from "./Components/selection.svelte";
  import Footer from "./Components/footer.svelte";
  import Popup from "./Components/popup.svelte";
  import DayDisplay from "./Components/dayDisplay.svelte";
</script>

	
<div class="justify-between flex flex-col h-screen">
<Selection />
<Display />
<Footer />
</div>