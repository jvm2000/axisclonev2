const state = reactive({
    subR1: 0,
    subR2: 0,
    subR3: 0,
    subR4: 0,

    subD1: 0,
    subD2: 0,
    subD3: 0,
    subD4: 0,
})

export default function () {

    const totalRanks = computed(() => {
        return state.subR1 + state.subR2  + state.subR3  + state.subR4
    })

    const totalDays = computed(() => {
        return state.subD1 + state.subD2  + state.subD3  + state.subD4
    })


    return {
        ...toRefs(state),
        totalRanks,
        totalDays,
    }
}