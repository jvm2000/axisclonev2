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

    const openAddStuds = () => {
        router.push('/stud/addStuds')
    }

    const router = useRouter()

    const closeAddLeads = () => {
        router.push('/lead/leadsDashboard')
    }

    const closeAddStuds = () => {
        router.push('/stud/studsDashboard')
    }

    return {
        ...toRefs(state),
        openMinimizeSideBar,
        closeMinimizeSideBar,
        openAddLeads,
        openAddStuds,
        closeAddLeads,
        closeAddStuds,
    }


}