<script>
    import { selectables, slot, } from "../stores.js";
    import { createEventDispatcher } from "svelte";


</script>
<div class="fixed z-10 inset-0 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
  <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
    <div class="fixed inset-0 bg-white bg-opacity-75 transition-opacity" aria-hidden="true"></div>

    <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
    <div class="inline-block align-bottom bg-secondary rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
      <div class=" px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
        <div class="sm:flex sm:items-start">
          <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
            <h3 class="text-lg leading-6" id="modal-title">
              Error
            </h3>
            <div class="mt-2">
              <p class="text-sm ">
                Stunde ist schon belegt. Bitte wähle eine andere Stunde.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class=" px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
        <button type="button" class="drop-shadow-lg w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-primary text-base font-medium  hover:bg-special focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500 sm:ml-3 sm:w-auto sm:text-sm" on:click>
          Ok

      </div>
    </div>
  </div>
</div>