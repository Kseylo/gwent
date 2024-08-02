import { Container, Image, Title, Text, Button, Center } from '@mantine/core'
import { Link } from 'react-router-dom'
import { Routes } from '@/shared/config/routes'

export default function Home() {
  return (
    <Container>
      <Image src={'/hero.avif'} radius={'sm'} alt={'hero'} />
      <Title my={'md'} ta={'center'}>
        Карточная игра во вселенной Ведьмака
      </Title>
      <Text size={'xl'} ta={'center'}>
        Гвинт — это карточная мини-игра. Цель игры — набрать больше очков, чем
        противник, используя различные карты. Игроки поочередно выкладывают
        карты, формируя свою боевую линию, пока не будет определен победитель.
      </Text>
      <Center mt={'xl'}>
        <Button size={'xl'} component={Link} to={Routes.GAME}>
          Начать игру
        </Button>
      </Center>
    </Container>
  )
}
