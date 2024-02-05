import Card from "../components/Card";
import './card.css';
import './button.css';

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    numberOfChildren: { type: "number", defaultValue: 4 },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
}

const Template = ({ numberOfChildren, ...args }) => (
  <Card {...args}>
    {[...Array(numberOfChildren).keys()].map(n => (
      <div class="usa-card__container"
        style={{
          width: "200px",
          height: "350px",
          backgroundColor: "white",
          border: "2px solid #e6e6e6",
          display: "flex",
          justifyContent: "left",
          alignItems: "left",
          borderRadius: "0.25rem"
        }}
      >
        <div class="usa-card__header">Card {n + 1}</div>
        <div class="usa-card__body">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.</div>
        <div class="usa-card__footer">
          <a target="_blank" type="button" class="storybook-button storybook-button--medium storybook-button--primary" href="https://designsystem.digital.gov/components/card/"
            style={{
              fontSize: "1rem",
              backgroundColor: "#3f57a6",
              textDecoration: "none"
              }}>Click for more info</a>
        </div>
      </div>
    ))}
  </Card>
)

export const Horizontal = Template.bind({})
Horizontal.args = {
  direction: "row",
  numberOfChildren: 3,
  spacing: 2,
  wrap: true,
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis earum tenetur quo cupiditate, eaque qui officia recusandae.'
}

export const Vertical = Template.bind({})
Vertical.args = {
  direction: "column",
  numberOfChildren: 2,
  spacing: 2,
  wrap: false,
}