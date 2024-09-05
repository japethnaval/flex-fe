/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import { InputProps, Text } from '@chakra-ui/react'
import { memo } from 'react'
import { get, useFormContext } from 'react-hook-form'
import { InputStyles } from './input.styles'

export const Input = ({
  name,
  label,
  type,
  placeholder,
  as = 'input',
  ...props
}: InputProps & { label?: string }) => {
  const {
    register,
    formState: { errors, defaultValues },
  } = useFormContext()
  const input = register(name!, {
    value: props.value,
    valueAsNumber: type === 'number',
  })

  const isInvalid = !!get(errors, name)

  return (
    <InputStyles.Container w={props.w || '100%'}>
      {label && (
        <Text
          color="gray.200"
          fontWeight="normal"
          marginBlockEnd={['4px', '4px', '6px']}
        >
          {label}
        </Text>
      )}
      <InputStyles.Input
        as={as}
        h={['48px', '44px']}
        fontSize={['16px']}
        _focusWithin={{
          boxShadow: 'none',
        }}
        _focusVisible={{
          borderColor: 'green.500',
        }}
        placeholder={placeholder}
        isInvalid={isInvalid}
        variant="outline"
        type={type}
        defaultValue={get(defaultValues, name)}
        {...props}
        {...input}
      />

      {get(errors, name) && (
        <Text color="red.500">
          {get(errors, `${name}.message`, '') as string}
        </Text>
      )}
    </InputStyles.Container>
  )
}

export default memo(Input)
