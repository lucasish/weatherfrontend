import { mount } from '@vue/test-utils'
import StadtView from "@/views/StadtView"


describe('Testing StadtView.vue', () => {
  it('should show page title',
    () => {
      // when
      const wrapper = mount(StadtView)

      // then
      expect(wrapper.text()).toMatch('Wetter')
    })

  it('should not show form by default', () => {
    // when
    const wrapper = mount(StadtView)

    // then
    expect(wrapper.find('#city-create-offcanvas').classes()).not.toContain('show')
  })

  it('should render cityname', () => {
    // when
    const wrapper = mount(StadtView, {
      data: {
        city: {
          id: 1,
          name: 'Potsdam'
        }
      }
    })

    // then
    const cardTitle = wrapper.find('.card-title')
    expect(cardTitle.text()).toBe('Potsdam')
  })

  it('should render a person card for each person', () => {
    // when
    const wrapper = mount(StadtView, {
      propsData: {
        city: [
          {
            id: 1,
            name: 'Potsdam'
          },
          {
            id: 2,
            firstName: 'Berlin'
          }
        ]
      }
    })

    // then
    const cityCards = wrapper.find('.card-title')
    expect(cityCards.length).toBe(2)
  })

})
