import React from 'react';
import './FormsControl.scss';

export const Textarea: React.FC<any> = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div>
      <input
        {...input}
        {...props}
        className={hasError ? 'formcontroll' : props.className}
        placeholder={hasError ? `${input.name} ${meta.error}` : props.placeholder}
      />
      {hasError ? (
        <div className="formcontroll__warn">
          <span>
            {input.name} {meta.error}
          </span>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
