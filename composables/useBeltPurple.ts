const state = reactive({
    PsubR1: 0,
    PsubR2: 0,
    PsubR3: 0,
    PsubR4: 0,

    PsubD1: 0,
    PsubD2: 0,
    PsubD3: 0,
    PsubD4: 0,
})

export default function () {

    const PtotalRanks = computed(() => {
        return state.PsubR1 + state.PsubR2  + state.PsubR3  + state.PsubR4
    })

    const PtotalDays = computed(() => {
        return state.PsubD1 + state.PsubD2  + state.PsubD3  + state.PsubD4
    })


    return {
        ...toRefs(state),
        PtotalRanks,
        PtotalDays,
    }
}