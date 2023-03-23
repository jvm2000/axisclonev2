<template>
    <!-- container -->
    <div class="bg-[#F2F6FB] w-fit h-screen overflow-hidden">
        <div class="relative flex items-start h-fit min-h-screen w-screen overflow-hidden ">
            <!-- sidebar -->
            <nav class="z-[20]">
                <BarMinSideBar :class="[minimizeSideBar ? 'block' : 'hidden']"/>
                <BarMaxSideBar :class="[!minimizeSideBar ? 'block' : 'hidden']"/>
            </nav>
            <div class="z-[0] sm:z-[10] absolute">
                <!-- topbar -->
                <BarTopBar/>
            </div>
            <div>
                <ContentsLeadContent class="overflow-hidden"/>

            </div>
        </div>

        
    </div>
    

</template>
<script setup lang="ts">

const { minimizeSideBar, openMinimizeSideBar, closeMinimizeSideBar } = sideBarFunctionalities()
</script>