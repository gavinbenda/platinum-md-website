import { shallowMount } from '@vue/test-utils'
import Index from '@/pages/index.vue'

describe('Mac download link', () => {
  const originalNavigator = { ...global.navigator }

  afterEach(() => {
    Object.defineProperty(global, 'navigator', { value: originalNavigator, configurable: true })
  })

  test('uses m1 dmg for arm architecture', () => {
    Object.defineProperty(global.navigator, 'userAgentData', { value: { architecture: 'arm' }, configurable: true })
    const wrapper = shallowMount(Index, { mocks: { $device: { isMacOS: true, isIos: false, isWindows: false, isMobile: false } }, stubs: ['font-awesome-icon', 'b-button', 'b-modal'] })
    expect(wrapper.vm.macDownloadLink).toContain('platinum-md-1.2.1-m1-hotfix.dmg')
  })

  test('uses intel dmg for non-arm architecture', () => {
    Object.defineProperty(global.navigator, 'userAgentData', { value: { architecture: 'x86' }, configurable: true })
    const wrapper = shallowMount(Index, { mocks: { $device: { isMacOS: true, isIos: false, isWindows: false, isMobile: false } }, stubs: ['font-awesome-icon', 'b-button', 'b-modal'] })
    expect(wrapper.vm.macDownloadLink).toContain('platinum-md-1.2.1.dmg')
  })
})
