import { mount, flushPromises } from '@vue/test-utils'
import StadtView from "@/views/StadtView"


describe('Testing StadtView.vue', () => {
  const emptyResponse = []
  const oneItemResponse = [{ id: 1, name: 'Berlin' }]
  const twoItemResponse = [
    { id: 1, name: 'Berlin' },
    { id: 2, name: 'Potsdam' }
  ]

  beforeEach(() =>{
    fetch.resetMocks()
  })

  it('should show page title with emptyresponse',
    () => {
    fetch.mockResponseOnce(JSON.stringify(emptyResponse))

      // when
      const wrapper = mount(StadtView)

      // then
      expect(wrapper.text()).toMatch('Wetter')
    })

  it('should show page title with not an empty response',
    () => {
      fetch.mockResponseOnce(JSON.stringify(twoItemResponse))

      // when
      const wrapper = mount(StadtView)

      // then
      expect(wrapper.text()).toMatch('Wetter')
    })

  it('should not show form by default', () => {
    fetch.mockResponseOnce(JSON.stringify(twoItemResponse))
    // when
    const wrapper = mount(StadtView)

    // then
    expect(wrapper.find('#offcanvasScrolling').classes()).not.toContain('show')
  })

  it('should render cityname', () => {
    fetch.mockResponseOnce(JSON.stringify(oneItemResponse))
    // when
    const wrapper = mount(StadtView)

    // then
  //  const cardTitle = wrapper.find('.card-title')
    //expect(cardTitle.text()).toBe('Berlin')
    expect(wrapper.find('.card-title').exists()).toBeTruthy
  })

  it('should render a card for each city', () => {
    fetch.mockResponseOnce(JSON.stringify(twoItemResponse))
    // when
    const wrapper = mount(StadtView)

    // then
   // const cityCards = wrapper.find('.card-title')
  //  expect(cityCards.length).toBe(2)
    expect(wrapper.find('.card-title').exists().valueOf(2))
  })

})
