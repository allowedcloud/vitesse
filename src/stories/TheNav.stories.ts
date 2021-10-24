import Nav from '../components/TheNav.vue'

export default {
  title: 'Layout/Navigation',
  component: Nav,
}

const Template = (args: any) => ({
  components: { Nav },
  setup() {
    return {
      args,
    }
  },
  //  Doesn't work with single word component name
  //   template: '<nav v-bind="args"></nav>',
  template: '<Nav v-bind="args" />',
})

export const Production = Template.bind({})
Production.args = {
  title: 'Vite Starter',
}
