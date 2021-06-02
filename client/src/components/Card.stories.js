import Card from './Card'

export default {
  title: 'Card',
  component: Card,
}

const Template = args => <Card {...args} />

export const Default = Template.bind({})
Default.args = {
  text: 'Hello World',
  author: 'Internet',
}

export const longAuthor = Template.bind({})
longAuthor.args = {
  text: 'What does mongo mean',
  author: 'Hans Otto Heinrich van Blau',
}
