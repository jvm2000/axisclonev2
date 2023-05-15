const { openCreateTimeTable, openEditTable } = modalFunctions()

const state = reactive({
    timeTableList: [],
    timeTableName: '',
    fromTimeTable: '',
    toTimeTable: '',
    objectList: {}
})

export default function () {

    const addList = () => {
        const { preview } = useUploadList()
        if(state.timeTableName == ''){
            return alert('Input fields should not be empty')
        }
        let listItem = {
            name: state.timeTableName,
            fromdate: state.fromTimeTable,
            todate: state.toTimeTable,
            image: preview.value,
            default: '/timetable/default_pic.svg',
            status: 'default'
        }
        state.timeTableList.push(listItem)
        state.timeTableName = ''
        state.fromTimeTable = ''
        state.toTimeTable = ''
        preview.value = null
        openCreateTimeTable()
    }
    
    const objList = (list: Object) => {
        state.objectList = list
    }

    const objStatus = (status: string) => {
        state.objectList.status = status
    }

    const updateList = (list: Object) => {
        state.objectList = list
        state.objectList.name = state.timeTableName,
        state.objectList.fromdate = state.fromTimeTable,
        state.objectList.todate = state.toTimeTable,
        openEditTable()
        state.timeTableName = ''
        state.fromTimeTable = ''
        state.toTimeTable = ''
    }
    return {
        ...toRefs(state),
        addList,
        objList,
        objStatus,
        updateList,
    }
}