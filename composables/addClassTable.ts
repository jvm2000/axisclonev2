const state = reactive({
    dayPatterns: [{d: 'Su'}, {d: 'M'}, {d: 'T'}, {d: 'W'}, {d: 'Th'}, {d: 'F'}, {d: 'S'}],
    daySelected: false,
    dayObjected: {},
    daysTotal: '',
    i: 0,
    limitStud: '',
    limitLead: '',
    classType: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    classLocation: '',
    classArea: '',
    classInstructor: '',
    studentsLimit: '',
    leadsLimit: ''
})

export default function () {

    const selectDay = (days: Object) => {
        state.dayObjected = days
        state.i++
    }

    const increment = () => {
        state.i++
        return state.i++
    }

    return{
        ...toRefs(state),
        selectDay,
        increment,
    }
}