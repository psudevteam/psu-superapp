import { fireEvent, render } from '@testing-library/react';
import { InputRadio } from './index';
import { expect, describe, it, vi } from 'vitest';

describe('Test InputRadio Functionality', () => {
  it('Should render correctly', () => {
    const { getByTestId } = render(<InputRadio />);
    expect(getByTestId('input-radio')).toBeInTheDocument();
  });

  it('Should be checked', () => {
    const { getByTestId } = render(<InputRadio />);
    fireEvent.click(getByTestId('input-radio'));
    expect(getByTestId('input-radio')).toBeChecked();
  });

  it('Should be not checked', () => {
    const { getByTestId } = render(
      <InputRadio checked={false} defaultChecked={false} />
    );
    fireEvent.click(getByTestId('input-radio'));
    expect(getByTestId('input-radio')).not.toBeChecked();
  });

  it('Should be disabled', () => {
    const { getByTestId } = render(<InputRadio disabled />);
    fireEvent.click(getByTestId('input-radio'));
    expect(getByTestId('input-radio')).toBeDisabled();
  });

  it('Should be not disabled', () => {
    const { getByTestId } = render(<InputRadio disabled={false} />);
    fireEvent.click(getByTestId('input-radio'));
    expect(getByTestId('input-radio')).not.toBeDisabled();
  });

  it('Should be required', () => {
    const { getByTestId } = render(<InputRadio required />);
    fireEvent.click(getByTestId('input-radio'));
    expect(getByTestId('input-radio')).toBeRequired();
  });

  it('Should be not required', () => {
    const { getByTestId } = render(<InputRadio required={false} />);
    fireEvent.click(getByTestId('input-radio'));
    expect(getByTestId('input-radio')).not.toBeRequired();
  });

  it('Should be readOnly', () => {
    const { getByTestId } = render(<InputRadio readOnly />);
    fireEvent.click(getByTestId('input-radio'));
    expect(getByTestId('input-radio')).toHaveAttribute('readonly');
  });

  it('Should be not readOnly', () => {
    const { getByTestId } = render(<InputRadio readOnly={false} />);
    fireEvent.click(getByTestId('input-radio'));
    expect(getByTestId('input-radio')).not.toHaveAttribute('readonly');
  });

  it('Should have id', () => {
    const { getByTestId } = render(<InputRadio id="test" />);
    expect(getByTestId('input-radio')).toHaveAttribute('id', 'test');
  });

  it('Should have name', () => {
    const { getByTestId } = render(<InputRadio name="test" />);
    expect(getByTestId('input-radio')).toHaveAttribute('name', 'test');
  });

  it('Should have value', () => {
    const { getByTestId } = render(<InputRadio value="test" />);
    expect(getByTestId('input-radio')).toHaveAttribute('value', 'test');
  });

  it('Should called onChange', () => {
    const onChange = vi.fn();
    const { getByTestId } = render(<InputRadio onChange={onChange} />);
    fireEvent.click(getByTestId('input-radio'));
    expect(onChange).toHaveBeenCalled();
  });
});
