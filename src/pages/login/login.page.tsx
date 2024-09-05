/* eslint-disable no-console */
import { Button, Flex } from '@chakra-ui/react'
import { Input } from '@components/forms/input/input.component'
import { useLoginMutation } from 'integrations/quries/useLogin'
import { HookFormProvider } from 'providers/form.provider'
import { SyntheticEvent, useCallback } from 'react'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginDetailsSchema, LoginFormData } from './login.schema'

export const Login = () => {
  const { mutateAsync, isPending } = useLoginMutation()
  const navigate = useNavigate()

  const onSubmit = useCallback(
    async (values: LoginFormData, event: SyntheticEvent) => {
      event.preventDefault()
      try {
        await mutateAsync(values)
        navigate({
          pathname: '/dashboard',
        })
      } catch (error) {
        console.log(error)
      }
    },
    [mutateAsync, navigate],
  )
  return (
    <HookFormProvider
      onSubmit={onSubmit as SubmitHandler<FieldValues>}
      schema={LoginDetailsSchema}
    >
      <Flex
        maxW={['550px']}
        paddingBlock={['48px']}
        w="100%"
        alignItems={['center']}
        marginInline={['auto']}
        minH="60vh"
        direction={['column']}
        gap={['24px']}
      >
        <Input
          autoComplete="email"
          name="email"
          label="Email address"
          placeholder="you@info.com"
        />
        <Input
          autoComplete="current-password"
          name="password"
          label="Password"
          type="password"
          placeholder="Your password"
        />
        <Button
          type="submit"
          marginBlockStart={['40px']}
          width={['100%']}
          loadingText="Loging in..."
          colorScheme="green"
          isLoading={isPending}
          isDisabled={isPending}
        >
          Login
        </Button>
      </Flex>
    </HookFormProvider>
  )
}
