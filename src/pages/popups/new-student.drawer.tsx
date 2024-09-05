import {
  Box,
  Button,
  CloseButton,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
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
        overflowY="hidden"
        autoFocus={false}
        position={['relative']}
      >
        <HookFormProvider
          onSubmit={onSubmit as SubmitHandler<FieldValues>}
          schema={AddStudentSchema}
        >
          <Box height={['100%']} padding={['16px']}>
            <Flex justifyContent={['space-between']}>
              <Text
                marginBlockEnd={['16px']}
                fontSize={['20px']}
                fontWeight={['500']}
              >
                Create new student
              </Text>
              <CloseButton onClick={onClose} />
            </Flex>
            <Stack height={['100%']} spacing={['8px']}>
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
                colorScheme="green"
                marginBlockEnd={[
                  'var(--chakra-header-height-base-positivestring)',
                  'var(--chakra-header-height-sm-positivestring)',
                  'var(--chakra-header-height-md-positivestring)',
                  'var(--chakra-header-height-lg-positivestring)',
                ]}
                marginBlockStart={['auto']}
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
