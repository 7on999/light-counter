import React from 'react';

const useLocalStorage = (initialValue: number) => {

  const getItem = () => {
    const storageValue = localStorage.getItem('значение счетчика')
    if (storageValue) {
      return JSON.parse(storageValue)
    }
    return initialValue
  }
  const [value, setValue] = React.useState(getItem)

  React.useEffect(() => {
    localStorage.setItem('значение счетчика', JSON.stringify(value))
  }, [value])

  return [value, setValue]
}

export default useLocalStorage
