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
  confirmGradingObj: {},
  objSubranks: {},
  objUpdateConfirmRank: {},
  subranks: [
    {name: 'Stripe 1', att: 13, days: 30, status: 'Eligible to Pass', date: '21, Mar 2023', passedby: 'James Churchman'},
    {name: 'Stripe 2', att: 20, days: 30, status: 'Eligible to Pass', date: '18, Mar 2023', passedby: 'James Churchman'},
    {name: 'Stripe 3', att: 18, days: 20, status: 'Eligible to Pass', date: '4 Jun 2023', passedby: 'Freddy Mercury'},
    {name: 'Stripe 4', att: 6, days: 14, status: 'Not eligible to Pass', date: '', passedby: '-'},
    {name: 'Stripe 5', att: 0, days: 0, status: 'Not eligible to Pass', date: '', passedby: '-'}
  ],
  objIndex: {}
})

export default function () {

  const accessSubrankObj = () => {
    let item = {
      name: 'Stripe 6',
      att: state.objGrading.att,
      days: state.objGrading.days,
      status: 'Eligible to Pass',
      date: '-',
      passedby: ''
    }
    if(state.subranks.length == 6){
      state.subranks.pop()
    }
    state.subranks.push(item)
    
  }

  const getSubrankIndex = (index: Object) => {
    state.objIndex = index
  }

  const getObjGrading = (students: Object) => {
    state.objGrading = students
  }

  const getConfirmGradingObj = (objGrading: Object) => {
    state.confirmGradingObj = objGrading
  }
  
  const getUpdateConfirmRank = (confirmGradingObj: Object) => {
    state.objUpdateConfirmRank = confirmGradingObj
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

  const getObjGradingSubrank = (subs: Object) => {
    state.objSubranks = subs
  }

  const updateGradingSubrank = () => {
    state.confirmGradingObj.att = state.objSubranks.att
    state.confirmGradingObj.days = state.objSubranks.days
  }

  return {
    ...toRefs(state),
    getSubrankIndex,
    accessSubrankObj,
    getObjGradingSubrank,
    getUpdateConfirmRank,
    getObjSort,
    getObjGrading,
    getObjColor,
    updateGradingSubrank,
    updateGradingColor,
    getConfirmGradingObj,
    updateGradingStatus,
  }
}