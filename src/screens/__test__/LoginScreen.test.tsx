import { screen } from '@testing-library/react';
import { renderWithProviders } from "../../utils/test-utils";
import LoginScreen from '../LoginScreen';

test(`renders correctly`, () => {
  renderWithProviders(<LoginScreen />)
  expect(screen.getByText(/其他号码登录/i)).toBeInTheDocument()
});