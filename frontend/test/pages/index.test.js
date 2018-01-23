import React from 'react'
import { shallow } from 'enzyme'
import { describe, expect, it } from 'jest'

import Index from '../../pages/index'

describe('Pages::Index', () => {
  it('Index title has "Decentralized Energy Marketplace | PowerPiper"', () => {
    const app = shallow(<Index />)

    expect(app.find('title').text()).toEqual('Decentralized Energy Marketplace | PowerPiper')
  })
})
