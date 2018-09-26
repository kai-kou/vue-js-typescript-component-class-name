import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';

import App from '@/App.vue';
import HelloWorld from '@/components/HelloWorld.vue';
import Hoge from '@/components/Hoge.vue';
import Hoge2 from '@/components/Hoge2.vue';

describe('App.vue', () => {
  it('Hogeコンポーネントが表示されるか', () => {
    const wrapper = shallowMount(App);
    wrapper.is(App);
    // console.log(wrapper.html());
    expect(wrapper.findAll(HelloWorld)).to.length(1);
    expect(wrapper.findAll(Hoge)).to.length(1);
    expect(wrapper.findAll(Hoge2)).to.length(1);
  });
});
