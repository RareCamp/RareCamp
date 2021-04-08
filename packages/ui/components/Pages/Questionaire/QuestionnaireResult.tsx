import { Button, notification, Space, Typography } from 'antd'
import { PlusCircleOutlined } from '@ant-design/icons'
import { useMutation, useQueryClient } from 'react-query'
import axios from 'axios'
import { Questionnaire } from 'types'
import { useRouter } from 'next/router'
import { mutationsTypesMap } from '../../../constants/maps'

const { Title } = Typography
async function createProgramFrom(
  answers: Questionnaire,
  workspaceId: string,
) {
  const payload = {
    // TODO: description, name, abbreviation and omimId should be entered by the user
    program: {
      name: 'Gene Therapy',
      description: 'Gene Therapy',
      disease: {
        name: answers.disease,
        causalGene: answers.causalGene,
        mutationImpact: mutationsTypesMap[answers.mutationType],
        proteinSize: 1100,
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
  const mutation = useMutation(
    () => createProgramFrom(answers, data.workspace.workspaceId),
    {
      onSuccess: async () => {
        notification.success({
          duration: 2,
          message: 'Program created Successfully',
        })
        await router.push('/')
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
        src={
          isFeasible
            ? '/Disease_Eligible_illustration.png'
            : '/NOT_Disease_Eligible_illustration.png'
        }
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
          onClick={() => mutation.mutate()}
          loading={mutation.isLoading}
        >
          Create a new program
        </Button>
      ) : (
        <Space>
          <Button type="primary">Talk to our science team</Button>
          <Button
            icon={<PlusCircleOutlined />}
            onClick={() => mutation.mutate()}
            loading={mutation.isLoading}
          >
            Add Program
          </Button>
        </Space>
      )}
    </Space>
  )
}
