const state = reactive({
  menubars : [
    {
      image: '/menubar/dashboard.svg',
      menu: 'Dashboard', 
      selected: false
    },
    {
      image: '/menubar/usermanagement.svg',
      menu: 'User Management', 
      submenus: [
        {subs: 'Leads', selected: false},
        {subs: 'Students', selected: false},
        {subs: 'Instructors', selected: false}
      ]
    },
    {
      image: '/menubar/schoolsetting.svg',
      menu: 'School Setting',
      selected: false,
      submenus: [
        {sample: 'lol'}
      ]
    },
    {
      image: '/menubar/membership.svg',
      menu: 'Membership',
      selected: false,
      submenus: [
        {sample: 'lol'}
      ]
    },
    {
      image: '/menubar/timetable.svg',
      menu: 'Timetable',
      selected: false,
      submenus: [
        {subs: 'Timetables', selected: false},
        {subs: 'Classes', selected: false}
      ]
    },
    {
      image: '/menubar/grading.svg',
      menu: 'Grading', 
      selected: false, 
      submenus: [
        {subs: 'Ranks', selected: false},
        {subs: 'Sub Ranks', selected: false},
        {subs: 'Grading Prep', selected: false},
        {subs: 'Statistics', selected: false}
      ]
    }
  ],
  menuObj: {}

})

export default function () {

  const getMenuObj = (menus: Object) => {
    state.menuObj = menus
  }

  const selectMenuObj = () => {
    state.menuObj.selected = !state.menuObj.selected
  }

  return {
    ...toRefs(state),
    selectMenuObj,
    getMenuObj,
  } 
}