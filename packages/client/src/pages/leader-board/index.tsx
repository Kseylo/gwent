import {
  Flex,
  Pagination,
  Paper,
  Select,
  Stack,
  Table,
  Title,
} from '@mantine/core'
import { useState } from 'react'

interface Leader {
  id: number
  // TODO: Поменять на User
  user: any
  mmr: number
  total_matches: number
}

// @ts-expect-error
const mockData: Leader[] = Array.from({ length: 5 }).fill({
  id: 1,
  user: { display_name: 'Ivan' },
  mmr: 100,
  total_matches: 20,
})

export default function LeaderBoard() {
  const [page, setPage] = useState(1)

  const rows = mockData.map((leader, index) => (
    <Table.Tr key={index}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{leader.user.display_name}</Table.Td>
      <Table.Td>{leader.total_matches}</Table.Td>
      <Table.Td>{leader.mmr}</Table.Td>
    </Table.Tr>
  ))

  return (
    <Paper radius={'md'} p={'xl'} w={'70rem'} withBorder>
      <Stack>
        <Title order={2}>Таблица лидеров</Title>
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>#</Table.Th>
              <Table.Th>Имя</Table.Th>
              <Table.Th>Кол-во матчей</Table.Th>
              <Table.Th>MMR</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        <Flex justify="space-between">
          <Select placeholder="Лимит" data={['20', '40', '60', ' 80', '100']} />
          <Pagination value={page} onChange={setPage} total={10} />
        </Flex>
      </Stack>
    </Paper>
  )
}
