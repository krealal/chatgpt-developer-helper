import Answer from './answer'
import Dropdown from './dropdown'
import Question from './question'

export function Helper() {
  return (
    <main>
      <h1>chat gpt developer helper</h1>
      <Dropdown
        title='What you want me to do? '
        items={[
          { label: 'refactor' },
          { label: 'make me a test' },
          { label: 'explain me the code' }
        ]}
      />
      <Dropdown
        title='What language? '
        items={[
          { label: 'java' },
          { label: 'javascript' },
          { label: 'typescript' }
        ]}
      />
      <Question />
      <Answer text='test' />
    </main>
  )
}
