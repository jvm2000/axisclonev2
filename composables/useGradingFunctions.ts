const state = reactive({
  sortby: 'First name (asc)',
  objGrading: {},
  sort: [
    {menu: 'First name (asc)'},
    {menu: 'Last name'},
    {menu: 'Rank'},
    {menu: 'Subrank'},
    {menu: 'Attendance'},
    {menu: 'Days'},
    {menu: 'Status'},
    {menu: 'Action'}
  ],
  objSort: {},
  colorObj: {},
  confirmGradingObj: {}
})

export default function () {

  const getObjGrading = (students: Object) => {
    state.objGrading = students
  }

  const getConfirmGradingObj = (objGrading: Object) => {
    state.confirmGradingObj = objGrading
  }

  const getObjColor = (belt: Object) => {
    state.colorObj = belt
  }

  const updateGradingColor = () => {
    state.confirmGradingObj.rank = state.colorObj.name
  }
  const updateGradingStatus = (status: string) => {
    state.objGrading.status = status
  }

  const getObjSort = (sorts: Object) => {
    state.objSort = sorts
    state.sortby = state.objSort.menu
  }


  return {
    ...toRefs(state),
    getObjSort,
    getObjGrading,
    getObjColor,
    updateGradingColor,
    getConfirmGradingObj,
    updateGradingStatus,
  }
}