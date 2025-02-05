import React from "react";
import DiscountSection from "./SpecialDiscount.jsx";
import SpecialDiscount from "./SpecialDiscount.jsx";

export default {
  title: "Components/SpecialDiscount",
  component: SpecialDiscount,
};

const Template = (args) => <SpecialDiscount {...args} />;

export const Default = Template.bind({});
Default.args = {};
