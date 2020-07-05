import React from "react";
import { shallow } from "enzyme";
import { SearchTextField } from "../SearchTextField";
import TextField from '@material-ui/core/TextField';

describe("SearchTextField", () => {
  const props = {
    innerFilterHandler: jest.fn(),
    placeholder: 'test'
  };

  it("should be defined", () => {
    expect(<SearchTextField />).toBeDefined();
  });

  it("should render correct structure", () => {
    const wrapper = shallow(<SearchTextField {...props} />);
    expect(wrapper.find(TextField)).toHaveLength(1);
  });

  it("should render correct structure", () => {
    const event = { target: { value: "test" } };
    const wrapper = shallow(<SearchTextField {...props} />);
    wrapper.find(TextField).props().onChange(event);
    expect(props.innerFilterHandler).toHaveBeenCalled();
  });
});
