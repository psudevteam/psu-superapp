import { fireEvent, render } from '@testing-library/react';
import { FieldText } from './index';
import { expect, describe, it, vi } from 'vitest';

describe('Test FieldText Functionality', () => {
  it('Should render correctly', () => {
    const { getByTestId } = render(<FieldText />);
    expect(getByTestId('input-text')).toBeInTheDocument();
  });

  it('Should be disabled', () => {
    const { getByTestId } = render(<FieldText disabled />);
    fireEvent.click(getByTestId('input-text'));
    expect(getByTestId('input-text')).toBeDisabled();
  });

  it('Should be not disabled', () => {
    const { getByTestId } = render(<FieldText disabled={false} />);
    fireEvent.click(getByTestId('input-text'));
    expect(getByTestId('input-text')).not.toBeDisabled();
  });

  it('Should be required', () => {
    const { getByTestId } = render(<FieldText required />);
    fireEvent.click(getByTestId('input-text'));
    expect(getByTestId('input-text')).toBeRequired();
  });

  it('Should be not required', () => {
    const { getByTestId } = render(<FieldText required={false} />);
    fireEvent.click(getByTestId('input-text'));
    expect(getByTestId('input-text')).not.toBeRequired();
  });

  it('Should be readOnly', () => {
    const { getByTestId } = render(<FieldText readOnly />);
    fireEvent.click(getByTestId('input-text'));
    expect(getByTestId('input-text')).toHaveAttribute('readonly');
  });

  it('Should be not readOnly', () => {
    const { getByTestId } = render(<FieldText readOnly={false} />);
    fireEvent.click(getByTestId('input-text'));
    expect(getByTestId('input-text')).not.toHaveAttribute('readonly');
  });

  it('Should have id', () => {
    const { getByTestId } = render(<FieldText name="test" />);
    expect(getByTestId('input-text')).toHaveAttribute('id', 'test');
  });

  it('Should have name', () => {
    const { getByTestId } = render(<FieldText name="test" />);
    expect(getByTestId('input-text')).toHaveAttribute('name', 'test');
  });

  it('Should have value', () => {
    const { getByTestId } = render(<FieldText value="test" />);
    expect(getByTestId('input-text')).toHaveValue('test');
  });

  it('Should have placeholder', () => {
    const { getByTestId } = render(<FieldText placeholder="test" />);
    expect(getByTestId('input-text')).toHaveAttribute('placeholder', 'test');
  });

  it('Should have type', () => {
    const { getByTestId } = render(<FieldText type="text" />);
    expect(getByTestId('input-text')).toHaveAttribute('type', 'text');
  });

  it('Should have maxLength', () => {
    const { getByTestId } = render(<FieldText maxLength={10} />);
    expect(getByTestId('input-text')).toHaveAttribute('maxlength', '10');
  });

  it('Should have minLength', () => {
    const { getByTestId } = render(<FieldText minLength={10} />);
    expect(getByTestId('input-text')).toHaveAttribute('minlength', '10');
  });

  it('Should have pattern', () => {
    const { getByTestId } = render(<FieldText pattern="test" />);
    expect(getByTestId('input-text')).toHaveAttribute('pattern', 'test');
  });

  it('Should have status', () => {
    const { getByTestId } = render(<FieldText status="error" />);
    expect(getByTestId('input-text')).toHaveAttribute('status', 'error');
  });

  it('Should onChange be called', () => {
    const onChangeFn = vi.fn();
    const { getByTestId } = render(<FieldText onChange={onChangeFn} />);
    fireEvent.change(getByTestId('input-text'), { target: { value: 'test' } });
    expect(onChangeFn).toHaveBeenCalled();
  });

  it('Should onBlur be called', () => {
    const onBlurFn = vi.fn();
    const { getByTestId } = render(<FieldText onBlur={onBlurFn} />);
    fireEvent.blur(getByTestId('input-text'));
    expect(onBlurFn).toHaveBeenCalled();
  });

  it('Should onFocus be called', () => {
    const onFocusFn = vi.fn();
    const { getByTestId } = render(<FieldText onFocus={onFocusFn} />);
    fireEvent.focus(getByTestId('input-text'));
    expect(onFocusFn).toHaveBeenCalled();
  });
});
