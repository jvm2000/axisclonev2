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
  objSort: {}
})

export default function () {

  const getObjGrading = (students: Object) => computed(() =>
    state.objGrading = students
  )

  const getObjSort = () => {

  }

  return {
    ...toRefs(state),
    getObjSort,
    getObjGrading,
  }
}