import React from 'react'
import { Card } from 'components/Card'
import { LetterPic } from 'components/LetterPic'
import { Button } from 'antd'
import { CaretDownOutlined, PlusOutlined } from '@ant-design/icons'
import styles from 'styles/multipleprogram.module.css'
import programs from 'fixtures/programs.json'
import selectedprograms from 'fixtures/selectedprograms.json'

function MultipleProgram() {
  const avatarStyle =
    'inline-block h-6 w-6 rounded-full ring-2 ring-white text-sm'
  return (
    <>
      <div className="flex px-4">
        {programs.map((p) => (
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
                  className={` text-gray-600 ${avatarStyle}`}
                />
                {p.icons.map((item): any => (
                  <LetterPic
                    letter={(
                      <img
                        className="inline-block h-6 w-6 rounded-full ring-transparent"
                        src={item.src}
                        alt=""
                      />
                    )}
                    size="sm"
                    color={item.color}
                    className={`${avatarStyle}`}
                    textColor="blue"
                  />
                ))}
                <LetterPic
                  letter="+3"
                  size="sm"
                  color="secondary"
                  className={` mr-2 ${avatarStyle}`}
                  textColor="purple"
                />
              </div>
            }
          />
        ))}
        <div className="bg-white h-44 w-1/4 px-4 py-2 mr-4 mt-4 rounded flex flex-col justify-center items-center">
          {/* <Button
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
          /> */}
          <Button type="primary" icon={<PlusOutlined />}>
            Add Program
          </Button>
        </div>
      </div>
      <div className="py-4 px-4  mt-4">
        <div className="py-4 px-4 rounded bg-white ">
          <div className="flex justify-between items-center border-b border-gray-200 py-4">
            <h1 className="text-base font-semibold">
              SSMD may be eligible for AAV based Gene Therapy
            </h1>
            {/* <Button
              label="Modify Responses"
              size="custom"
              color="tertiary"
              className="text-sm text-gray-400 border border-gray-200 py-2 px-4 rounded focus:outline-none"
              onClick={() => {}}
            /> */}
            <Button icon={<PlusOutlined />}>Modify Responses</Button>
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
  )
}

export default MultipleProgram
