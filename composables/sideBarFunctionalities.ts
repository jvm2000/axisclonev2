const state = reactive({
    sideBarOpen: false,
    openAddLead: false
})

export default function () {

    const openMaxSideBar = () => {
        state.sideBarOpen = !state.sideBarOpen
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
        openAddLeads,
        openAddStuds,
        openMaxSideBar,
        closeAddLeads,
        closeAddStuds,
    }


}