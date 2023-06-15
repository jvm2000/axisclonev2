<script setup lang=ts>

  const { menubars, getMenuObj, menuObj, selectMenuObj } = userMenuFunctions()

</script>

<template>
    <div class="w-[20rem] h-screen p-4 bg-[#334D9B] text-white z-[30] hidden sm:block px-1">

        <div class="pt-2 grid place-items-center w-full h-auto space-y-8">

          <img src="/menubar/logoaxis.svg" alt="">

          <div class="grid w-full space-y-1 px-1">
            <div 
              v-for="menus, index in menubars"
              :key="index"
              class="w-full grid space-y-2 cursor-pointer"
              @click="getMenuObj(menus), selectMenuObj()"
            >

              <div 
                class="flex w-full relative rounded-md py-2 place-items-center"
                :class="menus.selected ? 'bg-[#1E2A80]' : ''"
              >
                <div class="pl-6 flex space-x-4 place-items-center">
                  <img :src="menus.image" alt="">
                  <p class="text-white text-base">{{ menus.menu }}</p>
                </div>

                <div
                  v-if="menus.submenus"
                  class="absolute right-5"
                >
                  <img
                    src="/menubar/menunotclick.svg" 
                    alt=""
                    :class="[menus.selected ? 'hidden' : 'block']"
                  >
                  <img
                    src="/menubar/menuclick.svg" 
                    alt=""
                    :class="[menus.selected ? 'block' : 'hidden']"
                  >
                </div>
              </div>

              <div 
                v-if="menus.selected"
                v-for="submenus, index in menus.submenus"
                :key="index"
                class="w-full rounded-md py-3"
              >
                <p class="text-base text-white ml-[5rem]">{{ submenus.subs }}</p>
              </div>
              <div v-else></div>

            </div>
          </div>

        </div>

    </div>
</template>