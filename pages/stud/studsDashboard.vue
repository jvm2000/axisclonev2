<template>
    <div class="bg-[#F2F6FB] w-full h-full overflow-hidden">
        <div class="relative flex items-start h-screen min-h-screen">
            <!-- sidebar -->
            <nav class="z-[20]">
                <MenubarDekstopMenuBar/>
                <BarMinSideBar/>
            </nav>
            <div class="z-[0] w-full sm:z-[10]">
                <!-- topbar -->
                <BarStudTopBar />
                <!-- tab Leads -->
                <ContentsStudTabs class="px-0 sm:px-20"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const { sideBarOpen, openAddLeads, closeAddLeads } = sideBarFunctionalities()


</script>