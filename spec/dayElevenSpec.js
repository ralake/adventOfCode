import { passwordGenerator } from '../src/dayEleven'

describe('passwordGenerator', () => {
  it('can find the next legal password when givent he current password in the test case', () => {
    expect(passwordGenerator('abcdefgh')).toEqual('abcdffaa')
  })

  it('can find the next legal password when givent he current password', () => {
    expect(passwordGenerator('cqjxjnds')).toEqual('cqjxxyzz')
  })

  it('can find the next legal password when givent he current password', () => {
    expect(passwordGenerator('cqjxxyzz')).toEqual('cqkaabcc')
  })
})
