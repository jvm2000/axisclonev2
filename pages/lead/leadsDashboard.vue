<template>
    <div class="bg-[#F2F6FB] w-full h-full overflow-hidden">
        <div class="relative flex items-start h-screen min-h-screen">
            <!-- sidebar -->
            <nav class="z-[20]">
                <BarMinSideBar :class="[minimizeSideBar ? 'block' : 'hidden']"/>
                <BarMaxSideBar :class="[!minimizeSideBar ? 'block' : 'hidden']"/>>
            </nav>
            <div class="z-[0] w-full sm:z-[10]">
                <!-- topbar -->
                <BarLeadTopBar />
                <!-- tab Leads -->
                <ContentsLeadTabs class="px-28"/>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">

const { minimizeSideBar, openAddLead, openMinimizeSideBar, closeMinimizeSideBar, openAddLeads, closeAddLeads } = sideBarFunctionalities()


</script>