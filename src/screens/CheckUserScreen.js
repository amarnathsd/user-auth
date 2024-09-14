// src/screens/CheckUserScreen.js
import React, { useEffect } from 'react';
import { auth, firestore, collection, getDocs } from '../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Container } from 'react-bootstrap';

const CheckUserScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserExists = async () => {
      const user = auth.currentUser;
      if (user) {
        const adminCollection = collection(firestore, 'Users');
        const adminSnapshot = await getDocs(adminCollection);
        const adminList = adminSnapshot.docs.map(doc => doc.data().email);

        if (adminList.includes(user.email)) {
          toast.success('User found. Redirecting to form...');
          navigate('/user-form');
        } else {
          toast.error('User not found. Please buy a plan.');
        }
      }
    };

    checkUserExists();
  }, [navigate]);

  return (
    <Container className="check-screen d-flex align-items-center justify-content-center">
      <div>
        <div>
          <h3>Checking if you are an admin user...</h3>
        </div>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default CheckUserScreen;
