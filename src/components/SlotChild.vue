<template>
    <div>
        <div class="mb-3">This is the child containing the slot tag</div>
        <div class="bg bg-dark w-25 m-auto text-light">Slot1 Data: </div><slot name="s1"></slot>
        <div class="bg bg-dark w-25 m-auto text-light">Slot2 Data: </div><slot name="s2"></slot>
        <div class="bg bg-dark w-25 m-auto text-light">Slot3 Data: </div><slot name="s3"></slot>
    </div>
</template>