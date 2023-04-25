const state = reactive({
    GsubR1: 0,
    GsubR2: 0,
    GsubR3: 0,
    GsubR4: 0,

    GsubD1: 0,
    GsubD2: 0,
    GsubD3: 0,
    GsubD4: 0,
})

export default function () {

    const GtotalRanks = computed(() => {
        return state.GsubR1 + state.GsubR2  + state.GsubR3  + state.GsubR4
    })

    const GtotalDays = computed(() => {
        return state.GsubD1 + state.GsubD2  + state.GsubD3  + state.GsubD4
    })


    return {
        ...toRefs(state),
        GtotalRanks,
        GtotalDays,
    }
}