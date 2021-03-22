import React, { useState } from 'react';
import { AppLayout } from 'components/AppLayout';
import Link from 'next/link';
import {
  MultipleProgram,
  WorkspaceHeader,
} from 'components/Pages/Workspace';

function Workspace() {
  const isFirstTimeVisitor = true

  return (
    <AppLayout>
      <div style={{backgroundColor:"lightgray",height:'100vh',display:"flex",flexDirection:"column"}} className="bg-gray-300 h-screen flex flex-col">
        <WorkspaceHeader
          description={
            isFirstTimeVisitor
              ? 'Our goal today is to get you one step ahead in your gene therapy treatment roadmap'
              : 'Let us see what you got' }
        />
        <div className="px-4 flex justify-center mt-8"><h1 className="text-2xl font-semibold mt-4 text-center">
                Begin by determining Gene Therapy feasibility
              </h1>
              <p className="text-gray-400 font-extralight mt-4 text-center">
                Our network of expert scientists have come up with
                just the necessary questions to assess feasibility.
                The decision is a
              </p>
              <p className="text-gray-400 font-extralight">
                good indication, but needs further validation from our
                science team.
              </p>
              <button
                type="button"
                style={{ backgroundColor: '#1890ff' }}
                className="text-sm text-white px-4 py-2 rounded focus:outline-none cursor-pointer mt-4"
              >
                <Link href="/workspace/stepform">
                  Determine Gene Therapy Feasibility
                </Link>
              </button>
            </div>
          </div>
        <MultipleProgram />
    </AppLayout>
  );
}

export default Workspace;
