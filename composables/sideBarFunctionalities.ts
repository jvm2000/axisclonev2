const state = reactive({
    minimizeSideBar: false,
    openAddLead: false
})

export default function () {
    const openMinimizeSideBar = () => {
        state.minimizeSideBar = true
    }
    
    const closeMinimizeSideBar = () => {
        state.minimizeSideBar = false
    }

    const openAddLeads = () => {
        router.push('/lead/addLeads')
    }

    const router = useRouter()

    const closeAddLeads = () => {
        router.push('/lead/leadsDashboard')
    }

    return {
        ...toRefs(state),
        openMinimizeSideBar,
        closeMinimizeSideBar,
        openAddLeads,
        closeAddLeads,
    }


}