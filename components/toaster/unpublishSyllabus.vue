
<script setup lang="ts">
    
    const { programViewItem, selectedID } = usePrograms()

</script>

<template>
    <div class="w-full bg-white h-full text-sm">
        <div class="flex space-x-4 place-items-center">
            <img src="/icons/checkIcon.svg" alt="">
            <p class="text-black w-[15rem]">Successfully unpublish {{ programViewItem.addedSyllabus }} </p>
        </div>
    </div>
</template>
