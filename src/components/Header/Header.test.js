import {render, screen} from "@testing-library/react";
import Header from "./Header"


test("renders learn react link", () => {

    render(<Header/>);
    const h1Element = screen.getByText(/Information about cryptocurrencies/i);
    expect(h1Element).toBeInTheDocument();
})