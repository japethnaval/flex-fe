'use client'

import {
  Box,
  Button,
  Flex,
  Modal,
  ModalContent,
  ModalOverlay,
  Text,
} from '@chakra-ui/react'
import { useRemoveStudentMutation } from 'integrations/quries/useRemoveStudent'
import { useCallback } from 'react'
import { get } from 'react-hook-form'
import uiStore from 'store/ui.store'

export const DeleteStudentModal = () => {
  const { activeModal, selectedStudent, setActiveModal } = uiStore()
  const { mutateAsync, isPending } = useRemoveStudentMutation()

  const onClose = useCallback(() => {
    setActiveModal(undefined)
  }, [setActiveModal])

  const onClickYes = useCallback(async () => {
    const id = get(selectedStudent, 'id')
    try {
      await mutateAsync({ student_id: id })
      onClose()
    } catch (error) {
      console.log(error)
    }
  }, [selectedStudent, mutateAsync, onClose])

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={activeModal === 'remove-student'}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent
        containerProps={{
          alignItems: 'center',
        }}
        padding={['24px 16px']}
      >
        <Box>
          <Text fontSize={['20px']} fontWeight={['500']}>
            Wait!
          </Text>
          <Text paddingBlock={['16px']}>
            {` Are you sure you want to remove student ${selectedStudent?.first_name} ${selectedStudent?.last_name}`}
          </Text>
          <Flex gap={['16px']}>
            <Button
              isDisabled={isPending}
              isLoading={isPending}
              onClick={onClickYes}
              flex={1}
              colorScheme="red"
            >
              Yes
            </Button>
            <Button
              onClick={onClose}
              _hover={{
                background: '#DCDDE0',
              }}
              flex={1}
              colorScheme="gray"
              isDisabled={isPending}
            >
              No
            </Button>
          </Flex>
        </Box>
      </ModalContent>
    </Modal>
  )
}
