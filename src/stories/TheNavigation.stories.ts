import TheNav from './TheNavigation.vue'

export default {
  title: 'Example/Navigation',
  component: TheNav,
}

const Template = (args: any) => ({
  components: { TheNav },
  setup() {
    return {
      args,
    }
  },
  template: '<the-nav v-bind="args"></the-nav>',
})

export const Production = Template.bind({})
Production.args = {
  title: 'Vite Starter',
}
