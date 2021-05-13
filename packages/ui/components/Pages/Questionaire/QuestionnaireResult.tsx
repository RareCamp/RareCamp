import { Button, notification, Space, Typography } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { Questionnaire } from 'types'
import { useRouter } from 'next/router'
import {
  mutationsTypesMap,
  proteinSizeTypesMap,
} from 'constants/maps'

const { Title } = Typography
async function createProgramFrom(
  answers: Questionnaire,
  workspaceId: string,
) {
  const payload = {
    // TODO: description, name, abbreviation and omimId should be entered by the user
    program: {
      name: `${answers.disease} Therapy`,
      description: 'Gene Therapy',
      disease: {
        name: answers.disease,
        causalGene: answers.causalGene,
        mutationImpact: mutationsTypesMap[answers.mutationType],
        proteinSize: proteinSizeTypesMap[answers.proteinSize],
        organizationsWorkingOnDisease: [answers.foundation],
      },
    },
  }
  return axios.post(`/workspaces/${workspaceId}/programs`, payload)
}
export default function QuestionnaireResult({
  isFeasible,
  answers,
}: {
  isFeasible: boolean
  answers: Questionnaire
}) {
  const queryClient = useQueryClient()
  const router = useRouter()
  const { data } = queryClient.getQueryData<any>('defaultWorkspace')
  const createProgramMutation = useMutation(
    () => createProgramFrom(answers, data.workspace.workspaceId),
    {
      onSuccess: async (resp) => {
        const program = resp?.data?.program
        notification.success({
          duration: 2,
          message: 'Program created Successfully',
        })
        await queryClient.invalidateQueries('defaultWorkspace')
        await router.push(
          `/programs/${program.workspaceId}/${program.programId}`,
        )
      },
      onError: (error: Error) =>
        notification.error({
          duration: 2,
          description: error.message,
          message: 'Error occur while creating the program',
        }),
    },
  )
  return (
    <Space
      direction="vertical"
      size={20}
      style={{ textAlign: 'center', paddingRight: 32 }}
    >
      <img
        width="238px"
        src={isFeasible ? '/eligibility_5.png' : '/eligibility_6.png'}
        alt={`${isFeasible ? 'Not ' : ''}Eligible illustration`}
      />
      <div>
        <Title level={3}>
          {isFeasible
            ? 'Your disease may be eligible for a AAV based Gene Therapy'
            : 'Your disease is not eligible but we can still help!'}
        </Title>
        <p>
          {isFeasible
            ? "Our team of specialists is looking over the results and will reach out to you for more info to confirm your eligibility. In the mean time, let's start a program and build a gene therapy roadmap for you."
            : "We're sorry, but your disease doesn't qualify for AAV-based gene therapy. Regardless, our team of scientists can still offer assistance and you can use OpenTreatments to make tracking your treatment program easier."}
        </p>
      </div>
      {isFeasible ? (
        <Button
          type="primary"
          icon={<PlusCircleOutlined />}
          onClick={() => createProgramMutation.mutate()}
          loading={createProgramMutation.isLoading}
        >
          Create a new program
        </Button>
      ) : (
        <Space>
          <Button type="primary">
            <a href="mailTo:sanath@gpx4.org">
              Talk to our science team
            </a>
          </Button>
          <Button
            icon={<PlusCircleOutlined />}
            onClick={() => createProgramMutation.mutate()}
            loading={createProgramMutation.isLoading}
          >
            Add Program
          </Button>
        </Space>
      )}
    </Space>
  )
}
