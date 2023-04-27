import { render, screen } from '@testing-library/react';
import Home from '../../src/app/page';

describe('Home', () => {
  it('renders a heading', () => {
    const { container } = render(<Home />);

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    });
    // Next Template Home

    expect(heading).toBeInTheDocument();

    // snapshot은 쓰지 말것
    // Ref: https://velog.io/@k7120792/%EB%B2%88%EC%97%AD-%EB%A6%AC%EC%95%A1%ED%8A%B8-%EC%8A%A4%EB%83%85%EC%83%B7-%ED%85%8C%EC%8A%A4%ED%8C%85%EC%9D%98-%EB%8B%A8%EC%A0%90%EB%93%A4-o8jypesqnr
    // expect(container).toMatchSnapshot();
  });
});
