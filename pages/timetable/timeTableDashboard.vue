<template>
    <!-- container -->
    <div class="bg-[#F2F6FB] w-fit h-screen overflow-hidden">
        <div class="relative flex items-start h-fit min-h-screen w-screen overflow-hidden">
            <!-- sidebar -->
            <nav class="z-[30]">
                <BarMaxSideBar/>
                <BarMinSideBar/>
            </nav>
            <div class="z-[20] sm:z-[10] absolute">
                <!-- topbar -->
                <BarTopBar/>
            </div>
            <div class="z-[10] w-full">
                <TimetableTableTabsTimeTableList class="overflow-hidden"/>
            </div>
        </div>
    </div>
</template>