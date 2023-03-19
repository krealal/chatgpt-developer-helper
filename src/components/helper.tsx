import { useState } from 'react'
import Answer from './answer'
import Dropdown from './dropdown'
import Question from './question'

export function Helper() {
  const [selectedAction, setSelectedAction] = useState('')

  const handleActionSelect = (selected: string) => {
    setSelectedAction(selected)
  }

  const handleLanguageSelect = (selected: string) => {
    // handle language select
  }

  const handleTestTypeSelect = (selected: string) => {
    // handle test type select
  }

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
        onSelect={handleActionSelect}
      />
      <Dropdown
        title='What language? '
        items={[
          { label: 'java' },
          { label: 'javascript' },
          { label: 'typescript' }
        ]}
        onSelect={handleLanguageSelect}
      />
      {selectedAction === 'make me a test' && (
        <Dropdown
          title='What type of test? '
          items={[
            { label: 'unit test' },
            { label: 'integration test' },
            { label: 'end-to-end test' }
          ]}
          onSelect={handleTestTypeSelect}
        />
      )}
      <Question />
      <Answer text='test' />
    </main>
  )
}
