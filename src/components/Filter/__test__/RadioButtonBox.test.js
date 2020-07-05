import React from "react";
import { shallow } from "enzyme";
import { RadioButtonBox } from "../RadiobuttonBox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";

describe("RadioButtonBox", () => {
  const props = {
    filterHandler: jest.fn(),
    value: "title",
    filters: [
      {
        value: "test",
        label: "test",
      },
      {
        value: "test2",
        label: "test2",
      },
    ],
  };

  it("should be defined", () => {
    expect(<RadioButtonBox />).toBeDefined();
  });

  it("should render correct structure", () => {
    const wrapper = shallow(<RadioButtonBox {...props} />);
    expect(wrapper.find(FormControlLabel)).toHaveLength(2);
  });

  it("should render correct structure", () => {
    const event = { target: { value: "test" } };
    const wrapper = shallow(<RadioButtonBox {...props} />);
    wrapper.find(RadioGroup).props().onChange(event);
    expect(props.filterHandler).toHaveBeenCalled();
  });
});
