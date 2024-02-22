import { describe, expect, it, vi } from 'vitest'

import { fireEvent, render } from '@testing-library/react'

import { Button, ButtonProps } from '../..'

const defineColor: Array<Pick<ButtonProps, 'color'> & { expected: string }> = [
  { color: 'red', expected: 's-btn-red' },
  { color: 'orange', expected: 's-btn-orange' },
  { color: 'green', expected: 's-btn-green' },
  { color: 'blue', expected: 's-btn-blue' },
]

const mountButton = (props: ButtonProps) => {
  return render(<Button {...props}>Hello</Button>)
}

describe('btn Click', () => {
  const handleCallback = vi.fn()
  const btn = mountButton({ onClick: handleCallback })
  it('btn click event excuted correctly', () => {
    fireEvent.click(btn.container.firstChild as HTMLDivElement)
    expect(handleCallback).toHaveBeenCalled()
  })
})

describe.each(defineColor)('Button color test', ({ color, expected }) => {
  it('btn color', () => {
    const btn = mountButton({ color })
    const element = btn.container.firstChild as HTMLDivElement
    expect(element.classList.contains(expected)).toBeTruthy()
  })
})
