<script>
  import { slot,selectables } from "./stores";
  import Display from "./Components/display.svelte";
  import Selection from "./Components/selection.svelte";
  import Footer from "./Components/footer.svelte";
  import Popup from "./Components/popup.svelte";
  import DayDisplay from "./Components/dayDisplay.svelte";
  import Header from "./Components/header.svelte";
</script>

	
<div class="h-screen">
  <Header />
  <Selection />
  <div class="justify-between flex flex-col h-full">
    <Display />
    <div class="mt-auto">
      <Footer />
    </div>
  </div>
</div>