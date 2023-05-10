const { openCreateTimeTable } = modalFunctions()

const state = reactive({
    timeTableList: [],
    timeTableName: '',
    fromTimeTable: '',
    toTimeTable: ''
})

export default function () {

    const addList = () => {
        if(state.timeTableName == ''){
            return alert('Input fields should not be empty')
        }
        let listItem = {
            name: state.timeTableName,
            fromdate: state.fromTimeTable,
            todate: state.toTimeTable,
            timetablepic: File
        }
        state.timeTableList.push(listItem)
        state.timeTableName = ''
        state.fromTimeTable = ''
        state.toTimeTable = ''
        openCreateTimeTable()
    }

    return {
        ...toRefs(state),
        addList,
    }
}