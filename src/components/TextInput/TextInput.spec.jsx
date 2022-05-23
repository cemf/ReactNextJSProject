import { getByText, render, screen } from '@testing-library/react'

import { TextInput } from '.'

describe('<TextInput />', () => {
  it('should have a value of searchValue ', () => {
    const fn = jest.fn()
    
    
    render(<TextInput handleChange={fn} searchValue={'testando'} />)
    const input = screen.getByPlaceholderText("type your search");
    expect(input).toBeInTheDocument()
    
  });

  it('should call handleChange function on each key press ', () => {
    const fn = jest.fn()
    render(<TextInput handleChange={fn} searchValue={'testando'} />)



    
  })

//   it('should match snapshot', () => {
//     const {container} = render(<TextInput />)

//     expect(container.firstChild).toMatchSnapshot();

//   })
})


