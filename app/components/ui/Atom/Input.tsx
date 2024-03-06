import React, { FC, ChangeEvent } from "react";

// Input 컴포넌트는 입력 필드를 나타내는 컴포넌트입니다.
interface InputProps {
  // 입력 필드의 타입입니다.
  type: string;
  // 입력 필드에 표시될 플레이스홀더입니다.
  placeholder?: string;
  // 입력 필드의 값입니다.
  value: string;
  // 입력 필드의 값이 변경될 때 호출되는 콜백 함수입니다.
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * Input 컴포넌트는 입력 필드를 나타내는 컴포넌트입니다.
 *
 * @param {InputProps} props
 * @param {string} props.type 입력 필드의 타입입니다.
 * @param {string} props.placeholder 입력 필드에 표시될 플레이스홀더입니다.
 * @param {string} props.value 입력 필드의 값입니다.
 * @param {(event: ChangeEvent<HTMLInputElement>) => void} props.onChange 입력 필드의 값이 변경될 때 호출되는 콜백 함수입니다.
 * @returns {JSX.Element} 입력 필드를 나타내는 컴포넌트를 반환합니다.
 *
 * @example
 * <Input type="text" placeholder="이름" value={name} onChange={onChangeName} />
 *
 */
const Input: FC<InputProps> = ({ type, placeholder, value, onChange }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="border rounded-lg py-2 px-3"
    />
  );
};

export default Input;
