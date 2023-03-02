import { useState, useEffect, useRef } from 'react'

// cálculo total de segundos
const calculateTotalSeconds = (time: string) => {
  const timeComponents = time.split(':')
  const totalSeconds =
    parseInt(timeComponents[0]) * 3600 +
    parseInt(timeComponents[1]) * 60 +
    parseInt(timeComponents[2])
  return totalSeconds
}

// cálculo tempo do componente
const calculateTimeComponents = (seconds: number) => {
  const hoursElapsed = Math.floor(seconds / 3600)
  const minutesElapsed = Math.floor((seconds % 3600) / 60)
  const secondsRemaining = seconds % 60
  return { hoursElapsed, minutesElapsed, secondsRemaining }
}

// formatação padrão
const formatTimeUnit = (unit: number) => {
  return unit < 10 ? `0${unit}` : unit.toString()
}

// decremento do tempo
const countDownTimer = (time: string) => {
  // Valida o formato da string
  if (!/^\d{2}:\d{2}:\d{2}$/.test(time)) {
    throw new Error('Formato inválido! Use hh:mm:ss')
  }

  const initialCountdownResult = time
  const [countdownResult, setCountdownResult] = useState(initialCountdownResult)
  const countdownResultRef = useRef(countdownResult)

  // Atribuindo a variável o valor antigo do state(countdownResult) ciclo(atualização)
  useEffect(() => {
    countdownResultRef.current = countdownResult
  }, [countdownResult])

  useEffect(() => {
    let intervalId = setInterval(() => {
      // atribuo o valor atual a variável
      const currentCountdownResult = countdownResultRef.current
      let seconds = calculateTotalSeconds(currentCountdownResult)
      seconds--

      if (seconds < 0) {
        clearInterval(intervalId)
        setCountdownResult('Esgotado!')
      } else {
        const { hoursElapsed, minutesElapsed, secondsRemaining } =
          calculateTimeComponents(seconds)

        const displayHours = formatTimeUnit(hoursElapsed)
        const displayMinutes = formatTimeUnit(minutesElapsed)
        const displaySeconds = formatTimeUnit(secondsRemaining)

        setCountdownResult(
          `${displayHours}:${displayMinutes}:${displaySeconds}`
        )
      }
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  return countdownResult
}

export default countDownTimer
