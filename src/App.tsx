import { useState } from 'react'
import { Button } from './components/common/Button'
import { ButtonVariant } from './components/common/Button/Button.constants'

export function App() {
  const [count, setCount] = useState(0)

  return (
  <>
  {count}
  <Button onClick={() => setCount(count + 1 )}>
    Quero Adotar
    </Button>
  <Button variant={ButtonVariant.Default} onClick={() => setCount(count + 2 )}>
    Tenho um Abrigo
    </Button>
  <Button variant={ButtonVariant.Disabled} onClick={() => setCount(count - 1 )}>
    Desabilitando
    </Button>
  <Button variant={ButtonVariant.Text} onClick={() => setCount(count - 1 )}>
    Texto
    </Button>
  <Button variant={ButtonVariant.Outlined} onClick={() => setCount(count - 1 )}>
    Out
    </Button>
 </>)
}
