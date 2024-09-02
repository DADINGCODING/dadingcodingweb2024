import React from 'react';

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {}

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const Input: React.FC<InputProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
        {label}
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...props}
      />
    </div>
  );
};

const TextArea: React.FC<TextAreaProps> = ({ label, ...props }) => {
  return (
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor={props.id}>
        {label}
      </label>
      <textarea
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        {...props}
      />
    </div>
  );
};

interface FormComponent extends React.FC<FormProps> {
  Input: React.FC<InputProps>;
  TextArea: React.FC<TextAreaProps>;
}

const Form: FormComponent = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

Form.Input = Input;
Form.TextArea = TextArea;

export default Form;