export const currentDate = () => {
  const today = new Date()
  return today.toLocaleDateString('en-US')
}

export const uniqueId = () => Date.now() + Math.random()