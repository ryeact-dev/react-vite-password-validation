import { useEffect, useState } from 'react';
import style from './App.module.css';

const PASSWORD_REQUIREMENTS = [
  { id: 1, text: '• At least 8 characters', regex: /.{8,}/ },
  { id: 2, text: '• At least 1 uppercase letter', regex: /[A-Z]/ },
  {
    id: 3,
    text: '• At least 4 numbers',
    regex: /^(?=(?:.*\d){4}).*$/,
  },
  {
    id: 4,
    text: '• At least 1 symbol',
    regex: /(?=.*[-+_!@#$%^&*.,?])/,
  },
];

export default function App() {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [openNewPassword, setOpenNewPassword] = useState(false);
  const [openConfirmPassword, setOpenConfirmPassword] = useState(false);
  const [requirements, setRequirements] = useState(PASSWORD_REQUIREMENTS);

  useEffect(() => {
    setRequirements(
      PASSWORD_REQUIREMENTS.map((req) => ({
        ...req,
        met: req.regex.test(newPassword),
      }))
    );
  }, [newPassword]);

  const height = !newPassword ? '310px' : !confirmPassword ? '380px' : '400px';
  const opacity = !newPassword ? '0' : '1';

  return (
    <div className={style.container} style={{ height }}>
      <h2>Password Validation</h2>
      <div className={style.wrapper}>
        <div className={style.input_wrapper}>
          <input
            type={openNewPassword ? 'text' : 'password'}
            id='new-password'
            name='new-password'
            className={style.input_field}
            placeholder='New password'
            onChange={(evt) => setNewPassword(evt.target.value)}
            required
          />
          <label htmlFor='new-password' className={style.input_label}>
            New password
          </label>
          {!openNewPassword ? (
            <svg
              className={style.input_icon}
              onClick={() => setOpenNewPassword(!openNewPassword)}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
              />
            </svg>
          ) : (
            <svg
              className={style.input_icon}
              onClick={() => setOpenNewPassword(!openNewPassword)}
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={2}
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
              />
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
              />
            </svg>
          )}
        </div>
        <ul className={style.password_requirement}>
          {requirements.map((req) => (
            <li
              key={req.id}
              className={` 
             ${req.met && style.requirement_met}`}
            >
              {req.text}
            </li>
          ))}
        </ul>

        <>
          <div
            className={style.input_wrapper}
            style={{
              opacity,
              visibility: opacity === '1' ? 'visible' : 'hidden',
            }}
          >
            <input
              id='confirm-password'
              type={openConfirmPassword ? 'text' : 'password'}
              className={style.input_field}
              placeholder='Confirm Password'
              onChange={(evt) => setConfirmPassword(evt.target.value)}
              required
            />
            <label htmlFor='confirm-password' className={style.input_label}>
              Confirm password
            </label>
            {!openConfirmPassword ? (
              <svg
                className={style.input_icon}
                onClick={() => setOpenConfirmPassword(!openConfirmPassword)}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88'
                />
              </svg>
            ) : (
              <svg
                className={style.input_icon}
                onClick={() => setOpenConfirmPassword(!openConfirmPassword)}
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={2}
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
                />
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
              </svg>
            )}
          </div>
          {!!confirmPassword.trim() && (
            <p>
              {newPassword === confirmPassword ? (
                <span className={style.password_match}>Password match</span>
              ) : (
                <span className={style.password_not_match}>
                  Password not match
                </span>
              )}
            </p>
          )}
        </>
      </div>
    </div>
  );
}
