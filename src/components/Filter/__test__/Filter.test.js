import React from "react";
import { shallow } from "enzyme";
import { act } from "react-dom/test-utils";
import { Filter } from "../Filter";
import DatePicker from "../../DatePicker";
import { SearchTextField } from "../SearchTextField";
import { RadioButtonBox } from "../RadiobuttonBox";
import Button from "@material-ui/core/Button";
import { filterSettingProtocol } from '../../../containers/ProtocolsPage/helpers';
import translater from '../../../global/translation.json' 

describe("Filter", () => {
  const props = {
    filterAction: jest.fn(),
    settings: filterSettingProtocol(translater),
    userId: "123",
  };
  it("should be defined", () => {
    expect(<Filter />).toBeDefined();
  });

  it("should render correct structure", () => {
    const wrapper = shallow(<Filter {...props} />);
    expect(wrapper.find(RadioButtonBox)).toHaveLength(2);
    expect(wrapper.find(Button)).toHaveLength(2);
  });

  it("should render correct structure if user set advanced filter by serialNumber", () => {
    const wrapper = shallow(<Filter {...props} />);
    act(() =>
      wrapper.find(RadioButtonBox).at(1).props().filterHandler("serialNumber")
    );
    wrapper.update();
    expect(wrapper.find(SearchTextField)).toHaveLength(1);
  });

  it("should render correct structure if user set advanced filter by createDate", () => {
    const wrapper = shallow(<Filter {...props} />);
    act(() =>
      wrapper.find(RadioButtonBox).at(1).props().filterHandler("createDate")
    );
    wrapper.update();
    expect(wrapper.find(DatePicker)).toHaveLength(2);
  });

  it("should render correct structure if user set advanced filter by createDate", () => {
    const event = { preventDefault: jest.fn };
    const wrapper = shallow(<Filter {...props} />);
    wrapper.find("form").props().onSubmit(event);
    expect(props.filterAction).toHaveBeenCalled();
  });

});
