
<script setup lang="ts">
    
    const { programViewItem, selectedID } = usePrograms()

</script>

<template>
    <div class="w-full bg-white h-full text-sm">
        <div class="flex space-x-4 place-items-center">
            <img src="/icons/checkIcon.svg" alt="">
            <p class="text-green-600">Students Unassigned to Syllabus</p>
        </div>
        <p class="text-black mt-4">{{ selectedID.length }} Students are successfully unassigned to <br>{{ programViewItem.addedSyllabus }} as Yellow Belt</p>
    </div>
</template>
