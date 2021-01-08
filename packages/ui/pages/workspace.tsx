import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { Icon } from 'components/Icon';
import { LetterPic } from 'components/LetterPic';
import { AppLayout } from 'components/AppLayout';
import React from 'react';

function Workspace() {
  return (
    <AppLayout>
      <div className="bg-gray-300 h-screen flex flex-col">
        <div className="flex justify-end bg-white border-b py-8 border-gray-200 w-full px-6">
          <div className="flex items-center justify-between w-1/5">
            <Button
              label="Invite"
              icon={<Icon name="chevron-right" />}
              size="md"
              color="primary"
              className="text-white focus:outline-none"
              onClick={() => {}}
            />
            <LetterPic
              letter="R"
              className=""
              color="primary"
              size="xs"
              textColor="purple"
            />
            <p className="text-black font-light text-base">Ramya</p>
          </div>
        </div>
        <div className="flex justify-between bg-white px-4 py-4">
          <div className="flex items-center justify-between w-2/5 px-4">
            <LetterPic
              letter="R"
              className="text-2xl"
              color="primary"
              size="lg"
              textColor="purple"
            />
            <div className="flex flex-col justify-between h-12">
              <h1 className="font-medium">
                Hello Ramya, we are glad you are here!
              </h1>
              <p className="text-sm text-gray-500">
                Let us see what you got
              </p>
            </div>
          </div>
          <div className="flex justify-between items-center w-64">
            <div className="flex flex-col h-12 justify-between items-center">
              <p className="text-sm text-gray-500">
                Number of Programs
              </p>
              <span className="text-2xl">2</span>
            </div>
            <div className="text-gray-200 text-2xl">|</div>

            <div className="flex flex-col h-12 justify-between items-center">
              <p className="text-sm text-gray-500">Pending Invites</p>
              <span className="text-2xl">2</span>
            </div>
          </div>
        </div>
        <div className="flex px-4">
          <Card
            className=""
            title="SSMD Gene Therapy"
            description="This program captures essential steps in the SSMD gene therapy roadmap"
            time="10 hours ago"
            icon={
              <LetterPic
                letter="R"
                className=""
                color="primary"
                size="xs"
                textColor="purple"
              />
            }
          />
          <Card
            title="SSMD Drug Repurposing"
            description="The drug repurposing program outlines all ongoing research projects to conduct a study"
            time="12 hours ago"
            className=""
            icon={
              <LetterPic
                letter="R"
                className=""
                color="primary"
                size="xs"
                textColor="purple"
              />
            }
          />
          <Card
            title=""
            description="+Add Program"
            time=""
            className="flex  justify-center mt-16 "
            icon=""
          />
        </div>
        <div className="py-4 px-4  mt-4">
          <div className="py-4 px-4 rounded bg-white ">
            <h1 className="text-base font-normal">
              Accept your invitation to collaborate
            </h1>
            <div className="flex justify-between items-center mt-4 border-b border-gray-200 py-4">
              <div className="flex items-center">
                <LetterPic
                  letter="A"
                  className=""
                  color="secondary"
                  size="md"
                  textColor="blue"
                />
                <div className="ml-4 flex flex-col justify-between h-12">
                  <p className="text-gray-500 text-xs">
                    <span className="text-black text-sm mr-2">
                      Ashley Ohalam
                    </span>
                    invited you to join
                    <span className="text-black text-sm ml-2">
                      Mitochondrial disorder drug repurposing
                    </span>
                  </p>
                  <p className="text-gray-400 text-sm">2 days ago</p>
                </div>
              </div>
              <Button
                label="Join Program"
                size="md"
                color="tertiary"
                className="text-sm text-gray-600 float-right border border-gray-300 focus:outline-none"
                onClick={() => {}}
              />
            </div>
            <div className="flex justify-between items-center mt-4 py-4">
              <div className="flex items-center">
                <LetterPic
                  letter="A"
                  className=""
                  color="secondary"
                  size="md"
                  textColor="blue"
                />
                <div className="ml-4 flex flex-col justify-between h-12">
                  <p className="text-gray-500 text-xs">
                    <span className="text-black mr-2 text-sm">
                      Ashley Ohalam
                    </span>
                    invited you to join
                    <span className="text-black ml-2 text-sm">
                      SSMD De-risking
                    </span>
                  </p>
                  <p className="text-gray-400 text-sm">2 days ago</p>
                </div>
              </div>
              <Button
                label="Join Program"
                size="md"
                color="tertiary"
                className="text-sm text-gray-600 float-right border border-gray-300 focus:outline-none"
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}

export default Workspace;
