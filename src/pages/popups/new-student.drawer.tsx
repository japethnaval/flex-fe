import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Stack,
  Text,
} from '@chakra-ui/react'
import { Input } from '@components/forms/input/input.component'
import { useQueryClient } from '@tanstack/react-query'
import { useAddStudentMutation } from 'integrations/quries/useAddStudent'
import {
  AddStudentFormData,
  AddStudentSchema,
} from 'pages/dashboard/schemas/add-student.schema'
import HookFormProvider from 'providers/form.provider'
import { SyntheticEvent, useCallback } from 'react'
import { FieldValues, SubmitHandler } from 'react-hook-form'
import uiStore from 'store/ui.store'

export const NewStudentDrawer = () => {
  const { activeDrawer, setActiveDrawer } = uiStore()
  const { mutateAsync, isPending } = useAddStudentMutation()
  const queryClient = useQueryClient()

  const onClose = useCallback(() => {
    setActiveDrawer(undefined)
  }, [setActiveDrawer])

  const onSubmit = useCallback(
    async (values: AddStudentFormData, event: SyntheticEvent) => {
      event.preventDefault()

      try {
        await mutateAsync(values)
        queryClient.invalidateQueries({ queryKey: ['STUDENTS_LIST'] })
        onClose()
      } catch (error) {
        console.log(error)
      }
    },
    [mutateAsync],
  )

  return (
    <Drawer
      isOpen={activeDrawer === 'add-new-student'}
      placement="right"
      size="md"
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent
        paddingBlockStart={[0]}
        height={['100%']}
        overflowY="auto"
        autoFocus={false}
        position={['relative']}
      >
        <HookFormProvider
          onSubmit={onSubmit as SubmitHandler<FieldValues>}
          schema={AddStudentSchema}
        >
          <Box padding={['16px']}>
            <Text
              marginBlockEnd={['16px']}
              fontSize={['20px']}
              fontWeight={['500']}
            >
              Create new student
            </Text>
            <Stack height={['100%']} spacing={['16px']}>
              <Input
                name="student_id"
                label="Student Id"
                placeholder="Student Id"
              />
              <Input
                name="first_name"
                label="First name"
                placeholder="Given name"
              />
              <Input name="last_name" label="Last name" placeholder="Surname" />
              <Input
                name="DOB"
                label="Date of birth"
                placeholder="Birth date"
              />
              <Button
                colorScheme="blue"
                position="absolute"
                bottom={['16px']}
                right={['16px']}
                left={['16px']}
                isLoading={isPending}
                isDisabled={isPending}
                loadingText="Submitting"
                type="submit"
              >
                Submit
              </Button>
            </Stack>
          </Box>
        </HookFormProvider>
      </DrawerContent>
    </Drawer>
  )
}
