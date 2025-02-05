import React from "react";
import DiscountSection from "./DiscountSection.jsx";

export default {
  title: "Components/DiscountSection",
  component: DiscountSection,
};

const Template = (args) => <DiscountSection {...args} />;

export const Default = Template.bind({});
Default.args = {};
