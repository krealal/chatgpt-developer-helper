import Answer from './answer'
import Dropdown from './dropdown'
import Question from './question'

export function Helper() {
  return (
    <main>
      <h1>chat gpt developer helper</h1>
      <Dropdown />
      <Question />
      <Answer text='test' />
    </main>
  )
}
