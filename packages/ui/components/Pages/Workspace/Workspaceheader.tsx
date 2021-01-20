import { LetterPic } from 'components/LetterPic';

const WorkspaceHeader = ({
  description,
}: {
  description: string;
}) => {
  return (
    <>
      <div className="flex bg-white border-b py-4 border-gray-200 w-full px-6  border border-gray-100 hover:border-blue-400">
        <h1 className="font-semibold">WorkSpace</h1>
      </div>
      <div className="flex justify-between bg-white px-4 py-4">
        <div className="flex items-center justify-between px-4">
          <LetterPic
            letter="R"
            className="text-2xl"
            color="primary"
            size="lg"
            textColor="purple"
          />
          <div className="flex flex-col justify-between h-14 ml-4">
            <h1 className="font-semibold">
              Hello Ramya, we are glad you are here!
            </h1>
            <p className="text-sm text-gray-500">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkspaceHeader;
