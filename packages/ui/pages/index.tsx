import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { MainSection, TaskSection } from 'components/Pages/Program';
import Navbar from 'components/AppLayout/Navbar';
import { AppLayout } from 'components/AppLayout';
import records from 'fixtures/dashboard.json';
import { HOME_TABLE_HEADINGS } from 'constants/lists';
import styles from 'styles/program.module.css';
import { Button } from 'components/Button';

const USER_NAME = 'Ramya';
const Home = () => {
  const [isEditProgramModalOpen, setEditProgramModalOpen] = useState(
    false,
  );
  const [
    isAccountSettingModalOpen,
    setAccountSettingModalOpen,
  ] = useState(false);

  const [users, setUsers] = useState(null)

  useEffect(() => {
    async function fetchAndSetUsers() {
      const fetchUsersResponse = await axios.get('/users')
      console.log('fetchUsersResponse', fetchUsersResponse)
      const users = fetchUsersResponse.data
      setUsers(users)
    }
    fetchAndSetUsers()
  }, [])

  useEffect(() => {
    if (isEditProgramModalOpen || isAccountSettingModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isAccountSettingModalOpen, isEditProgramModalOpen]);

  return (
    <AppLayout>
      <Navbar
        setEditProgramModalOpen={setEditProgramModalOpen}
        setAccountSettingModalOpen={setAccountSettingModalOpen}
        username={USER_NAME}
      />
      <MainSection
        setEditProgramModalOpen={setEditProgramModalOpen}
        isEditProgramModalOpen={isEditProgramModalOpen}
        setAccountSettingModalOpen={setAccountSettingModalOpen}
        isAccountSettingModalOpen={isAccountSettingModalOpen}
      >
        <table className="table-fixed">
          <thead>
            <tr className={`${styles['table-header']}`}>
              {HOME_TABLE_HEADINGS.map((heading) => (
                <th key={heading}>{heading}</th>
              ))}
            </tr>
          </thead>
          {records.map((record) => (
            <TaskSection record={record} key={record.title} />
          ))}

          <tr>
            <td colSpan={6}>
              <Button
                onClick={() => {}}
                icon={<span>+</span>}
                label="Add Project"
                color="tertiary"
                size="custom"
                className="py-4  px-4 text-xl border border-gray-300 w-full flex flex-start font-semibold focus:outline-none text-gray-300 hover:text-gray-400 hover:border-blue-400"
              />
            </td>
          </tr>
        </table>
      </MainSection>
    </AppLayout>
  );
};

export default Home;
