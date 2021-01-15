import React from 'react';
import { Button } from 'components/Button';
import { Card } from 'components/Card';
import { Icon } from 'components/Icon';
import { LetterPic } from 'components/LetterPic';
import styles from 'styles/multipleprogram.module.css';
import programs from 'fixtures/programs.json';
import selectedprograms from 'fixtures/selectedprograms.json';

function MultipleProgram() {
  return (
    <>
      <div className="flex px-4">
        {programs.map((p) => {
          return (
            <Card
              key={p.title}
              className={p.className}
              title={p.title}
              description={p.description}
              icon={
                <div className="flex -space-x-1 overflow-hidden">
                  <LetterPic
                    letter="F"
                    size="sm"
                    color="primary"
                    className="text-sm text-gray-600 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  />
                  <LetterPic
                    letter={
                      <img
                        className="inline-block h-6 w-6 rounded-full ring-transparent"
                        src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80"
                        alt=""
                      />
                    }
                    size="sm"
                    color="secondary"
                    className="text-sm inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    textColor="blue"
                  />
                  <LetterPic
                    letter={
                      <img
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-transparent"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    }
                    size="sm"
                    color="primary"
                    className="text-sm text-red-300 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                  />
                  <LetterPic
                    letter="+3"
                    size="sm"
                    color="secondary"
                    className="text-sm mr-2 inline-block h-6 w-6 rounded-full ring-2 ring-white"
                    textColor="purple"
                  />
                </div>
              }
            />
          );
        })}
        <div className="bg-white h-44 w-1/4 px-4 py-2 mr-4 mt-4 rounded flex flex-col justify-center items-center">
          <Button
            color="tertiary"
            size="md"
            icon={
              <Icon
                name="add-circled"
                className="w-6 text-blue-400"
              />
            }
            label="Add Program"
            onClick={() => {}}
            className="text-xs border-none focus:outline-none cursor-pointer"
          />
        </div>
      </div>
      <div className="py-4 px-4  mt-4">
        <div className="py-4 px-4 rounded bg-white ">
          <div className="flex justify-between items-center border-b border-gray-200 py-4">
            <h1 className="text-base font-semibold">
              SSMD may be eligible for AAV based Gene Therapy
            </h1>
            <Button
              label="Modify Responses"
              size="custom"
              color="tertiary"
              className="text-sm text-gray-400 border border-gray-200 py-2 px-4 rounded focus:outline-none"
              onClick={() => {}}
            />
          </div>
          <div
            className={`${styles['selected-programs']} w-4/5 flex justify-between items-center mt-4  pb-4`}
          >
            {selectedprograms.map((program): any => (
              <div>
                <h1>{program.title}</h1>
                <p>{program.subtitle}</p>
                <p>{program.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MultipleProgram;
