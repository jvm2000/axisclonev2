<script setup lang="ts">
   
    const {  openAssignStudentModal, isAssignStudentModalOpen } = modalFunctions()
  
</script>

<template>
    <div class="bg-[#F2F6FB] w-full h-full overflow-hidden">
        <div class="relative flex items-start h-screen min-h-screen">
            <!-- sidebar -->
            <nav class="z-[30]">
                <MenubarDekstopMenuBar/>
                <BarMinSideBar/>
            </nav>
            <div class="z-[20] w-full sm:z-[10]">
                <!-- topbar -->
                <BarProgramsTopBar />
                <!-- tab Leads -->
                <ContentsProgramsContent />
            </div>
        </div>
    </div>
</template>