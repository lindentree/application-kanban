import { shallowMount } from '@vue/test-utils'
import ApplicantCard from '@/components/ApplicantCard.vue'

describe('ApplicantCard.vue', () => {
  it('renders props.info when passed', () => {
    const info = {
       name: 'Linden',
       contact: '1234567'

    }
    const wrapper = shallowMount(ApplicantCard, {
      props: { info }
    })
    expect(wrapper.html().includes("Linden")).toBe(true)
  })
})
