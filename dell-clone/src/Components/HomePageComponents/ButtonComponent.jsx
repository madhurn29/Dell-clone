import React from 'react'
import { Button } from '@chakra-ui/react'
function ButtonComponent({title,action}) {
  return (
    <Button colorScheme='blue' onClick={action}>{title}</Button>
  )
}

export default ButtonComponent