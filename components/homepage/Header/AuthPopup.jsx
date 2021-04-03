import React,{useState} from 'react'
import {FaTimes} from "react-icons/fa";
import { Modal } from 'react-responsive-modal';
import Login from './Login';
import style_modal from '../../../styles/Modal.module.css';
import Signup from './Signup';
const AuthPopup = ({isopen}) => {
    const [open, setOpen] = useState(isopen);

    const onCloseModal = () => setOpen(false);
    const closeIcon = <svg style={{ display: 'none' }}></svg>;
    const [method, setMethod] = useState('login');
    return (
        <div>
            <Modal
        open={open}
        onClose={onCloseModal}
        center
        classNames={{
          overlay: style_modal.customOverlay,
          modal: style_modal.customModal,
        }}
        closeIcon={closeIcon}
      >
        {/* <Login /> */}
        <>
        <i style={{color:"gray",cursor:"pointer"}} onClick={onCloseModal}><FaTimes/></i>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <p
              style={{
                cursor: 'pointer',
                color: `${method === 'login' ? 'wheat' : 'gray'}`,
              }}
              onClick={(res) => {
                setMethod('login');
              }}
            >
              Login
            </p>
            <p
              style={{
                cursor: 'pointer',
                color: `${method === 'signup' ? 'wheat' : 'gray'}`,
              }}
              onClick={(res) => {
                setMethod('signup');
              }}
            >
              Signup
            </p>
          </div>
          <hr className="divider"></hr>

          {method === 'login' ? <Login closeModal={onCloseModal} hello={"hello"}/> : <Signup />}
          <br />
          <hr className="divider"></hr>
          {/* By submitting this form, you confirm that you agree to our Terms of Service and Privacy Policy. */}
          <div style={{ textAlign: 'center' }}>
            {method === 'login' ? (
              <p style={{ color: 'gray', fontSize: 'x-small' }}>
              Don’t have an account?{' '}
              <span
                style={{ color: 'wheat', cursor: 'pointer' }}
                onClick={(res) => {
                  setMethod('signup');
                }}
              >
                Signup Here
              </span>
            </p>
            ) : (
              <>
              <p style={{ color: 'gray', fontSize: 'x-small' }}>
                  Already have an account?{' '}
                  <span
                    style={{ color: 'wheat', cursor: 'pointer' }}
                    onClick={(res) => {
                      setMethod('login');
                    }}
                  >
                    Login Here
                  </span>
                </p>
                
              <p style={{ color: 'gray', fontSize: 'x-small' }}>
                By submitting this form, you confirm that you agree to our{' '}
                <Link href="privacy-policy">
                  <span style={{ color: 'wheat', cursor: 'pointer' }}>
                    Terms of Service and Privacy Policy
                  </span>
                </Link>
              </p>
              </>
            )}
          </div>
        </>
      </Modal>
        </div>
    )
}

export default AuthPopup
