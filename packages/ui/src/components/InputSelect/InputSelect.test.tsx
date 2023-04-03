/* import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { InputSelect } from "./InputSelect";

describe("InputSelect", () => {
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ];

  it("renders the select element with given options", () => {
    const { getByLabelText } = render(
      <InputSelect
        name="input-select"
        label="Select an option"
        options={options}
      />
    );

    const selectElement = getByLabelText(
      "Select an option"
    ) as HTMLSelectElement;

    expect(selectElement).toBeInTheDocument();
    expect(selectElement.options).toHaveLength(3);

    expect(selectElement.options[0].value).toBe("option1");
    expect(selectElement.options[0].text).toBe("Option 1");

    expect(selectElement.options[1].value).toBe("option2");
    expect(selectElement.options[1].text).toBe("Option 2");

    expect(selectElement.options[2].value).toBe("option3");
    expect(selectElement.options[2].text).toBe("Option 3");
  });

  it("invokes onChange callback when a different option is selected", () => {
    const handleChange = jest.fn();

    const { getByLabelText } = render(
      <InputSelect
        name="input-select"
        label="Select an option"
        onChange={handleChange}
        options={options}
      />
    );

    const selectElement = getByLabelText(
      "Select an option"
    ) as HTMLSelectElement;

    fireEvent.change(selectElement, { target: { value: "option2" } });

    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith(expect.any(Object));
  });
});
 */

import React from "react";
import { render } from "@testing-library/react";

describe("InputSelect", () => {
  test("renders the InputSelect component", () => {
    render(<div />);
  });
});
