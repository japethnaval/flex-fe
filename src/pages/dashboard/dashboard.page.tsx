import { AddIcon, DeleteIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Flex,
  IconButton,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react'
import { useStudentsQuery } from 'integrations/quries/useStudents'
import { useCallback } from 'react'
import uiStore from 'store/ui.store'
import { GenericObject } from 'types/globals'

export const Dashboard = () => {
  const { data } = useStudentsQuery()
  const { setActiveDrawer, setActiveModal, setSelectedStudent } = uiStore()

  const handleAddNewStudent = useCallback(
    () => setActiveDrawer('add-new-student'),
    [setActiveDrawer],
  )

  const handleSelectStudent = useCallback(
    (student: GenericObject) => () => {
      setActiveModal('remove-student')
      setSelectedStudent(student)
    },
    [setActiveModal, setSelectedStudent],
  )

  return (
    <Box paddingBlock={['32px']}>
      <Text paddingBlockEnd={['64px']} fontSize={['24px']} fontWeight="bold">
        Students of SY 2024 - 2025
      </Text>
      <Flex marginBlockEnd={['24px']}>
        <Button
          aria-label="add"
          marginInlineStart={['auto']}
          colorScheme="green"
          onClick={handleAddNewStudent}
          leftIcon={<AddIcon />}
        >
          Add New Student
        </Button>
      </Flex>
      <TableContainer
        border="1px solid"
        borderColor="gray.100"
        borderRadius={['12px']}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Student Id</Th>
              <Th>First Name</Th>
              <Th>Last Name</Th>
              <Th>DOB</Th>
              <Th>Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.map((student: GenericObject) => (
              <Tr key={student.id}>
                <Td>{student.id}</Td>
                <Td>{student.first_name}</Td>
                <Td>{student.last_name}</Td>
                <Td>{student.DOB}</Td>
                <Td>
                  <IconButton
                    aria-label="delete"
                    colorScheme="red"
                    icon={<DeleteIcon />}
                    onClick={handleSelectStudent(student)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  )
}
