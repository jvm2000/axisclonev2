const state = reactive({
    dayPatterns: [
        {d: 'Su', value: '', selected: false},
        {d: 'M', value: '', selected: false},
        {d: 'T', value: '', selected: false},
        {d: 'W', value: '', selected: false},
        {d: 'Th', value: '', selected: false},
        {d: 'F', value: '', selected: false},
        {d: 'S', value: '', selected: false}
    ],
    daySelected: false,
    dayObjected: {},
    form: {
        classType: '',
        classStartD: '',
        classEndD: '',
        classStartT: '',
        classEndT: '',
        classDays: '',
        classL: '',
        classA: '',
        classI: '',
        classLimitS: '',
        classLimitL: '',
        limitS: '',
        limitL: '',
    }
})

export default function () {

    const getStyle = (days: Object) => {
        state.dayObjected = days
        if(state.dayObjected.selected=='true'){
            return 'background-color: #334D9B'
        }
    }

    const dayO = (days: Object) => {
        state.dayObjected = days
    }

    const selectD = (value: Object) => {
        state.dayObjected.value = value
    }

    const isSelected = (selected: boolean) => {
        state.dayObjected.selected = selected
    }

    return{
        ...toRefs(state),
        getStyle,
        dayO,
        selectD,
        isSelected,
    }
}