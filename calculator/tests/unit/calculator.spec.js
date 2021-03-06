import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(App);
  });

  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('should add 1 to 4 and get 5', () => {
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('should subtract 4 from 7 and get 3', () => {
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('should multiply 3 by 5 and get 15', () => {
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('should deivide 21 by 7 and get 3', () => {
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('should concatenate multiple number button clicks', () => {
    wrapper.vm.numberClick('1');
    wrapper.vm.numberClick('0');
    wrapper.vm.numberClick('0');
    expect(wrapper.vm.runningTotal).to.equal(100)
  })

  it('should chain multiple operations together', () => {
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('/');
    wrapper.vm.numberClick('5');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(2)
  })

  it('should clear the running total without affecting the calculation', () => {
    wrapper.vm.numberClick('9');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('1');
    wrapper.vm.clearClick();
    expect(wrapper.vm.previousTotal).to.equal(9);
    expect(wrapper.vm.previousOperator).to.equal('+');
    expect(wrapper.vm.runningTotal).to.equal(0);
  })

})
